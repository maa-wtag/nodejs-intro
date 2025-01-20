// import fs from "fs";
import fs from "fs/promises";

// readFile callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error : ", err);
//   } else {
//     console.log(data);
//   }
// });

// readFile sync

// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

// readFile Promise .then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => {
//     console.log("Success  : ", data.toString());
//     // return fs.writeFile("./outFile", `Text: ${data}`);
//   })
//   .catch(function (err) {
//     console.error("Error  : ", err);
//   });

// rewadFile async await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error  ", error);
  }
};

// writeFile
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hola Amigos");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// append
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
