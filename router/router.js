const express = require("express");
const router = express.Router();
const gm = require('gm').subClass({imageMagick: true});
const multer  = require('multer');
const storage = require('../storage/storage');
const upload = multer({ storage });
const fs = require('fs');

router.get("/",(req,res)=>{
    res.render("home",{
        title:'Home'
    });
})

router.post("/",upload.single('avatar'),async (req,res)=>{

    const nome = req.file.originalname;
    const {tamX,tamY} = req.body;

    try {

    await gm(req.file.path)
    .resize(tamX,tamY)
    .noProfile()
    .write(`./convertidos/${nome.split(".")[0]}.png`,(err)=>{
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

module.exports = router;