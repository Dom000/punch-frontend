function PunchArrow({
  className,
  fill,
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      className={className}
      {...props}
      width="16"
      height="26"
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.36366 14.22C4.8405 14.22 1.98442 11.2404 1.98442 7.56486C1.98442 3.8893 4.8405 0.909667 8.36366 0.909668C11.8868 0.909668 14.7429 3.8893 14.7429 7.56486C14.7429 11.2404 11.8868 14.22 8.36366 14.22Z"
        fill={fill ? fill : "#EDEFFF"}
      />
      <path
        d="M0.890834 12.5087L15.8365 12.5087L8.36366 25.8191L0.890834 12.5087Z"
        fill={fill ? fill : "#EDEFFF"}
      />
    </svg>
  );
}

export default PunchArrow;
