import fs from "fs";

const s = fs.readFileSync("../everwild-runningclub/assets/js/pages/signup.js", "utf8");
let body = s
  .slice(s.indexOf("const valueLabels = ") + "const valueLabels = ".length, s.indexOf("const dom ="))
  .trim();
body = body.replace(/;\s*$/, "");

const out = `import type { Lang } from "@/lib/lang";

export const signupValueLabels = ${body} as const;
`;

fs.writeFileSync("src/messages/signupValueLabels.ts", out);
console.log("Wrote src/messages/signupValueLabels.ts");
