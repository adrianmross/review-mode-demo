export type Item = { name: string; price: number; qty: number }

/** What the customer pays for everything in the cart. */
export function total(items: Item[]): number {
  return items.reduce((sum, i) => sum + i.price, 0)
}

export function describe(items: Item[]): string {
  const count = items.reduce((n, i) => n + i.qty, 0)
  return `${count} item(s), ${total(items).toFixed(2)}`
}
