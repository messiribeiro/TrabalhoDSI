##### Validação de requisições utilizando Joi

##### Quando estamos trabalhando com requisições a um back-end, é necessário fazermos uma verificação dos dados enviados pelo client ao servidor para, a partir daí, armazenarmos esses dados.

##### Vamos imaginar que o lado do client enviará, por meio dos campos *name* e *age* informações sobre a idade e o nome do usuário.

    {
        "name": "Meika"
        "age": 18
    }

##### é esperado que chegue no corpo da requisição um campo "name" contendo uma string, e um campo "age" contendo um número inteiro (integer), por isso, devemos fazer uma validação para que os dados da requisição cheguem como esperado.

#### Existem várias bibliotecas que podem nos auxiliar na validação de requisições, mas hoje utilizaremos o [Joi](https://joi.dev/api/).

#### Instalando o Joi
     
     > npm install joi

#### Após a instalação devemos fazer a importação do Joi.

    const Joi = require("joi")

#### Agora precisamos fazer a configuração do Joi, ou seja, determinar o que é esperado no campo "name" e no campo "age".

    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

      age: Joi.number()
        .integer()
        .required()
    })

#### No cógigo acima, estamos informamos que temos dois campos (name, age) e em seguinda informamos como os dados desses campos devem vir. No name, por exemplo, informamos que ele deve ser alfanumérico, deve conter no mínimo 3 caracteres, no máximo 30 caracteres e que é um campo obrigatório. Já no campo age, informamos que deve ser do tipo integer ou inteiro. Existem vários filtros e você pode encontralos na documentação do [Joi](https://joi.dev/api/)

#### Para verificarmos se os dados estão corretos e previnir possíveis erros, faremos o seguinte:

     try {
        await schema.validateAsync({ nome: data.nome, idade: data.idade})
        await connection("user").insert(data)
        res.json({message: "success"}).status(200)
     } catch (err) {
        console.log(err.message)
        res.json({message: err.message}).status(400)
    }

#### Utilizando o *try/catch* nós podemos capturar possíveis erros, sendo possível o envio de um aviso ao client. Dentro do *try* nós chamamos o schema.validateAsync() passando como parâmetro os dados que vieram do corpo da requisição. O validateAsync(), por sua vez, irá verificar se o conteúdo dos campos estão como informamos que deveriam estar. O *catch* será executado caso o *try* tenha capturado algum erro. Dentro do *catch* nós capturamos a mensagem do erro e enviamos como resposta para o client, juntamente com o [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 400.

#### Dessa forma, podemos garantir que apenas requisições validas sejam aceitas, impedindo possíveis erros em nossa aplicação.
