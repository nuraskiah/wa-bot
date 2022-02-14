const path = require('path');

/**
 * Resolve path relative to `src/` folder
 */
exports.rslv = (relative) => path.join(__dirname, '..', relative);
