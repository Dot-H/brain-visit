import React from "react";

// Utils
import cn from "classnames";

export type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * Controls the color of the chip. Must be a valid tailwindCSS color
   * @see https://tailwindcss.com/docs/customizing-colors for the list of valid
   * colors
   */
  color: string;
};

export default function Chip({ color, ...props }: ChipProps) {
  return (
    <span
      className={`text-${color} border-${color} font-medium capitalize py-1 px-2 border rounded-full`}
    >
      {props.children}
    </span>
  );
}
