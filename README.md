## Validação de requisições utilizando Joi

## Quando estamos trabalhando com requisições a um back-end, é necessário fazermos uma verificação dos dados enviados pelo client ao servidor para, a partir daí, armazenarmos esses dados.

## Vamos imaginar que o lado do client enviará, por meio dos campos **name** e **age** informações sobre a idade e o nome do usuário.

    > {
        "name": "Meika"
        "idade": 18
    }


# Para os exemplos de hoje, utilizaremos a biblioteca Joi, mas existem também várias outras bibliotecas que também podem nos trazer o mesmo resultado, como a Yup.

# Primeiro devemos instalar o Joi
     
     > npm install joi

