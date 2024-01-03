interface Props {
  amount: number;
  className?: string;
}

const Price = ({ amount, className }: Props) => {
  const priceFormat = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return <span className={`${className}`}>{priceFormat}</span>;
};

export default Price;
