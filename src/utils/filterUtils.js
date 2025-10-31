/**
 * Utility functions for handling color filters and image effects
 */

/**
 * Apply advanced filter combinations based on filter type
 * @param {string} filter - The CSS filter string
 * @returns {object} - Style object with filter and blend mode
 */
export const getAdvancedFilterStyle = (filter) => {
  const baseStyle = {
    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
    backgroundColor: 'transparent',
    mixBlendMode: 'normal'
  };

  if (filter === 'none') {
    return baseStyle;
  }

  const filterStyle = { ...baseStyle };
  const baseDropShadow = 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))';

  if (filter.includes('sepia')) {
    // For sepia-based color changes, preserve transparency better
    filterStyle.filter = `${filter} contrast(1.1) saturate(120%) ${baseDropShadow}`;
    filterStyle.mixBlendMode = 'multiply';
  } else if (filter.includes('grayscale')) {
    // For grayscale effects, ensure transparency is maintained
    filterStyle.filter = `${filter} ${baseDropShadow}`;
    filterStyle.mixBlendMode = 'normal';
  } else if (filter.includes('hue-rotate')) {
    // For hue rotation, preserve original opacity
    filterStyle.filter = `${filter} contrast(1.05) ${baseDropShadow}`;
    filterStyle.mixBlendMode = 'normal';
  } else {
    // For brightness/contrast only changes
    filterStyle.filter = `${filter} ${baseDropShadow}`;
    filterStyle.mixBlendMode = 'normal';
  }

  // Ensure background transparency is preserved
  filterStyle.backgroundColor = 'transparent';
  
  return filterStyle;
};

/**
 * Generate a random filter for demonstration purposes
 * @returns {string} - Random CSS filter string
 */
export const generateRandomFilter = () => {
  const filters = [
    'sepia(80%) saturate(180%) hue-rotate(320deg) brightness(0.85) contrast(1.1)',
    'sepia(80%) saturate(180%) hue-rotate(200deg) brightness(0.95) contrast(1.05)',
    'sepia(80%) saturate(180%) hue-rotate(80deg) brightness(0.95) contrast(1.05)',
    'grayscale(100%) brightness(0.4) contrast(1.2)',
    'brightness(1.2) contrast(1.1)',
    'hue-rotate(180deg) saturate(120%)'
  ];
  
  return filters[Math.floor(Math.random() * filters.length)];
};

/**
 * Validate if a filter string is safe to use
 * @param {string} filter - CSS filter string to validate
 * @returns {boolean} - Whether the filter is valid
 */
export const isValidFilter = (filter) => {
  if (!filter || typeof filter !== 'string') {
    return false;
  }
  
  // Check for valid CSS filter functions
  const validFilters = [
    'blur', 'brightness', 'contrast', 'drop-shadow', 'grayscale',
    'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia'
  ];
  
  return validFilters.some(validFilter => 
    filter.includes(validFilter) || filter === 'none'
  );
};
