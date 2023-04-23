const fs = require("fs");
const path = require("fs");
const dirpath = path.join(__dirname, "files");
for (i = 0; i < 5; i++) {
  fs.writeFileSync(dirpath + "/hello" + i + ".text", "a simple bio of text");
}
