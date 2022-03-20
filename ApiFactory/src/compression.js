golfClub = require("./doc/골프채.json");
MensPerfume = require("./doc/남자향수.json");
basketBall = require("./doc/농구공.json");
badmintonRacket = require("./doc/배드민턴라켓.json");
backpack = require("./doc/백팩.json");
dumbbell = require("./doc/아령.json");
soccerBall = require("./doc/축구공.json");
crossBag = require("./doc/크로스백.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  golfClub: golfClub,
  MensPerfume: MensPerfume,
  badmintonRacket: badmintonRacket,
  backpack: backpack,
  dumbbell: dumbbell,
  soccerBall: soccerBall,
  crossBag: crossBag,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
