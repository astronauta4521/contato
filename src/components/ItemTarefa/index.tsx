import { Card, CardBody, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import {RiDeleteBin5Fill} from "react-icons/ri"
import ButtonPers from "../Button";

interface Props{
    tarefa:string
}
export default function Item({tarefa}:Props) {

    return(
        <Center>
            <Card bg="#bfcbc2">
                <CardBody>


                <Grid templateColumns='repeat(5, 1fr)' gap={6} >

                        <GridItem w='100%' h='10' colSpan={3}>
                            <Text color="blackAlpha.800" fontWeight="extrabold" justifyContent="center" textAlign="start" fontSize='20px'>{tarefa}</Text>
                        </GridItem>

                        <GridItem colSpan={1}> 
                            <ButtonPers label="Pendente" leftIcon={<MdOutlineAddCircleOutline />} bg='#ed7d3a' variant='solid'/>                       
                        </GridItem>
                        
                        <GridItem colSpan={1}> 
                            <ButtonPers label="Excluir" leftIcon={<RiDeleteBin5Fill />} bg='#F30438' variant='solid'/>                       
                        </GridItem>

                    </Grid>
                </CardBody>
            </Card>
        </Center>
    )
}