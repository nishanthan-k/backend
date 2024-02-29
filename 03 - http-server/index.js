const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log("Server started"));

// const fs = require("fs");

// let promise = new Promise((resolve, reject) => {
//   fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });

// promise
//   .then(writeFileData)
//   .catch(displayReadingError)
//   .then(successConfirmation)
//   .catch(errorConfirmation);

// function writeFileData(data) {
//   let newData = "Data is modified";

//   return new Promise((resolve, reject) => {
//     // unknown file for write doesn't throw an error it will create an new file
//     fs.writeFile("test.txt", newData, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve("Data got manipulated successfully");
//       }
//     });
//   });
// }

// function displayReadingError(err) {
//   console.log(err);
// }

// function successConfirmation(message) {
//   console.log(message);
// }

// function errorConfirmation(err) {
//   console.log("Caught an error while writing an file");
//   console.log(err);
// }


app.get("/", () => console.log(2))
app.get("/", () => console.log(1))