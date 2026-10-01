/*
  Warnings:

  - You are about to drop the column `descuento` on the `DetalleVenta` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `Venta` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Venta` table. All the data in the column will be lost.
  - Added the required column `subtotalVenta` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalVenta` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleVenta" DROP COLUMN "descuento";

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "subtotal",
DROP COLUMN "total",
ADD COLUMN     "subtotalVenta" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "totalVenta" DECIMAL(10,2) NOT NULL;
