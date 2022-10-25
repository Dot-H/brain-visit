import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config"; // Your tailwind config

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig.theme.screens as unknown as Record<
  string,
  number
>;

type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl";

export function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });

  // Handles hydratation issue due to the fact that the initial UI does not
  // match what was rendered on the server.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: isClient ? bool : true,
  } as Record<Key, boolean>;
}
