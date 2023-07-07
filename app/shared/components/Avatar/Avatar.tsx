import Image, { ImageProps } from "next/image";
import { VariantProps, cva, cx } from "class-variance-authority";
import { FC } from "react";

export type AvatarProps = ImageProps & VariantProps<typeof avatarStyles>;

const avatarStyles = cva([""], {
  variants: {
    rounded: {
      md: "rounded-md",
      full: "rounded-full border-4 border-white shadow-md",
    },
    clickable: {
      true: "cursor-pointer",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

const Avatar: FC<AvatarProps> = ({
  rounded,
  onClick,
  ...rest
}: AvatarProps) => {
  if (!rest.src) return null;

  const clickable = !!onClick;

  return (
    <Image
      className={cx(avatarStyles({ rounded, clickable }), rest.className)}
      onClick={onClick}
      {...rest}
      alt="avatar"
    />
  );
};

export { Avatar };
