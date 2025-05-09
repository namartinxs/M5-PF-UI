/*
  Warnings:

  - The values [COMUM] on the enum `TipoUsuario` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `DoacaoCompartilhada` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "StatusDoacao" ADD VALUE 'EXCLUIDO';

-- AlterEnum
BEGIN;
CREATE TYPE "TipoUsuario_new" AS ENUM ('ADMIN', 'DOADOR', 'DONATARIO');
ALTER TABLE "Usuario" ALTER COLUMN "tipo" DROP DEFAULT;
ALTER TABLE "Usuario" ALTER COLUMN "tipo" TYPE "TipoUsuario_new" USING ("tipo"::text::"TipoUsuario_new");
ALTER TYPE "TipoUsuario" RENAME TO "TipoUsuario_old";
ALTER TYPE "TipoUsuario_new" RENAME TO "TipoUsuario";
DROP TYPE "TipoUsuario_old";
ALTER TABLE "Usuario" ALTER COLUMN "tipo" SET DEFAULT 'DONATARIO';
COMMIT;

-- DropForeignKey
ALTER TABLE "DoacaoCompartilhada" DROP CONSTRAINT "DoacaoCompartilhada_doacaoId_fkey";

-- DropForeignKey
ALTER TABLE "DoacaoCompartilhada" DROP CONSTRAINT "DoacaoCompartilhada_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "tipo" SET DEFAULT 'DONATARIO';

-- DropTable
DROP TABLE "DoacaoCompartilhada";

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "nota" INTEGER NOT NULL DEFAULT 5,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,
    "doacaoId" TEXT,
    "campanhaId" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_doacaoId_fkey" FOREIGN KEY ("doacaoId") REFERENCES "Doacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_campanhaId_fkey" FOREIGN KEY ("campanhaId") REFERENCES "Campanha"("id") ON DELETE SET NULL ON UPDATE CASCADE;
