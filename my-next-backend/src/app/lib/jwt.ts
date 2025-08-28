import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";
const EXPIRES_IN: import("jsonwebtoken").SignOptions["expiresIn"] =
  (process.env.JWT_EXPIRES_IN as any) ?? "1h";

export type JwtPayload = { sub: string; name?: string };

export function signJwt(payload: JwtPayload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyJwt(token?: string): JwtPayload | null {
  try {
    if (!token) return null;
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch {
    return null;
  }
}
