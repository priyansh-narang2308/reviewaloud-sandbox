export function formatPrice(amount: number): string {
  return "Rs " + (Math.round(amount * 100) / 100).toFixed(2);
}

export function formatQuantity(q: number): string {
  return q === 1 ? "1 item" : `${q} items`;
}
