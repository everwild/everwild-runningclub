import fs from "fs";

function extract(filename, exportName, outFile) {
  const s = fs.readFileSync(`../everwild-runningclub/assets/js/pages/${filename}`, "utf8");
  let body = s
    .slice(s.indexOf("initLegalPage({") + "initLegalPage({".length, s.lastIndexOf("});"))
    .trim();
  const out = `import type { Lang } from "@/lib/lang";

export const ${exportName} = { ${body} } as const;
`;
  fs.writeFileSync(`src/messages/${outFile}`, out);
  console.log("Wrote", outFile);
}

extract("legal.js", "legalCopy", "legalCopy.ts");
extract("privacy.js", "privacyCopy", "privacyCopy.ts");
extract("terms.js", "termsCopy", "termsCopy.ts");
