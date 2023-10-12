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

    const careCenterId = await prisma.careCenter.findMany()

    const medicalServices = await prisma.medicalServices.createMany({
        data: [
            {
                service: "Cirugía",
                floor: 2,
                CareCenterId: careCenterId[0].id,
            },
            {
                service: "Cirugía",
                floor: 4,
                CareCenterId: careCenterId[1].id,
            }
        ]
    })

    console.log(medicalServices)

    const medicalServicesId = await prisma.medicalServices.findMany()

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
                MedicalServiceId: medicalServicesId[0].id,
                CareCenterId: careCenterId[0].id,
            },
            {
                name: "BOMBA DE INFUSIÓN",
                model: "TE-171",
                brand: "TERUMO",
                key: "1203000-144",
                nationalKey: "10001400",
                status: "operative",
                condition: 'regular',
                MedicalServiceId: medicalServicesId[1].id,
                CareCenterId: careCenterId[1].id,
            },
            {
                name: "ESTUFA",
                model: "T-500",
                brand: "MEMMERT",
                key: "100-144",
                nationalKey: "3619503",
                status: "operative",
                condition: 'regular',
                MedicalServiceId: medicalServicesId[1].id,
                CareCenterId: careCenterId[1].id,
            },
            {
                name: "ESTERILIZADOR POR VAPOR AUTOGENERADO",
                model: "XG1-DSMSD-0.24B",
                brand: "MEHECO",
                key: "20113064",
                nationalKey: "5168583",
                status: "operative",
                condition: 'good',
                MedicalServiceId: medicalServicesId[1].id,
                CareCenterId: careCenterId[1].id,
            },
            {
                name: "Autoclave",
                model: "S410",
                brand: "Delta clave",
                key: "600415081085",
                nationalKey: "675565",
                status: "inoperative",
                condition: 'bad',
                MedicalServiceId: medicalServicesId[1].id,
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