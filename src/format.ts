export function formatPrice(amount: number): string {
  return "Rs " + amount.toFixed(2);
}

export function formatQuantity(q: number): string {
  return q === 1 ? "1 item" : `${q} items`;
}
