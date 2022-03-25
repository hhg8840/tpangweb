MenLeatherGloves = require("./doc/남자가죽장갑.json");
MenSweatPants = require("./doc/남자츄리닝바지.json");
massageBall = require("./doc/마사지볼.json");
goggles = require("./doc/물안경.json");
WomenLeatherGloves = require("./doc/여자가죽장갑.json");
WomenSweatPants = require("./doc/여자츄리닝바지.json");
yogaMat = require("./doc/요가매트.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  MenLeatherGloves: MenLeatherGloves,
  MenSweatPants: MenSweatPants,
  massageBall: massageBall,
  goggles: goggles,
  WomenLeatherGloves: WomenLeatherGloves,
  WomenSweatPants: WomenSweatPants,
  yogaMat: yogaMat,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
