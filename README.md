# Teste

Foi criada uma aplicação em Node que efetua um crawler da página worldometers e pega as informações dos casos de covid no mundo(casos, mortes e casos recuperados). As informações são adicionadas a um banco MongoDB e também aparecem no navegador ao executar:

```shell
http://localhost:3001/
```

### Construção

Ao clonar o projeto execute comando abaixo:

```shell
yarn
```

### Rodando o Projeto


```shell
yarn dev
```

O comando irá iniciar o servidor node após isso é só criar uma imagem mongo no docker para verificar a inserção dos dados. Os dados aparecem também na tela do navegador.

