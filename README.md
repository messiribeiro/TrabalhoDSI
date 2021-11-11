##### Validação de requisições utilizando Joi

##### Quando estamos trabalhando com requisições a um back-end, é necessário fazermos uma verificação dos dados enviados pelo client ao servidor para, a partir daí, armazenarmos esses dados.

##### Vamos imaginar que o lado do client enviará, por meio dos campos *name* e *age* informações sobre a idade e o nome do usuário.

    {
        "name": "Meika"
        "idade": 18
    }

##### é esperado que chegue no corpo da requisição um campo "name" contendo uma string, e um campo "idade" contendo um número inteiro (integer), por isso, devemos fazer uma validação para que os dados da requisição cheguem como esperado.

#### Existem várias bibliotecas que podem nos auxiliar na validação de requisições, mas hoje utilizaremos o ![Joi]https://joi.dev/api/?v=17.4.2

#### Primeiro devemos instalar o Joi
     
     > npm install joi



