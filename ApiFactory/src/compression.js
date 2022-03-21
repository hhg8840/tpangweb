manCusion = require("./doc/남자쿠션.json");
manClutchg = require("./doc/남자클러치백.json");
stand = require("./doc/스탠드.json");
stapper = require("./doc/스텝퍼.json");
Ample = require("./doc/앰플.json");
ElectricPort = require("./doc/전기포트.json");
campingChair = require("./doc/캠핑의자.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  manCusion: manCusion,
  manClutchg: manClutchg,
  stand: stand,
  stapper: stapper,
  Ample: Ample,
  ElectricPort: ElectricPort,
  campingChair: campingChair,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
