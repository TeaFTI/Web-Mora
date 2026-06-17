/**
 * Transform Case Utility
 */

declare global {
  interface String {
    toTitleCase(): string;
  }
};

/* String Prototype */
String.prototype.toTitleCase = function (): string {
  const smallWordList = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return this.replace(/[A-Za-z0-9\u00C0-\u024F]+/g, (match, index, title) => {
    // Always capitalize first and last word
    if (index === 0 || index + match.length === title.length) {
      return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    }

    // Only capitalize smallWordList when they are first or last word
    return smallWordList.test(match)
      ? match.toLowerCase()
      : match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
  });
};

// Export an empty object to make this a module
// Required for the global declaration
export { };

/* Standalone Function */
