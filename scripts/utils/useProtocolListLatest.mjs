import * as fs from "fs";
import {default as loadJson} from "./useLoadJson.mjs";

export default function () {
  const files = fs.readdirSync(`./protocols`).sort()
  const data = [];

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
      validateSince,
    } = loadJson(`./../../protocols/${files[i]}/protocol.json`);

    data.push({
      name,
      slug,
      appSlug,
      colors,
      logo,
      validateSince
    })
  }

  return data
    .filter(protocol => (protocol.validateSince.length > 0))
    .sort((a, b) => (new Date(b.validateSince) - new Date(a.validateSince)))
    .slice(0, 3)
  ;
};
