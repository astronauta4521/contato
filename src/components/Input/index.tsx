import { Center, Checkbox, Grid, GridItem, Input } from "@chakra-ui/react"
import {MdOutlineAddCircleOutline} from 'react-icons/md'
import ButtonPers from "../Button"

/*
interface Props{
    type: 'checkbox' | 'color'| 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    placeholder: string
    value: string
} 
*/
function InputPersonalidade(){
    return(

        <Center>
            <Grid templateColumns='repeat(6, 1fr)' gap={6}>

                    <GridItem w='100%' h='10' bg='#bcd2ee' colSpan={3}>
                        <Input placeholder='Digite o titulo da task.' />
                    </GridItem>

                    <GridItem colSpan={1.5} >
                        <Center>
                            <Checkbox size='md' colorScheme='green' h="40px">
                                Realizada?
                            </Checkbox>
                        </Center>
                    </GridItem>
                    
                    <GridItem colSpan={1.5}> 
                        <ButtonPers label="Inserir" leftIcon={<MdOutlineAddCircleOutline />} bg='#23CE6B' variant='solid'/>
                            
                    </GridItem>

            </Grid>
        </Center>

 
    )
}
export default InputPersonalidade

