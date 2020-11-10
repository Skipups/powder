const { Pass, Resort, db } = require("./server/db/index.js");

const ResortPass = db.model("ResortPass");
const epicList = require("./server/data/epic.js");
const mountainCList = require("./server/data/mountainC.js");
const ikonList = require("./server/data/ikon.js");
const pass = require("./server/db/models/pass");
const passList = require("./server/data/passList.js");

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    const createdEpicList = await Resort.bulkCreate(epicList);
    const createdIkonList = await Resort.bulkCreate(ikonList);
    const [
      alta,
      ara,
      aspen,
      bigs,
      grandt,
      mammoth,
      snowb,
      squaw,
      taos,
    ] = await Resort.bulkCreate(mountainCList);
    const [ikon, epic, mc] = await Pass.bulkCreate(passList);

    //creating exclusive epic resorts
    let joinedEpicResorts = await Promise.all(
      createdEpicList.map((res) => {
        ResortPass.create({
          resortId: res.id,
          passId: epic.id,
        });
      })
    );
    //creating exclusive ikon resorts
    let joinedIkonResorts = await Promise.all(
      createdIkonList.map(async (res) => {
        await ResortPass.create({
          resortId: res.id,
          passId: ikon.id,
        });
      })
    );
    // creating exclusive mc resorts, only 1
    let grandMC = await ResortPass.create({
      resortId: grandt.id,
      passId: mc.id,
    });

    //creating resorts that belong to more than 1 resort

    let altaMC = await ResortPass.create({
      resortId: alta.id,
      passId: mc.id,
    });
    let altaIkon = await ResortPass.create({
      resortId: alta.id,
      passId: ikon.id,
    });
    //arapohoe is part of mc, ikon,
    let araMC = await ResortPass.create({
      resortId: ara.id,
      passId: mc.id,
    });
    let araIkon = await ResortPass.create({
      resortId: ara.id,
      passId: ikon.id,
    });
    //aspen is part of mc, ikon,
    let aspenMC = await ResortPass.create({
      resortId: aspen.id,
      passId: mc.id,
    });
    let aspenIkon = await ResortPass.create({
      resortId: aspen.id,
      passId: ikon.id,
    });
    //big sky is part of mc, ikon,
    let bigsMC = await ResortPass.create({
      resortId: bigs.id,
      passId: mc.id,
    });
    let bigsIkon = await ResortPass.create({
      resortId: bigs.id,
      passId: ikon.id,
    });

    //mamoth is part of mc, ikon,
    let mammothMC = await ResortPass.create({
      resortId: mammoth.id,
      passId: mc.id,
    });
    let mammothIkon = await ResortPass.create({
      resortId: mammoth.id,
      passId: ikon.id,
    });
    //snowbird is part of mc, ikon,
    let snowbMC = await ResortPass.create({
      resortId: snowb.id,
      passId: mc.id,
    });
    let snowbIkon = await ResortPass.create({
      resortId: snowb.id,
      passId: ikon.id,
    });
    //squaw is part of mc, ikon,
    let squawMC = await ResortPass.create({
      resortId: squaw.id,
      passId: mc.id,
    });
    let squawIkon = await ResortPass.create({
      resortId: squaw.id,
      passId: ikon.id,
    });

    //taos is part of mc, ikon,
    let taosMC = await ResortPass.create({
      resortId: taos.id,
      passId: mc.id,
    });
    let taosIkon = await ResortPass.create({
      resortId: taos.id,
      passId: ikon.id,
    });

    console.log("DB SYNCED");
  } catch (e) {
    console.log("ERROR SEEDING DB");
    console.log(e);
    throw new Error(e);
  }
}

module.exports = { syncAndSeedDatabase };
