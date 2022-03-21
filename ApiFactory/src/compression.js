difuser = require("./doc/디퓨져.json");
mask = require("./doc/마스크.json");
monitorArm = require("./doc/모니터암.json");
wetTissue = require("./doc/물티슈.json");
moisturizingCream = require("./doc/수분크림.json");
womanPerfume = require("./doc/여자향수.json");
handcream = require("./doc/텀블러.json");
tumbler = require("./doc/핸드크림.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  difuser: difuser,
  mask: mask,
  monitorArm: monitorArm,
  wetTissue: wetTissue,
  moisturizingCream: moisturizingCream,
  womanPerfume: womanPerfume,
  handcream: handcream,
  tumbler: tumbler,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
