import { VariantProps, cva, cx } from "class-variance-authority";
import { BounceLoader } from "react-spinners";

export type SpinnerProps = VariantProps<typeof spinnerStyles>;

const spinnerStyles = cva([""], {
  variants: {
    size: {
      md: "",
      full: "w-screen h-screen flex mt-[25vh] justify-center",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div className={cx(spinnerStyles({ size }))}>
      <BounceLoader size={size === "md" ? 45 : 90} color="#34d399" />
    </div>
  );
};

export { Spinner };
