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
            <Card>
                <CardBody>


                <Grid templateColumns='repeat(6, 1fr)' gap={6}>

                        <GridItem w='100%' h='10' bg='#bcd2ee' colSpan={3}>
                            <Text>{tarefa}</Text>
                        </GridItem>

                        <GridItem colSpan={1.5}> 
                            <ButtonPers label="Pendente" leftIcon={<MdOutlineAddCircleOutline />} bg='#ed7d3a' variant='solid'/>                       
                        </GridItem>
                        
                        <GridItem colSpan={1.5}> 
                            <ButtonPers label="Excluir" leftIcon={<RiDeleteBin5Fill />} bg='#F30438' variant='solid'/>                       
                        </GridItem>

                    </Grid>
                </CardBody>
            </Card>
        </Center>
    )
}