// ===
//  Puerto
// ====
process.env.PORT = process.env.PORT || 3000;


// ===
//  Entorno
// ====
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===
//  Vencimiento token [60seg 60min 24horas 30dias == 1 mes]
// ====
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ===
//  Seed de autenticacion
// ====
process.env.SEED = process.env.SEED || 'seed-de-desarrollo' 



// ===
//  DB
// ====
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/profApp';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;