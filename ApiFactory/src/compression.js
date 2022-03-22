Shaver = require("./doc/면도기.json");
shaverCream = require("./doc/면도크림.json");
handSanitizer = require("./doc/손소독제.json");
smartGloves = require("./doc/스마트장갑.json");

externalHardDrive = require("./doc/외장하드.json");
inductionPot = require("./doc/인덕션냄비.json");
fryingPan = require("./doc/프라이팬.json");
projector = require("./doc/프로젝터.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  Shaver: Shaver,
  shaverCream: shaverCream,
  handSanitizer: handSanitizer,
  smartGloves: smartGloves,
  externalHardDrive: externalHardDrive,
  inductionPot: inductionPot,
  fryingPan: fryingPan,
  projector: projector,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
