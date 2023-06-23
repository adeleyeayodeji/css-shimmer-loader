let mix = require("laravel-mix");

mix
  .sass("assets/src/scss/shimmer.scss", "assets/dist/css/shimmer.css")
  .sass("assets/src/scss/style.scss", "assets/dist/css/style.css");
