AWSBook = require("./doc/AWS책.json");
CBook = require("./doc/C언어책.json");
ReactBook = require("./doc/리액트책.json");
NodeBook = require("./doc/노드책.json");
JSBook = require("./doc/자바스크립트책.json");
JavaBook = require("./doc/자바책.json");
TSBOOK = require("./doc/타입스크립트책.json");
PythonBook = require("./doc/파이썬책.json");
currentData = require("./doc/currentData.json");

fs = require("fs");

const DataCompile = {
  ...currentData,
  AWSBook: AWSBook,
  CBook: CBook,
  ReactBook: ReactBook,
  NodeBook: NodeBook,
  JSBook: JSBook,
  JavaBook: JavaBook,
  TSBOOK: TSBOOK,
  PythonBook: PythonBook,
};

fs.writeFile(`./doc/currentData.json`, JSON.stringify(DataCompile, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
