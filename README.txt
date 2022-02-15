Rio de Janeiro 13/02/2022

Tecnologias:
NodeJS v16
imageMagick

Bibliotecas:
express
express-handlebars
multer
gm


Descrição:
Projeto para edição de imagens
altura x largura e conversão em png
após ser enviada, o destino será a pasta "convertidos"
na raiz do projeto, este destino pode ser alterado
no arquivo router/router.js na rota do metodo POST
segundo o exemplo abaixo.


router.post("/",upload.single('avatar'),async (req,res)=>{

    const nome = req.file.originalname;
    const {tamX,tamY} = req.body;

    try {

    await gm(req.file.path)
    .resize(tamX,tamY)
    .noProfile()
    .write(`./INFORME_SEU_NOVO_CAMINHO_AQUI/${nome.split(".")[0]}.png`,(err)=>{
        if (err) {
            console.error(err.message)
        } else {
            console.log("Sucesso !:)")
        }
    });
    res.redirect("/");

    } catch (error) {
        console.error(error.message);
    }

})
