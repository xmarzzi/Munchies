import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({munchies}) => {
  const {id} = useParams();
  console.log(id);

  const munchieFilter = munchies.filter((munchie) => munchie.id == id); 

  return (
    <>
      {munchieFilter.map((munchie) => (
      <div key={munchie.id}>
      <Card maxW='sm'>
        <CardBody>
          <Center>
            <Image
              src={munchie.thumbnailUrl}
              borderRadius='lg'
              maxW="15rem"
              maxH="20rem"
            />
          </Center>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{munchie.title} </Heading>
            <Text>{munchie.description}</Text>
            <Text color='blue.600' fontSize='2xl'>${munchie.price}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  ))}
    </>
    
  )
}

export default ItemDetail