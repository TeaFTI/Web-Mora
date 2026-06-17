/**
 * Global Configuration
 */

const TABLE_PREFIX = process.env.MORA_TABLE_PREFIX
  ?? `${process.env.npm_package_name}_`;

const KEY_PREFIX = process.env.MORA_KEY_PREFIX
  ?? `${process.env.npm_package_name}:`;

export {
  KEY_PREFIX,
  TABLE_PREFIX
};

