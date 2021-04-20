const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const _ = require('underscore');

const jwt = require('jsonwebtoken');


// ModeloDB usuario
const Usuario = require('../models/usuario')

//Custom middlewares
const { verificarToken, verificarAdminRole } = require('../middlewares/auth')


//Obtener usuarios de la DB
app.get('/usuario', verificarToken, (req, res) => {
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite);
    Usuario.find({ estado: true }, 'nombre email img role google estado')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            Usuario.count({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    totalDatos: conteo
                })
            })
        })
})


//Obtener usuario por id
app.get('/usuario/:id', verificarToken, (req, res) => {
    idU = req.params.id;
    Usuario.findById(idU)
        .exec((err, usuario) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                usuario
            })
        })
})

// Crear usuario
    //Ruta de registros actual
// app.post('/usuario', [verificaToken, verificaAdmin_Role], function(req, res) {
app.post('/usuario', (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })
    })
})


//Actualizar usuario
app.put('/usuario/:id', [verificarToken, verificarAdminRole], (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
})


app.delete('/usuario/:id', [verificarToken, verificarAdminRole], (req, res) => {
    let id = req.params.id;
    let cambiaEstado = {
        estado: false
    };
    // Usuario.findByIdAndRemove(id, (err, usuarioBorrado)=>{
    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        };
        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'Usuario no encontrado'
                }
            })
        }
        res.json({
            ok: true,
            usuario: usuarioBorrado
        })
    })
})



module.exports = app;