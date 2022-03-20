prevData = require("./doc/prevData.json");
massageGun = require("./doc/마사지건.json");
binoculars = require("./doc/쌍안경.json");
oven = require("./doc/전기오븐.json");
carCleaner = require("./doc/차량용청소기.json");
scale = require("./doc/체중계.json");
coffeeGrinder = require("./doc/커피그라인더.json");
portableMonitor = require("./doc/포터블모니터.json");
filterShower = require("./doc/필터샤워기.json");

fs = require("fs");

const DataCompile = {
  ...prevData,
  massageGun: massageGun,
  binoculars: binoculars,
  oven: oven,
  carCleaner: carCleaner,
  scale: scale,
  coffeeGrinder: coffeeGrinder,
  portableMonitor: portableMonitor,
  filterShower: filterShower,
};

fs.writeFile(`./currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
