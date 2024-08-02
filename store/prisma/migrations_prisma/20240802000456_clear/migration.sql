-- CreateTable
CREATE TABLE "Favorites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorites_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ImportedProduct" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tube" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mark" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ImportedProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "isEnabled" BOOLEAN NOT NULL DEFAULT false,
    "isReduced" BOOLEAN NOT NULL DEFAULT false,
    "newPrice" REAL NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "minShipping" INTEGER NOT NULL DEFAULT 0,
    "maxShipping" INTEGER NOT NULL DEFAULT 0,
    "imported" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tubeId" TEXT,
    "markId" TEXT,
    CONSTRAINT "ImportedProduct_tubeId_fkey" FOREIGN KEY ("tubeId") REFERENCES "Tube" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ImportedProduct_markId_fkey" FOREIGN KEY ("markId") REFERENCES "Mark" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TestTest" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderId" TEXT NOT NULL,
    CONSTRAINT "OrderProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
