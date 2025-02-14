import { ReactNode } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

const theme = {
  breaks: {
    belowPhone: 'max-width: 599px',
    abovePhone: 'min-width: 600px',
    aboveTablet: 'min-width: 900px',
    aboveDesktop: 'min-width: 1200px',
  },
  color: {
    warn: '#de7381',
    primary: '#25f7b8',
    tertiary: '#dcbc7a',
    secondary: '#22dde8',
  },
  spacing: {
    medium: '1rem',
    small: '0.5rem',
    large: '1.5rem',
  },
};

type Props = {
  children: ReactNode,
};

const ThemeProvider = ({ children }: Props) => (
  <Provider theme={theme}>{children}</Provider>
);

export default ThemeProvider;
