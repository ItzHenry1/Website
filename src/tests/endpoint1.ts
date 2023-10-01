//Testeos de Endpoint

import axios from 'axios';
import chalk from 'chalk';

const endpoints = ['create-forum', '']
const requestData = {
  title: 'Mi nuevo foro',
  description: 'Nose',
};
endpoints.forEach(async element => {
  const apiUrl = `http://localhost/api/${element}`
  await axios
    .post(apiUrl, requestData)
    .then((response) => {
      console.log(chalk.yellow(`[Endpoint: ${element}]`), chalk.green(`Test pasado correctamente`));
      console.log(`Respuesta: `, response)
    })
    .catch((error) => {
      console.error(chalk.yellow(`[Endpoint ${element}]`), chalk.red(`A fallado el test!`));
      console.log(chalk.red(error))
    });
});; 


