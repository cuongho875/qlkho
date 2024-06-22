/*
  Warnings:

  - You are about to drop the `inventory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_productId_fkey`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `quantity` INTEGER NOT NULL;

-- DropTable
DROP TABLE `inventory`;
