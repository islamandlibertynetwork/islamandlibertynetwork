module.exports = function(eleventyConfig) {
  // Add the missing dateLastMod filter
  eleventyConfig.addFilter("dateLastMod", function(dateObj) {
    if (!dateObj) {
      return new Date().toISOString();
    }
    
    // Handle different date formats
    if (typeof dateObj === 'string') {
      return new Date(dateObj).toISOString();
    }
    
    if (dateObj instanceof Date) {
      return dateObj.toISOString();
    }
    
    // Fallback to current date
    return new Date().toISOString();
  });

  // Your existing configuration...
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "public"
    }
  };
};
