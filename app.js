const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Mi servidor de prueba de Delvas funciona.");
});
app.get("/saludo", (req, res) => {
  res.send("Hola desde la ruta de saludo de Delvas.");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
