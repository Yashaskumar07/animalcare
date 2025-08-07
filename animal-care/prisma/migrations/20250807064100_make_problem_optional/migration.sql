/*
  Warnings:

  - You are about to drop the column `ownerEmail` on the `VetAppointment` table. All the data in the column will be lost.
  - Added the required column `email` to the `VetAppointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."VetAppointment" DROP COLUMN "ownerEmail",
ADD COLUMN     "email" TEXT NOT NULL;
