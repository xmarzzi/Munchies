import {Box, Center, Container, Flex} from '@chakra-ui/react'
import Item from './Item'
import ItemDetail from './ItemDetail';
import { Grid, GridItem } from '@chakra-ui/react'

const ItemList = ({munchies}) => {
  
  return (
    <>
    <Container maxW="container.sm" className='catalogo' >
      {munchies.map((munchie) =>(
      <Item
          key={munchie.id}
          id={munchie.id}
          image={munchie.thumbnailUrl}
          name={munchie.title}
          description={munchie.description}
          price={munchie.price}
          stock={munchie.stock}
          category={munchie.category} />
      ))} 
    </Container>

    </>
  );
};

export default ItemList