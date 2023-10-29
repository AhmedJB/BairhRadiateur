-- AlterTable
ALTER TABLE "ImportedProduct" ADD COLUMN     "maxShipping" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "minShipping" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "isEnabled" SET DEFAULT false;
