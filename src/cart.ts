export type CartItem = {
  sku: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  discountCode?: string;
};

export function createCart(): Cart {
  return { items: [] };
}

const MAX_QUANTITY = 99;

export function addItem(cart: Cart, item: CartItem): Cart {
  if (item.quantity <= 0) {
    throw new Error("Quantity must be positive");
  }
  const existing = cart.items.find((i) => i.sku === item.sku);
  if (existing) {
    existing.quantity = Math.min(existing.quantity + item.quantity, MAX_QUANTITY);
    return cart;
  }
  cart.items.push(item);
  return cart;
}

export function removeItem(cart: Cart, sku: string): Cart {
  cart.items = cart.items.filter((i) => i.sku !== sku);
  return cart;
}

export function itemCount(cart: Cart): number {
  return cart.items.reduce((n, i) => n + i.quantity, 0);
}

export function isEmpty(cart: Cart): boolean {
  return cart.items.length === 0;
}

export function subtotal(cart: Cart): number {
  let sum = 0;
  for (const item of cart.items) {
    sum += item.unitPrice * item.quantity;
  }
  return sum;
}

const DISCOUNTS: Record<string, number> = {
  WELCOME10: 0.1,
  FESTIVE20: 0.2,
};

export function discountRate(code?: string): number {
  if (!code) return 0;
  return DISCOUNTS[code] ?? 0;
}

const GST_RATE = 0.18;

export function total(cart: Cart): number {
  const base = subtotal(cart);
  const discount = base * discountRate(cart.discountCode);
  const taxable = base - discount;
  return taxable + taxable * GST_RATE;
}
