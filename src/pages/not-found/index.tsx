import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function NotFound(){
    return( 
        <Layout>
        <div>
            <h1>Página não encontrada</h1>
            <p>A URL digitada não foi encontrada</p>
            <hr />
            <Link to='/'>Voltar para a home</Link>
        </div>
        </Layout>
    )
}