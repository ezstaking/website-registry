import * as fs from "fs";
import { default as loadJson } from "./useLoadJson.mjs";

export default function () {
  const files = fs.readdirSync(`./protocols`).sort()
  const data = {};

  for (let i = 0; i < files.length; i++) {
    if (["protocol.schema.json", "_template"].includes(files[i])) {
      continue;
    }

    const {
      name,
      status,
      slug,
      appSlug,
      validatorAddress,
      symbol,
      colors,
      logo
    } = loadJson(`./../../protocols/${files[i]}/protocol.json`);

    data[slug] = {
      name,
      status,
      slug,
      appSlug,
      validatorAddress,
      symbol,
      colors,
      logo
    }
  }

  return data;
};
