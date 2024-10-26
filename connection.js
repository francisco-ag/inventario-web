 const fs = require('fs');
const { google } = require('googleapis');
const express = require('express');
const app = express();

// Configuración del cliente OAuth
const credentials = JSON.parse(fs.readFileSync('credentials.json'));


const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Autenticación
oAuth2Client.setCredentials(JSON.parse(fs.readFileSync('token.json')));

// Acceso a la hoja de cálculo
const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

// app.get('/inventario', (req, res) => {
//   sheets.spreadsheets.values.get({
//     spreadsheetId: 'TU_ID_DE_HOJA',
//     range: 'Sheet1!A1:E10',
//   }, (err, result) => {
//     if (err) return res.status(500).send('Error en la API: ' + err);
//     const rows = result.data.values;
//     res.send(rows);
//   });
// });

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
