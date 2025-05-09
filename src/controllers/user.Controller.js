import { generateToken } from "../service/auth.service.js";
 import { PrismaClient } from "@prisma/client";

 const prisma = new PrismaClient()


export const loginUser = async (req,res) => {
 const { email, senha } = req.body;


 try{
  const user =  await prisma.usuario.findMany({
    where:{
      email:email
    }
  })

  if (!user ||  user.senha !== senha){
    return res.status(401).json({error: "Credenciais inválidas."})
  }

  const token = generateToken(user);
  return res.status(200).json({ token })
 }catch(error){
  console.error(error);
   return res.status(500).json({ error: "Erro ao realizar login." });
 }
};