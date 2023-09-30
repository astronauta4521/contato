import { Center, Checkbox, Grid, GridItem, Input, Text } from "@chakra-ui/react"
import {MdOutlineAddCircleOutline} from 'react-icons/md'
import ButtonPers from "../Button"

interface Props{
   margin:string
} 

function InputPersonalidade({margin}:Props){
    return(

        <Center mb={margin} >
            <Grid templateColumns='repeat(6, 1fr)' gap={6} height="56px" >

                    <GridItem w='100%' h='10' bg='#bcd2ee' colSpan={4} height="100%">
                        <Input color="blackAlpha.400" height="100%" placeholder='Digite o titulo da task.' _placeholder={{ opacity: 1, color: '#fb5012 ',fontSize: ['24px'], }}/>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Center>
                            <Checkbox size='md' colorScheme='green' h="40px" >
                                <Text fontSize="24px">
                                    Realizada?
                                </Text>  
                            </Checkbox>
                        </Center>
                    </GridItem>
                    
                    <GridItem colSpan={1}> 
                        <ButtonPers label="Inserir" leftIcon={<MdOutlineAddCircleOutline />} bg='#23CE6B' variant='solid'/>
                            
                    </GridItem>

            </Grid>
        </Center>

 
    )
}
export default InputPersonalidade

