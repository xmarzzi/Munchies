import {useState, useEffect} from 'react'
import { Container, Flex, Spacer, Box, Center, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import munchies from './munchies.json'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const getDatos = () => { 
      return new Promise((resolve, reject) => {
        if(munchies.length === 0){
          reject(new Error("No hay productos")); 
        }
        setTimeout(() => {
            resolve (munchies);
          }, 2000);
        });
      };
      
    
      async function fetchingData () {
        try{
          const datosFetched = await getDatos();
          console.log(datosFetched);
        } catch(error) {
          console.log(error);
        }
      }
    
      fetchingData();

    return (
      <div >
      <Container  marginTop="3rem">
        <Center>
          <ItemDetail munchies={munchies} />
        </Center>
      </Container>
      </div>
    );
    }

export default ItemDetailContainer