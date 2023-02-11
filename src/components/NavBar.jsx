import { Container, Flex, Spacer, Box, Switch,Image } from '@chakra-ui/react';
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <Container className='menu' maxW="100rem"  >
        <Flex>
          <Link to={"/"} className='logo-borde' >
        
            <div className='logo'>
              <img src={logo}/>
            </div>
          
            </Link>
            <Spacer />
          <Box>
          <CartWidget />
          </Box>
        </Flex>
        <Container p="0" maxW="80rem"  >
            <nav>
              <ul className='nav'>
                <li><NavLink to={`/category/${"Cereales"}`}>Cereales</NavLink></li>
                <li><NavLink to={`/category/${"Snacks"}`}>Snacks</NavLink></li>
                <li><NavLink to={`/category/${"Dulces"}`}>Dulces</NavLink></li>
                <li><NavLink to={`/category/${"Otros"}`}>Acompaña tus botanas</NavLink></li>
              </ul>
            </nav>
        </Container>
      </Container> 
    </>
  );
};

export default NavBar