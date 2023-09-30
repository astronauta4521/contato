import InputPersonalidade from "../../components/Input";
import Layout from "../../components/Layout";
import Item from "../../components/Tarefa";


export default function Tarefas() {
  return (
    <Layout>
      <InputPersonalidade/>
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