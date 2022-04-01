# Informações

Esse app express é o API Gateway da atividade. Os outros dois:
[https://github.com/ricardobgx/atividade-2-sd](https://github.com/ricardobgx/atividade-2-sd)

[https://github.com/weligtonferreira/atividade-2-sd-front](https://github.com/weligtonferreira/atividade-2-sd-front)

Se tratam da API de Gateway e do front, respectivamente.

## Variáveis de amviente

PORT={Porta em que o servidor irá rodar}
COMMENTS_API_URL={URL em que a API de comentários está sendo executada}

## Para executar

Executar `npm install` para instalar os módulos;
`npm start` para iniciar o servidor express.

Para que a aplicação funcione por inteiro, é necessário iniciar os projetos `node` supracitados. E só a partir de então realizar as requisições pelo front-end, que serão interceptadas pela API de Gateway.
