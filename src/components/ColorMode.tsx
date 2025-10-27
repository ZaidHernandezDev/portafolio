import { ClientOnly, IconButton } from '@chakra-ui/react';
import { ThemeProvider, useTheme } from 'next-themes';
import type { ReactNode } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ColorModeButton() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ClientOnly fallback={<div style={{ width: 40, height: 40 }} />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="md"
        borderRadius="full"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </IconButton>
    </ClientOnly>
  );
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export { ColorModeButton };
