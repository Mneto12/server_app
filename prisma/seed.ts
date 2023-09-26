import { PrismaClient, TypeRepair } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    const states = await prisma.states.createMany({
        data: [
            {name: "Zulia"},
            {name: "Carabobo"},
            {name: "Lara"},
            {name: "Tachira"},
            {name: "Merida"},
            {name: "Trujillo"},
            {name: "Yaracuy"},
            {name: "Falcon"},
            {name: "Aragua"},
            {name: "Miranda"},
            {name: "Distrito Capital"},
            {name: "Vargas"},
            {name: "Anzoategui"},
            {name: "Bolivar"},
            {name: "Sucre"},
            {name: "Monagas"},
            {name: "Nueva Esparta"},
            {name: "Amazonas"},
            {name: "Guarico"},
            {name: "Apure"},
            {name: "Delta Amacuro"},
            {name: "Portuguesa"},
            {name: "Barinas"},
            {name: "Cojedes"},
        ]
    })

    console.log(states)

    const stateId = await prisma.states.findFirst({
        where: {name: "Zulia"}
    })

    const municipalities = await prisma.municipalities.createMany({
        data: [
            {
                name: "Maracaibo",
                StateId: stateId.id,
            },
            {
                name: "San Francisco",
                StateId: stateId.id,
            },
            {
                name: "Machiques",
                StateId: stateId.id,
            }
        ]
    })

    console.log(municipalities)

    const equipments = await prisma.equiments.createMany({
        data: [
            {
                name: "test",
                model: "test",
                brand: "test",
                key: "abc123",
                nationalKey: "XS12345",
                status: "active",
                typeRepair: 'corrective',
                condition: 'good',
            },
            {
                name: "test",
                model: "test",
                brand: "test",
                key: "abc1234",
                nationalKey: "XS12346",
                status: "active",
                typeRepair: 'corrective',
                condition: 'good',
            }
        ],
    })

    console.log(equipments)

    const municipalitiesId = await prisma.municipalities.findMany({
        where: {StateId: stateId.id}
    })

    const careCenters = await prisma.careCenter.createMany({
        data: [
            {
                name: "test",
                typeCenter: "test",
                StateId: stateId.id,
                MunicipalityId: municipalitiesId[0].id,
            },
            {
                name: "test2",
                typeCenter: "test2",
                StateId: stateId.id,
                MunicipalityId: municipalitiesId[1].id,
            },
        ]
    })

    console.log(careCenters)
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });