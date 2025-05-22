module.exports = function(eleventyConfig) {
  // Add passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets");
  
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

  // Add the missing resolveMultiReferences filter
  eleventyConfig.addFilter("resolveMultiReferences", function(references) {
    // If no references or empty array, return empty array
    if (!references || !Array.isArray(references) || references.length === 0) {
      return [];
    }
    
    // For now, return the references as-is
    // This may need to be customized based on your CMS data structure
    return references;
  });

  // Add the missing resolveReference filter (single reference)
  eleventyConfig.addFilter("resolveReference", function(reference) {
    // If no reference, return null
    if (!reference) {
      return null;
    }
    
    // Return the reference as-is
    // This may need to be customized based on your CMS data structure
    return reference;
  });

  // Add the missing markdown filter
  eleventyConfig.addFilter("markdown", function(content) {
    // If no content, return empty string
    if (!content) {
      return "";
    }
    
    // For now, return content as-is (HTML safe)
    // You might want to add actual markdown processing here later
    return content;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "public"
    }
  };
};
