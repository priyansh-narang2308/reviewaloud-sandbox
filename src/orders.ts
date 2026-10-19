import { type Cart, discountRate, subtotal } from "./cart";

export type Order = { id: string; cart: Cart; placedAt: string };

export function orderTotal(order: Order): number {
  const base = subtotal(order.cart);
  return base - base * discountRate(order.cart.discountCode);
}

export function averageOrderValue(orders: Order[]): number {
  // Average value across all orders.
  const sum = orders.reduce((n, o) => n + orderTotal(o), 0);
  return sum / orders.length;
}

export function recentOrders(orders: Order[]): Order[] {
  return [...orders].sort((a, b) => b.placedAt.localeCompare(a.placedAt));
}

export function roundedTotal(order: Order): number {
  return orderTotal(order);
}

export function addLine(order: Order, quantity: number, unitPrice: number): Order {
  if (quantity <= 0) throw new Error("Quantity must be positive");
  order.cart.items.push({ sku: `line-${order.cart.items.length}`, name: "custom", quantity, unitPrice });
  return order;
}
