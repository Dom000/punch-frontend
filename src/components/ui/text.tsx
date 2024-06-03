// src/components/Text.tsx
import React, { FC, ReactNode } from "react";

interface TextProps {
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Text: FC<TextProps> = ({
  as: Component,
  children,
  className,
  ...props
}) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

// Create heading components H1 to H6 by specifying the "as" prop and adding Tailwind CSS classes
const H1: FC<Omit<TextProps, "as">> = ({ className, ...props }) => (
  <Text
    as="h1"
    className={`text-5xl font-bold text-punch_black ${className || ""}`}
    {...props}
  />
);
const H2: FC<Omit<TextProps, "as">> = ({ className, ...props }) => (
  <Text
    as="h2"
    className={`text-4xl font-bold  text-punch_black ${className || ""}`}
    {...props}
  />
);
const H3: FC<Omit<TextProps, "as">> = ({ className, ...props }) => (
  <Text
    as="h3"
    className={`text-3xl font-bold  text-punch_black ${className || ""}`}
    {...props}
  />
);
const H4: FC<Omit<TextProps, "as">> = ({ className, ...props }) => (
  <Text
    as="h4"
    className={`text-2xl font-medium  text-punch_black ${className || ""}`}
    {...props}
  />
);
const H5: FC<Omit<TextProps, "as">> = ({ className, ...props }) => (
  <Text
    as="h5"
    className={`text-xl font-medium  text-punch_black ${className || ""}`}
    {...props}
  />
);
const H6: FC<Omit<TextProps, "as">> = ({ className, ...props }) => (
  <Text
    as="h6"
    className={`text-lg font-medium  text-punch_black ${className || ""}`}
    {...props}
  />
);

export default Object.assign(Text, { H1, H2, H3, H4, H5, H6 });
