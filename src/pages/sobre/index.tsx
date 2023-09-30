import Redes from '../../components/Redes'
import Layout from '../../components/Layout'
export default function Sobre(){
    return(
        <Layout>
            <h1 >Sobre o desenvolvedor</h1>
            <br/><br/>
            <hr />
            <br/><br/>
            <p >
                O projeto foi desenvolvido com intuito de aprimorar os conhecimentos do desenvolvedor <br/>
                criando assim um projeto que pudesse ser amplamente utilizado por qualquer pessoa<br/>
                que queira organizar o dia-a-dia podendo listar todos os seus afazeres no dia. <br/>  
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Redes texto='GitHub' href='https://github.com/devGiovanni95' img='./../../public/github.png'/>
        </Layout>
    )
}