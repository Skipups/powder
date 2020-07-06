const { Pass, Resort, User } = require("./server/db/index");
const { db } = require("./server/db/index.js");
const ResortPass = db.model("ResortPass");
const epicList = require("./epic.js");
const pass = require("./server/db/models/pass");
const passList = [
  {
    id: 1,
    name: "Ikon",
    image:
      "https://ewscripps.brightspotcdn.com/dims4/default/a460780/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2018%2F02%2F22%2Fikon%20pass_1519326636543.jpg_78861671_ver1.0_640_480.jpg",
  },
  {
    id: 2,
    name: "Epic",
    image:
      "https://images.vailresorts.com/image/upload/c_scale,dpr_3.0,f_auto,q_auto,w_500/v1/Epic%20Pass/Heros/Homepage/0659-19-EPAS_Off-Sale-Hero_v3_Mobile.jpg",
  },
  {
    id: 3,
    name: "Mountain Collective",
    image:
      "https://www.skiutah.com/blog/authors/erika/want-to-save-on-2017-18-lift-tickets/listing_picture_override/hero--xl",
  },
];

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    const createdEpicList = await Resort.bulkCreate(epicList);

    let epic = await Pass.create({
      id: 2,
      name: "Epic",
      image:
        "https://images.vailresorts.com/image/upload/c_scale,dpr_3.0,f_auto,q_auto,w_500/v1/Epic%20Pass/Heros/Homepage/0659-19-EPAS_Off-Sale-Hero_v3_Mobile.jpg",
    });

    let ikon = await Pass.create({
      id: 1,
      name: "Ikon",
      image:
        "https://ewscripps.brightspotcdn.com/dims4/default/a460780/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2018%2F02%2F22%2Fikon%20pass_1519326636543.jpg_78861671_ver1.0_640_480.jpg",
    });
    let mountainc = await Pass.create({
      id: 3,
      name: "Mountain Collective",
      image:
        "https://www.skiutah.com/blog/authors/erika/want-to-save-on-2017-18-lift-tickets/listing_picture_override/hero--xl",
    });

    // let altaikon = await ResortPass.create({
    //   resortId: alta.id,
    //   passId: ikon.id,
    // });
    //let [res1, res2, res3] = await Resort.bulkCreate(resortArry);

    console.log("DB SYNCED");
  } catch (e) {
    console.log("ERROR SEEDING DB");
    console.log(e);
    throw new Error(e);
  }
}

module.exports = { syncAndSeedDatabase };
