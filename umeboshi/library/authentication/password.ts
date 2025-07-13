/**
 * Password Authentication Library
 */

import crypto from "crypto";

export function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (error, derivedKey) => {
      if (error) reject(error);
      resolve(derivedKey.toString("hex").normalize());
    });
  });
}
