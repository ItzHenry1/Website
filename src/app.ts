import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port: Number = 3000;

// Conectar a la base de datos MongoDB
const key: any = process.env.key
mongoose.connect(key)
.then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error: any) => {
    console.error('Error de conexión a MongoDB:', error);
  });

  //Pagina principal

  app.set('view engine', 'ejs');
  app.use(express.static('public'));

app.get('/', (req: any, res: any) => {
  const data = {
    hola: 'test'
  }
  res.render('index')
});

app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
