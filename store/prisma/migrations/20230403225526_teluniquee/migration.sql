/*
  Warnings:

  - A unique constraint covering the columns `[tel]` on the table `UserInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserInformation_tel_key" ON "UserInformation"("tel");
