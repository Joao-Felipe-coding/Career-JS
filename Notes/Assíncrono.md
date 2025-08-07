
## Promises

como um callback, este utilitário fará com que o sistema respeite uma ordem, independente de diferenças de envio.

`return new Promise(resolve, reject)=> {}`

### -resolve

utilizado dentro das Promises quando o código executou com sucesso, então ele resolve o código para você.

### -reject

utilizado dentro das Promises quando houver algum erro no código, então ele rejeita.


##### Alguns métodos com Promises: 
- Promise.all: me retorna todas juntas, sem necessariamente ser em seu tempo de execução 1 por 1.
- Promise.race: a entrega do primeiro valor que for resolvido mais rápido.
- Promise.resolve: para entregar uma promessa já resolvida
- Promise.reject: para entregar uma promessa já rejeitada