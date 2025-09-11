-- CreateTable
CREATE TABLE "public"."Book" (
    "id" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
