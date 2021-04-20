const express = require('express');
const app = express();
const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Custom middlewares
const { verificarToken, verificarAdminRole } = require('../middlewares/auth')


app.post('/login', (req, res) => {

    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrecta'
                }
            })
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrecta'
                }
            })
        }

        //expira en un mes: 60segundosX60minutos = 1h; 1hX24 = 1dia; 1diaX30 = 1mes
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            user: usuarioDB,
            token
        })

    })
})


app.post('/token', verificarToken, (req, res) => {

    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrecta'
                }
            })
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrecta'
                }
            })
        }

        //expira en un mes: 60segundosX60minutos = 1h; 1hX24 = 1dia; 1diaX30 = 1mes
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            user: usuarioDB,
            token
        })

    })
})



module.exports = app;