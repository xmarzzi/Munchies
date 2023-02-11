import { Box, Card, CardHeader, CardBody, CardFooter,Stack,Heading, Divider, Button, Text, Image, Container, Flex} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { extendTheme } from '@chakra-ui/react'

const Item = ({ id, image, name, description, price, stock, category }) => {
    const breakpoints = {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }
      const theme = extendTheme({ breakpoints })
  return (
    <>
        <div key={id} >
                <Card className='card'>
                    <CardBody>
                        <Image
                        src={image}
                        alt='producto'
                        borderRadius='lg'
                        maxW="20vh"
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text color='blue.600' fontSize={{ base: '14px', md: '16px', lg: '24px' }}>${price}</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            <NavLink to={`/item/${id}`} >Detalle</NavLink>
                        </Button>
                    </CardFooter>
                </Card>
        </div>  
    </>
  )
}

export default Item