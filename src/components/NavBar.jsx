import { Container, Flex, Spacer, Box, Switch } from '@chakra-ui/react';
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <>
      <Container className='menu' maxW="100rem"  >
        <Flex>
          <Box >
            <div className='logo'>
              <img src={logo}/>
            </div>
          </Box>
            <Spacer />
          <Box>
          <CartWidget />
          </Box>
        </Flex>
        <Container p="0" maxW="80rem" >
            <nav>
              <ul>
                <li><a href="">Cereales</a></li>
                <li><a href="">Snacks</a></li>
                <li><a href="">Dulces</a></li>
                <li><a href="">Acompaña tus botanas</a></li>
              </ul>
            </nav>
        </Container>
      </Container> 
    </>
  );
};

export default NavBar