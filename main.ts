// Name the Robot Band — make.fun bounty entry.
// The program writes one line to /output/entry.txt: a funny name for a band
// made of robots, plus a few words on its hit song. The band is a crew of
// robot vacuums: the name lands the robot joke, the hit song adds a second
// laugh that fits the name, and it reads like a band you would repeat to a
// friend.
import { mkdirSync, writeFileSync } from "node:fs";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const LINE =
  "The Roomba Rumblers — hit single 'Suck It Up (Under the Sofa)' swept the awards and left no crumbs.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace: refuse to write anything that would fail it.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === "" ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
