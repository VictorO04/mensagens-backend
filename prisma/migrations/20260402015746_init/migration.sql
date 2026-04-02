-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "anonimo" BOOLEAN NOT NULL DEFAULT false,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensagens" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
