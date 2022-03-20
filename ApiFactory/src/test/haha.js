keyboard = require("./2022.3.17_게이밍키보드.json");
notebook = require("./2022.3.17_노트북.json");
manWallet = require("./2022.3.17_남성지갑.json");
blutoothMouse = require("./2022.3.17_블루투스마우스.json");
blutoothSpeaker = require("./2022.3.17_블루투스스피커.json");
actionCam = require("./2022.3.17_액션캠.json");
monitor = require("./2022.3.17_모니터.json");
washingMachine = require("./2022.3.17_통돌이세탁기.json");
necklace = require("./2022.3.17_목걸이.json");
womanWallet = require("./2022.3.17_여성지갑.json");

fs = require("fs");

const taste = {
  keyboard: keyboard,
  notebook: notebook,
  manWallet: manWallet,
  blutoothMouse: blutoothMouse,
  blutoothSpeaker: blutoothSpeaker,
  actionCam: actionCam,
  monitor: monitor,
  washingMachine: washingMachine,
  necklace: necklace,
  womanWallet: womanWallet,
};

fs.writeFile(`./test.json`, JSON.stringify(taste, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
