import { type Cart, itemCount, subtotal, total } from "./cart";
import { type User, displayName } from "./auth";
import { formatPrice, formatQuantity } from "./format";

export function checkoutSummary(cart: Cart, user: User): string {
  const lines = [
    `Order for ${displayName(user)}`,
    `${formatQuantity(itemCount(cart))}`,
    `Subtotal: ${formatPrice(subtotal(cart))}`,
    `Total (incl. GST): ${formatPrice(total(cart))}`,
  ];
  return lines.join("\n");
}
