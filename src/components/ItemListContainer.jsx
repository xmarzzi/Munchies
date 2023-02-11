import { Container, Flex, Spacer, Box, Center, Heading, Grid } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import munchies from './munchies.json';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const {category} = useParams();
  console.log(category);

  const [producto, setProducto] = useState([]);
    //console.log(producto);
   
    useEffect(() => {
      (producto) => setProducto(producto);
    }, []);

  if (category === undefined) {
    return(
      
      <>
        <Container className="saludoPrincipal" maxW="70rem">
        <Flex justifyContent="center">
          <Box className='banner'>
            <h1 className="bienvenido">{props.saludo}</h1>
            <h2 className="subBienvenido">{props.subSaludo}</h2>
          </Box>
        </Flex>
      </Container>
      <Center bg="#fff" h="100px" color="black">
        <Heading as="h2" size="2x1">
          Munchies Catalogo
        </Heading>
      </Center>
            <ItemList munchies={munchies} />
        
      </>
    )
  } else {
    const catFilter = munchies.filter((munchie) => munchie.category === category);
    console.log(catFilter);

    return (
      <div>
        <Center bg="#fff" h="100px" color="black">
          <Heading as="h2" size="2x1">
            Munchies Catalogo
          </Heading>
        </Center>
        {catFilter ? (<ItemList munchies={catFilter} />) : (<ItemList munchies={munchies} />)};
      </div>
    );
  }
  

};

export default ItemListContainer