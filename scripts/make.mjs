import { default as writeConfig } from "./utils/useWriteConfig.mjs";
import { default as protocolList } from "./utils/useProtocolList.mjs";

writeConfig(JSON.stringify(protocolList()), "./build/protocols.json");
