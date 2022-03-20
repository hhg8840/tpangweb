keyboard = require("./2022.3.17_게이밍키보드.json");
notebook = require("./2022.3.17_노트북.json");

fs = require("fs");

const taste = { keyboard: keyboard, notebook: notebook };

fs.writeFile(`./test.json`, JSON.stringify(taste, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
