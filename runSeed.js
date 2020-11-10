const { db } = require("./server/db/index.js");
const { syncAndSeedDatabase } = require("./seed.js");

db.sync()
  .then(syncAndSeedDatabase)
  .then(() => {
    console.log("seed script ran successfully");
    process.exit(0);
  })
  .catch((e) => {
    console.log("seed failed to run");
    console.error(e);
    process.exit(1);
  });
