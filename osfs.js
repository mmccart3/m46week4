const os = require("os");
const fs = require("fs");

let userDetails = os.userInfo().username;

fs.appendFile("oh-hello.txt", `${userDetails}`, (err) => {
    if (err) {
        console.log("oops");
    }
});