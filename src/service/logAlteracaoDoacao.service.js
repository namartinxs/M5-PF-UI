import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function  getAllLogsService() {
    return prisma.logAlteracaoDoacao.findMany({
        include:{
            doacao: true,
            usuario:true,
        },
    });
}


export async function getLogByIdService(id) {
    return prisma.logAlteracaoDoacao.findUnique({
        where:{id},
        include:{
            doacao:true,
            usuario:true,
        }
    })
}

export async function createLogService(data) {
    return prisma.logAlteracaoDoacao.create({data});
}

export async function updateLogService(id,data){
    return prisma.logAlteracaoDoacao.update({
        where: {id},
        data,
    })
}

export async function deleLogService(id) {
    return prisma.logAlteracaoDoacao.delete({
        where: { id }
    })
}