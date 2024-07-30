/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//  @ts-nocheck
import { createTheme as createMuiTheme } from '@mui/material';
import { createTypography } from './create-typography';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';

const CustomTheme = (mode: any, poppins: any) => {
  const palette = createPalette(mode);
  const components = createComponents({ palette, mode });
  const shadows = createShadows();
  const typography = createTypography(poppins);
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: typography,
    palette: palette,
    shadows: shadows,
    shape: {
      borderRadius: 8,
    },
    
    components: components,
  });
};
export default CustomTheme;
