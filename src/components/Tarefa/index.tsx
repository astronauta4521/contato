import { Center, Grid, GridItem, Input } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import {RiDeleteBin5Fill} from "react-icons/ri"
import ButtonPers from "../Button";

export default function Item() {

    return(
        <Center>
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>

                <GridItem w='100%' h='10' bg='#bcd2ee' colSpan={3}>
                    <Input placeholder='Digite o titulo da task.' />
                </GridItem>

                <GridItem colSpan={1.5}> 
                    <ButtonPers label="Pendente" leftIcon={<MdOutlineAddCircleOutline />} bg='#ed7d3a' variant='solid'/>                       
                </GridItem>
                
                <GridItem colSpan={1.5}> 
                    <ButtonPers label="Excluir" leftIcon={<RiDeleteBin5Fill />} bg='#F30438' variant='solid'/>                       
                </GridItem>

            </Grid>
        </Center>
    )
}