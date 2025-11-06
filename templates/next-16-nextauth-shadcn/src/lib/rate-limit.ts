interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): { allowed: boolean; resetTime: number } {
  const now = Date.now();
  const key = identifier;
  
  const record = store[key];
  
  if (!record || now > record.resetTime) {
    store[key] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return { allowed: true, resetTime: store[key].resetTime };
  }
  
  if (record.count >= maxRequests) {
    return { allowed: false, resetTime: record.resetTime };
  }
  
  record.count++;
  return { allowed: true, resetTime: record.resetTime };
}

export function getClientIP(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  
  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  
  return "unknown";
}

