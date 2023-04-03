/*
  Warnings:

  - Added the required column `address` to the `UserInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cin` to the `UserInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `naissance` to the `UserInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserInformation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cin" TEXT NOT NULL,
    "naissance" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserInformation" ("id") SELECT "id" FROM "UserInformation";
DROP TABLE "UserInformation";
ALTER TABLE "new_UserInformation" RENAME TO "UserInformation";
CREATE UNIQUE INDEX "UserInformation_userId_key" ON "UserInformation"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
