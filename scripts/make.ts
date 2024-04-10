require("dotenv").config({ path: ["ui/.env.local", "ui/.env"] });

const writeConfig = (content, path) => {
  const fs = require("node:fs");

  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

(function () {
  console.log("Generate Config...");

  writeConfig({}, "./build/raw-config.json");

  console.debug("Generated.");
})();
