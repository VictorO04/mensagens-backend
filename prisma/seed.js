import prisma from "../lib/prisma.js";

const main = async () => {
    console.log('🌱 Starting seed...');

    await prisma.usuario.createMany({
        data: [
        ],
        skipDuplicates: true,
    });

    console.log('✅ Seed finished');
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });