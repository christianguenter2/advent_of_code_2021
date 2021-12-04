const fs = require("fs");
const relative = require("require-relative");
const watch = require("node-watch");
const args = process.argv.slice(2);
const day = "day" + ((args && parseInt(args[0])) || 1);
const file = "part" + ((args && parseInt(args[1])|| 1) + ".js")
const mod_path = ".\\" + day + "\\" + file;

watch(
  __dirname + "\\" + day,
  { recursive: true },
  (evt, name) => {
    delete require.cache[require.resolve(mod_path)];

    const process = (filename) => {
      let input;
      try {
        input = fs
          .readFileSync(__dirname + "\\" + day + "\\" + filename, "utf-8")
          .toString()
          .split("\n")
          .map((x) => x.replace("\r", ""));
      } catch (error) {
        return;
      }

      try {
        relative(mod_path).solve(input);
      } catch (error) {
        console.log(error);
      }
    };

    process("input_simple");
    process("input");
  }
);
