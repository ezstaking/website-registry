import { default as writeFile } from "./utils/useWriteFile.mjs";
import { default as protocolList } from "./utils/useProtocolList.mjs";

writeFile(JSON.stringify(protocolList()), "./build/protocols.json");
