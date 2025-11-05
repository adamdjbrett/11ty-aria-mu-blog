import { DateTime } from "luxon";

export default function(eleventyConfig) {
  // Add a universal 'date' filter for Nunjucks
  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "yyyy-LL-dd") {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });
  
  // Add year shortcode for copyright footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Copy any static assets placed in src/assets to _site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
  // layouts: "layouts", // Remove this line to use default _includes
      data: "_data"
    },
    // We'll use Markdown and Nunjucks
    templateFormats: ["md", "njk", "html"]
  };
}
