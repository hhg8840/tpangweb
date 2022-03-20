prevData = require("./doc/prevData.json");

fs = require("fs");

const DataCompile = {
  ...prevData,
  gamingHeadSet: gamingHeadSet,
  earRing: earRing,
  gamingChair: gamingChair,
  cleaner: cleaner,
  sandMaker: sandMaker,
  womanBracelet: womanBracelet,
  webCam: webCam,
  footBath: footBath,
  capsuleCoffee: capsuleCoffee,
};

fs.writeFile(`./currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
