import jwt from "jsonwebtoken";

export class JWT {
  static secret: string = process.env.JWT_SECRET ?? "secret";

  static sign(id: number, minutes: number = 60 * 24) {
    return jwt.sign(
      {
        sub: id,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * minutes,
      },
      this.secret
    );
  }

  static verify(token: string) {
    try {
      return jwt.verify(token, this.secret);
    } catch (e) {
      return null;
    }
  }

  static refresh(token: string): { userId: number; token: string } | null {
    const decoded: { sub: number; iat: number; exp: number } | null =
      jwt.decode(token) as { sub: number; iat: number; exp: number } | null;
    if (decoded) {
      return {
        userId: decoded.sub,
        token: this.sign(decoded.sub, (decoded.exp - decoded.iat) / 60),
      };
    } else {
      return null;
    }
  }
}
