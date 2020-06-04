const { Pass, Resort, User } = require("./server/db/index");
const { db } = require("./server/db/index.js");

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

const resortList = [
  {
    name: "Alta",
    location: [69.9687, 23.2715],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_W6Fk6zrahr6VC3fqDP_E09uhvTKf821sz1lbuf35ZqNUC0Xr",
    closestAirCode: "SLC",
  },
  {
    name: "SnowBird",
    location: [40.5818948, -111.65520240000001],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlSZjFgCQastkpL1Mf9ucyjmMw1C_wdQkubTaJzUFp98YB7lsB",
    closestAirCode: "SLC",
  },
  {
    name: "Jackson Hole",
    location: [43.5875, 110.8279],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrpxPucPuenCAi84llz2tBDhPkZyQj-IQgokxUw1st2QE4U0e_",
    closestAirCode: "JAC",
  },
];

const userList = [
  {
    firstName: "Svetlana",
    lastName: "Rovinsky",
    email: "svet@gmail.com",
    password: "111",
  },
  {
    firstName: "Alyssa",
    lastName: "Chen",
    email: "alyssa@gmail.com",
    password: "222",
  },
];
async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    console.log("DB SYNCED");
  } catch (e) {
    console.log("ERROR SYNCING DB");
    console.log(e);
    throw new Error(e);
  }
  try {
    await Pass.bulkCreate(passList);
    await Resort.bulkCreate(resortList);
    await User.bulkCreate(userList);
  } catch (e) {
    console.log("ERROR SEEDING DB");
    console.log(e);
    throw new Error(e);
  }
  console.log("done seeding and associating!");
}

module.exports = { syncAndSeedDatabase };
