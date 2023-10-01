import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import bodyParser from 'body-parser';
import forumRouter from './routes/forum';

const app = express();
const port: Number = 80;

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
  app.use(express.static('public'));
  app.set('view engine', 'ejs');

app.get('/', async (req: any, res: any) => {
  await res.render('index')
});

// Middleware
app.use(bodyParser.json());

// Use the forum router
app.use('/api', forumRouter);

app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});
