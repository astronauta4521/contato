import { Center, Divider, Stack } from "@chakra-ui/react";
import InputPersonalidade from "../../components/Input";
import Layout from "../../components/Layout";
import Item from "../../components/ItemTarefa";
import { Heading} from '@chakra-ui/react'


export default function Tarefas() {
  return (
    <Layout>
      <Stack spacing={3} textAlign="center" mb="20px">
        <Heading fontSize='4xl'>Lista de tarefas </Heading>
      </Stack>

      <Center>
        <Divider width="50%"  fontWeight="extrabold" mb="20px"/>
      </Center>
        
      <InputPersonalidade margin="20px"/>

      <Center>
        <Divider  width="50%"  fontWeight="200" mb="20px" />
      </Center>

      <Item tarefa="Tarefa 1"/>


    </Layout>
  );
}



/**      <h1 >Lista de Tarefas</h1>
      <hr />
      <p >
        <ul>
          <li><input type="checkbox" />Tarefa 1</li>
          <li><input type="checkbox" />Tarefa 2</li>
          <li><input type="checkbox" />Tarefa 3</li>
          <li><input type="checkbox" />Tarefa 4</li>
        </ul>
      </p> */