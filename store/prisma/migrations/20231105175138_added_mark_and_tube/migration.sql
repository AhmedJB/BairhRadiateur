-- AlterTable
ALTER TABLE "ImportedProduct" ADD COLUMN     "markId" TEXT,
ADD COLUMN     "tubeId" TEXT;

-- CreateTable
CREATE TABLE "Tube" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tube_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mark" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Mark_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImportedProduct" ADD CONSTRAINT "ImportedProduct_tubeId_fkey" FOREIGN KEY ("tubeId") REFERENCES "Tube"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportedProduct" ADD CONSTRAINT "ImportedProduct_markId_fkey" FOREIGN KEY ("markId") REFERENCES "Mark"("id") ON DELETE SET NULL ON UPDATE CASCADE;
