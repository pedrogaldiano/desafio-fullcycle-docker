### Como gerar a imagem e executá-la

```
// Dentro da pasta do dockerfile:

// Para buildar a imagem
docker build -t nome-da-imagem .

// Listar imagens
docker image ls

// Executar a imagem
docker run --rm nome-da-imagem
```

#### O resultado esperado é printar:
`Full Cycle Rocks!!`