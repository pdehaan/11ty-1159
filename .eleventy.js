module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("localeDate", date => new Date(date).toLocaleDateString());

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
