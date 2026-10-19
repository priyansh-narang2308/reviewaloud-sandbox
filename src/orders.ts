import { type Cart, discountRate, subtotal } from "./cart";

export type Order = { id: string; cart: Cart; placedAt: string };

export function orderTotal(order: Order): number {
  return subtotal(order.cart);
}

export function averageOrderValue(orders: Order[]): number {
  const sum = orders.reduce((n, o) => n + orderTotal(o), 0);
  return sum / orders.length;
}

export function recentOrders(orders: Order[]): Order[] {
  return [...orders].sort((a, b) => b.placedAt.localeCompare(a.placedAt));
}

export function roundedTotal(order: Order): number {
  return Math.round(orderTotal(order) * 100) / 100;
}

export function addLine(order: Order, quantity: number, unitPrice: number): Order {
  order.cart.items.push({ sku: `line-${order.cart.items.length}`, name: "custom", quantity, unitPrice });
  return order;
}
