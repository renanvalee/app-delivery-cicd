const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <body style="font-family: sans-serif; text-align: center; padding-top: 50px; background-color: #c8e6c9;">
      <h1>AppDelivery - Versão 2.0 (Canary Release)</h1>
      <p>Deploy automatizado rodando no Google Cloud Run!</p>
    </body>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
