import React from 'react'
import { Container, Flex, Spacer, Box } from '@chakra-ui/react';

const Banner = (props) => {
  return (
    <>
        <Container className="saludoPrincipal" maxW="70rem">
        <Flex justifyContent="center">
          <Box className='banner'>
            <h1 className="bienvenido">{props.saludo}</h1>
            <h2 className="subBienvenido">{props.subSaludo}</h2>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Banner