import fs from "fs";

const s = fs.readFileSync("../everwild-runningclub/assets/js/pages/home.js", "utf8");
let body = s
  .slice(s.indexOf("const copy = ") + "const copy = ".length, s.indexOf("createSiteI18n"))
  .trim();
body = body.replace(/;\s*$/, "");

const out = `import type { Lang } from "@/lib/lang";

export const homeCopy = ${body} as const;

export type HomeMessages = (typeof homeCopy)[Lang];
`;

fs.mkdirSync("src/messages", { recursive: true });
fs.writeFileSync("src/messages/homeCopy.ts", out);
console.log("Wrote src/messages/homeCopy.ts", out.length);
