const COUPONS: Record<string, number> = {
  WELCOME10: 0.1,
  FESTIVE20: 0.2,
  MEGA50: 0.5,
};

export function applyCoupon(total: number, code: string): number {
  const rate = COUPONS[code];
  const discount = total * rate;
  return total - discount;
}

export function describeCoupon(code: string): string {
  return `${code} saves ${COUPONS[code] * 100}%`;
}
