import { writeFileSync, mkdirSync } from "node:fs";

const RATING = "★☆☆☆☆";
const BODY = "One star because zero isn't an option. It controls the tides and still can't commit to a single shape.";
const LINE = [RATING, BODY].join(" ");

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
