import fs from "fs";

const s = fs.readFileSync("../everwild-runningclub/assets/js/pages/signup.js", "utf8");
let body = s
  .slice(s.indexOf("const copy = ") + "const copy = ".length, s.indexOf("\n    copy.zh.labelName"))
  .trim();
body = body.replace(/;\s*$/, "");

const out = `import type { Lang } from "@/lib/lang";

export const signupCopy = ${body} as const;

export type SignupMessages = (typeof signupCopy)[Lang];
`;

fs.mkdirSync("src/messages", { recursive: true });
fs.writeFileSync("src/messages/signupCopy.ts", out);
console.log("Wrote src/messages/signupCopy.ts");
