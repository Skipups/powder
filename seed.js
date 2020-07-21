const { Pass, Resort, db } = require("./server/db/index.js");

const ResortPass = db.model("ResortPass");
const epicList = require("./epic.js");
const mountainCList = require("./mountainC.js");
const ikonList = require("./ikon.js");
const pass = require("./server/db/models/pass");
const passList = require("./passList.js");

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

    // await ikon.setPasses([taos, aspen])
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

    //creating resorts that below to more than 1 resort
    //alta is part of mc, ikon,
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

    //mc doesn't have any unique resorts
    //need to create each of it's resort one at a time and then join it it's resorts

    console.log("DB SYNCED");
  } catch (e) {
    console.log("ERROR SEEDING DB");
    console.log(e);
    throw new Error(e);
  }
}

module.exports = { syncAndSeedDatabase };

// let joinedMCResorts = await Promise.all(
//   createdEpicList.map(async (res) => {
//     await ResortPass.create({
//       resortId: res.id,
//       passId: mc.id,
//     });
//   })
// );

// let joinedIkonResorts = await Promise.all(
//   createdEpicList.map(async (res) => {
//     await ResortPass.create({
//       resortId: res.id,
//       passId: ikon.id,
//     });
//   })
// );

// let altaikon = await ResortPass.create({
//   resortId: alta.id,
//   passId: ikon.id,
// });
//let [res1, res2, res3] = await Resort.bulkCreate(resortArry);

// let epic = await Pass.create({
//   id: 2,
//   name: "Epic",
//   image:
//     "https://images.vailresorts.com/image/upload/c_scale,dpr_3.0,f_auto,q_auto,w_500/v1/Epic%20Pass/Heros/Homepage/0659-19-EPAS_Off-Sale-Hero_v3_Mobile.jpg",
// });

// let ikon = await Pass.create({
//   id: 1,
//   name: "Ikon",
//   image:
//     "https://ewscripps.brightspotcdn.com/dims4/default/a460780/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2018%2F02%2F22%2Fikon%20pass_1519326636543.jpg_78861671_ver1.0_640_480.jpg",
// });
// let mountainc = await Pass.create({
//   id: 3,
//   name: "Mountain Collective",
//   image:
//     "https://www.skiutah.com/blog/authors/erika/want-to-save-on-2017-18-lift-tickets/listing_picture_override/hero--xl",
// });
