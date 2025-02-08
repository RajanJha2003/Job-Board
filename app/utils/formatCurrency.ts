export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("INR", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }