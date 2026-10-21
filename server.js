import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express()
const PORT = process.env.PORT || 5500;
const URL_API = "https://api.openai.com/v1/chat/completions";
const MODELO = "openai/gpt-oss-120b";

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const user= []


app.post('/cadastro', (req, res) => {
    const { usuario, email, senha } = req.body

    if (!usuario || !email || !senha) {
       return res.status(400).json({
            erro: "Preencha todos os campos!"
        })
    }

    if(senha.length<6){
       return res.status(400).json({
        erro:"a senha precisa ter 6 caracteres ou mais"
       })
    }
    
    const emailExiste= user.find((busca)=>busca.email===email)

    if(emailExiste){
        return res.status(409).json({
            erro:"o email já foi cadastrado"
        })
    }
    
    console.log(`Recebido, aguarde 8 segundos`)

    user.push({usuario, email, senha})

   setTimeout(() => {
        res.json({
            "mensagem": "CADASTRO COM SUCESSO",
            "PERFIL": `Usuario @${usuario} cadastrado com o email ${email}`
        });
        console.log(`O usuario cadastrado foi ${usuario}`)
    }, 8000)

})

app.post('/login', (req, res)=>{
    const {email, senha} = req.body;
    
    if (!email || !senha) {
        return res.status(400).json({erro:"Preencha todos os campos"});
    }

    const emailExiste = user.find((busca)=> busca.email.toLowerCase() === email.toLowerCase());

    if (!emailExiste || emailExiste.senha != senha) {
        return res.status(400).json({erro:"Email ou senha incorretos!"});
    }

    return res.json({
        mensagem: "Login realizado com Sucesso!!",
        usuario: emailExiste.email
    });
})


app.listen(PORT, () => {
    console.log('servidor rodando')
})