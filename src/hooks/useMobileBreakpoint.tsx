import { useMediaQuery } from "@mui/material";
import { Breakpoint, useTheme } from "@mui/material/styles";

export const useMobileBreakpoint = (breakpoint: Breakpoint = "sm") => {
  return useMediaQuery(useTheme().breakpoints.down(breakpoint));
};
