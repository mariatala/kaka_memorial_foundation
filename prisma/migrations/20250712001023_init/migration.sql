-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "formType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "pointOfContact" TEXT,
    "address" TEXT,
    "socialLinks" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);
