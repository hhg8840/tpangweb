// import * as humidifier from './doc/가습기.json';
// import * as MenRashguard from './doc/남자레쉬가드.json';
// import * as NoteBookShelf from './doc/노트북거치대.json';
// import * as NotebookPouch from './doc/노트북파우치.json';
// import * as BlutoothDongle from './doc/블루투스동글.json';
// import * as selfCameraLens from './doc/셀카렌즈.json';
// import * as selfCameraStick from './doc/셀카봉.json';
// import * as ipadPouch from './doc/아이패드파우치.json';
import * as currentData from './doc/currentData.json';
import fs from 'fs';

const DataCompile = {
  ...currentData,
  // humidifier: humidifier,
  // MenRashguard: MenRashguard,
  // NoteBookShelf: NoteBookShelf,
  // NotebookPouch: NotebookPouch,
  // BlutoothDongle: BlutoothDongle,
  // selfCameraLens: selfCameraLens,
  // selfCameraStick: selfCameraStick,
  // ipadPouch: ipadPouch,
};

fs.writeFile(
  `./doc/currentData.json`,
  JSON.stringify(DataCompile, null, 4),
  err => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
