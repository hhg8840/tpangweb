curlingIron = require("./doc/고대기.json");
MenBB = require("./doc/남자BB크림.json");
bodyWash = require("./doc/바디워시.json");
vitamin = require("./doc/비타민.json");
shampoo = require("./doc/샴푸.json");
normalEarphone = require("./doc/유선이어폰.json");
electricBlanket = require("./doc/전기장판.json");
treatment = require("./doc/트리트먼트.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  curlingIron: curlingIron,
  MenBB: MenBB,
  bodyWash: bodyWash,
  vitamin: vitamin,
  shampoo: shampoo,
  normalEarphone: normalEarphone,
  electricBlanket: electricBlanket,
  treatment: treatment,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
