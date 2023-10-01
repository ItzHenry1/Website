//Testeos de Endpoint

import axios from 'axios';
import chalk from 'chalk';

const endpoints = ['/create-forum']
const requestData = {
  title: 'MI nuevo foro',
  description: 'Nose',
};
endpoints.forEach(async element => {
  const apiUrl = `http://localhost/api/${element}`
  await axios
    .post(apiUrl, requestData)
    .then((response) => {
      console.log(chalk.yellow(`[Endpoint: ${element}]`), chalk.green(`Test pasado correctamente`));
    })
    .catch((error) => {
      console.error(`[Endpoint ${element}] A fallado el test!`);
    });
});; 


