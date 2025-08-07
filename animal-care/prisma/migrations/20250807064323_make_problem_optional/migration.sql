/*
  Warnings:

  - The primary key for the `VetAppointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ownerPhone` on the `VetAppointment` table. All the data in the column will be lost.
  - The `id` column on the `VetAppointment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `ownerName` to the `VetAppointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `VetAppointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `VetAppointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."VetAppointment" DROP CONSTRAINT "VetAppointment_pkey",
DROP COLUMN "ownerPhone",
ADD COLUMN     "ownerName" TEXT NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "VetAppointment_pkey" PRIMARY KEY ("id");
