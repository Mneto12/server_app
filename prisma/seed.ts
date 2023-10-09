import { PrismaClient } from "@prisma/client";
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

    const municipalitiesId = await prisma.municipalities.findMany({
        where: {StateId: stateId.id}
    })

    const careCenters = await prisma.careCenter.createMany({
        data: [
            {
                name: "SERVICIO AUTÓNOMO HOSPITAL UNIVERSITARIO DE MARACAIBO",
                typeCenter: 4,
                director: "Dr. Pedro Iturbe",
                StateId: stateId.id,
                MunicipalityId: municipalitiesId[0].id,
            },
            {
                name: "HOSPITAL GENERAL DEL SUR Dr. PEDRO ITURBE",
                typeCenter: 3,
                StateId: stateId.id,
                MunicipalityId: municipalitiesId[1].id,
            },
        ]
    })

    console.log(careCenters)

    const medicalServices = await prisma.medicalServices.createMany({
        data: [
            {
                service: "Cirugía",
                floor: 2,
                CareCenterId: careCenters[0].id,
            },
            {
                service: "Cirugía",
                floor: 4,
                CareCenterId: careCenters[1].id,
            }
        ]
    })

    console.log(medicalServices)

    const careCenterId = await prisma.careCenter.findMany({
        where: {StateId: stateId[0].id}
    })

    const equipments = await prisma.equipments.createMany({
        data: [
            {
                name: "BOMBA DE INFUSIÓN",
                model: "TE-171",
                brand: "TERUMO",
                key: "1203000-141",
                nationalKey: "10001536",
                status: "operative",
                condition: 'good',
                MedicalServiceId: medicalServices[0].id,
                CareCenterId: careCenterId[0].id,
            },
            {
                name: "BOMBA DE INFUSIÓN",
                model: "TE-171",
                brand: "TERUMO",
                key: "1203000-141",
                nationalKey: "10001536",
                status: "operative",
                condition: 'good',
                MedicalServiceId: medicalServices[1].id,
                CareCenterId: careCenterId[1].id,
            }
        ],
    })

    console.log(equipments)
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