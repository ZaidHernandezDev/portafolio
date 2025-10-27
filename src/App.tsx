import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />

      <Box as="main" flex="1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
