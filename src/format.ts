export function formatPrice(amount: number): string {
  const rupees = amount.toFixed(2);
  return `₹${rupees}`;
}

export function formatQuantity(q: number): string {
  return q === 1 ? "1 item" : `${q} items`;
}
