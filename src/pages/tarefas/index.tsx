import { Center, Divider, Stack } from "@chakra-ui/react";
import InputPersonalidade from "../../components/Input";
import Layout from "../../components/Layout";
import Item from "../../components/Tarefa";
import { Heading} from '@chakra-ui/react'


export default function Tarefas() {
  return (
    <Layout>
      <Stack spacing={3} textAlign="center">
        <Heading fontSize='4xl'>(4xl) Lista de tarefas </Heading>
      </Stack>

      <Center>
        <Divider width="50%" alignItems="center" fontWeight="200"/>
      </Center>
      
      <InputPersonalidade/>
      <Divider />
      <Item/>
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