import { ChakraProvider, Button } from '@chakra-ui/react'
import Card from './components/Card'

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme='teal' variant={'outline'}>Botão Teste</Button>
      <Card/>
    </ChakraProvider>
  );
}

export default App;
