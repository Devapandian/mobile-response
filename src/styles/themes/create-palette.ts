/* eslint-disable @typescript-eslint/no-explicit-any */
import { common, grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, indigo, info, neutral, success, warning } from './colors';

export function createPalette(mode: any) {
  return {
    action: {
      active: neutral[500],
      disabled: mode === 'dark' ? grey : alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: mode === 'dark' ? '#111111' : '#fafafa',
      paper: mode === 'dark' ? '#191919' : common.white,
    },
    divider: '#F2F4F7',
    error,
    info,
    mode: 'light',
    neutral,
    primary: indigo,
    success,
    text: {
      primary: mode === 'dark' ? '#FFFFFF' : neutral[900],
      secondary: mode === 'dark' ? '#FFFFFF' : neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
}
