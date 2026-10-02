/*
  Warnings:

  - A unique constraint covering the columns `[pedidoId]` on the table `Venta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "TipoVenta" AS ENUM ('POS', 'REDES_SOCIALES', 'WEB');

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "pedidoId" INTEGER,
ADD COLUMN     "tipo" "TipoVenta" NOT NULL DEFAULT 'POS';

-- CreateIndex
CREATE UNIQUE INDEX "Venta_pedidoId_key" ON "Venta"("pedidoId");

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE SET NULL ON UPDATE CASCADE;
