import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const publicDir = new URL("../public/", import.meta.url);
for (const [name, width] of [
  ["portrait", 480],
  ["about-monitor", 800],
  ["about-mouse", 400],
  ["little-by-little", 1000],
]) {
  const input = fileURLToPath(new URL(`${name}.png`, publicDir));
  const output = fileURLToPath(new URL(`${name}.webp`, publicDir));
  // Release native image memory between files by using one process per image.
  execFileSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      `
    import sharp from 'sharp';
    sharp.cache(false);
    sharp.concurrency(1);
    await sharp(${JSON.stringify(input)}).resize({width: ${width}, withoutEnlargement: true}).webp({quality: 85}).toFile(${JSON.stringify(output)});
  `,
    ],
    { stdio: "inherit" },
  );
}
