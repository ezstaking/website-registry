import * as fs from "fs";
import {default as loadJson} from "./useLoadJson.mjs";

export default function () {
  const files = fs.readdirSync(`./protocols`).sort()
  const data = [];
  const protocolsStatus = [];
  let x = 0;

  for (let i = 0; i < files.length; i++) {
    if (["protocol.schema.json", "_template"].includes(files[i])) {
      continue;
    }

    const {
      name,
      slug,
      appSlug,
      colors,
      logo,
      status,
      validateSince,
    } = loadJson(`./../../protocols/${files[i]}/protocol.json`);

    data.push({
      name,
      slug,
      appSlug,
      colors,
      logo,
      status,
      validateSince
    });

    protocolsStatus[x] = status;
    x++;
  }

  return data
    .filter((protocol, index) => {
      return protocolsStatus[index] === "active" && protocol.validateSince.length > 0;
    })
    .sort((a, b) => (new Date(b.validateSince) - new Date(a.validateSince)))
    .slice(0, 3)
  ;
};
