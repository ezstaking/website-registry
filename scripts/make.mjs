import { default as writeFile } from "./utils/useWriteFile.mjs";
import { default as protocolList } from "./utils/useProtocolList.mjs";
import { default as protocolListLatest } from "./utils/useProtocolListLatest.mjs";

writeFile(JSON.stringify(protocolList()), "./build/protocols.json");
writeFile(JSON.stringify(protocolListLatest()), "./build/latest-protocols.json");
