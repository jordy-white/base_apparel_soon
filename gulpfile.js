const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return src("partials/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["partials/*.scss"], compileSass);
}

exports.default = series(compileSass, watchTask);
