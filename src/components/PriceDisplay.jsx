export default function PriceDisplay({ value, compact = false }) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value || 0);

  return (
    <span className={compact ? 'price-compact' : 'price-display'}>{formatted}</span>
  );
}