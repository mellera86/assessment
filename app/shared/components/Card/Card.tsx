import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cx } from "class-variance-authority";

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <div
      {...rest}
      className={cx("bg-white shadow-md rounded-md", rest?.className)}
    >
      {children}
    </div>
  );
};

export type CardBodyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const CardBody = ({ children, ...rest }: CardBodyProps) => {
  return (
    <div {...rest} className={cx("p-4", rest?.className)}>
      {children}
    </div>
  );
};

export { Card, CardBody };
