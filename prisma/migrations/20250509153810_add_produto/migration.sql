/*
  Warnings:

  - You are about to drop the `UsuarioDoacao` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `atualizadaEm` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'DOADOR', 'COMUM');

-- DropForeignKey
ALTER TABLE "UsuarioDoacao" DROP CONSTRAINT "UsuarioDoacao_doacaoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioDoacao" DROP CONSTRAINT "UsuarioDoacao_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "atualizadaEm" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "criadaEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "iconeUrl" TEXT;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "fotoUrl" TEXT,
ADD COLUMN     "telefone" TEXT,
ADD COLUMN     "tipo" "TipoUsuario" NOT NULL DEFAULT 'COMUM';

-- DropTable
DROP TABLE "UsuarioDoacao";

-- CreateTable
CREATE TABLE "DoacaoCompartilhada" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "doacaoId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DoacaoCompartilhada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogAlteracaoDoacao" (
    "id" TEXT NOT NULL,
    "doacaoId" TEXT NOT NULL,
    "alteradoPor" TEXT NOT NULL,
    "campo" TEXT NOT NULL,
    "valorAntigo" TEXT NOT NULL,
    "valorNovo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogAlteracaoDoacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DoacaoCompartilhada_usuarioId_doacaoId_key" ON "DoacaoCompartilhada"("usuarioId", "doacaoId");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nome_key" ON "Categoria"("nome");

-- CreateIndex
CREATE INDEX "Categoria_nome_idx" ON "Categoria"("nome");

-- CreateIndex
CREATE INDEX "Doacao_status_idx" ON "Doacao"("status");

-- CreateIndex
CREATE INDEX "Doacao_data_idx" ON "Doacao"("data");

-- CreateIndex
CREATE INDEX "Usuario_criadoEm_idx" ON "Usuario"("criadoEm");

-- AddForeignKey
ALTER TABLE "DoacaoCompartilhada" ADD CONSTRAINT "DoacaoCompartilhada_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoacaoCompartilhada" ADD CONSTRAINT "DoacaoCompartilhada_doacaoId_fkey" FOREIGN KEY ("doacaoId") REFERENCES "Doacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAlteracaoDoacao" ADD CONSTRAINT "LogAlteracaoDoacao_doacaoId_fkey" FOREIGN KEY ("doacaoId") REFERENCES "Doacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAlteracaoDoacao" ADD CONSTRAINT "LogAlteracaoDoacao_alteradoPor_fkey" FOREIGN KEY ("alteradoPor") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
