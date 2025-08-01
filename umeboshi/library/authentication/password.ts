/**
 * Password Authentication Library
 */

import crypto from "crypto";

function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex").normalize();
}

/**
 * Hash a password with a salt using the `crypto` module `scrypt` Key
 * Derivation Function (KDF) algorithm.
 *
 * @param password The password to hash in plain text.
 * @param salt The salt to use for hashing.
 * @returns A promise resolve to the hash password.
 */
export function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(
      password.normalize(),
      salt,
      64,
      (error, derivedKey) => {
        if (error) reject(error);
        resolve(derivedKey.toString("hex").normalize());
      }
    );
  });
}
