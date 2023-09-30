import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "../Footer";
import Nav from "../Topo";

interface Props {
    children: React.ReactNode
}
export default function Layout(props: Props){
    const {children} = props
    return(                                                         //topo conteudo footer
        <Grid className="grid" templateColumns='1fr' templateRows='auto auto 64px'>
        <GridItem colSpan={1} rowSpan={1}>
          <Nav/>
        </GridItem>
  
        <GridItem colSpan={1} rowSpan={1}>
          {/* /**Aqui vai vim todos os componentes filhos */ }
          {children}
        </GridItem>
  
        <GridItem colSpan={1} rowSpan={1}>
          <Footer/>
        </GridItem>
      </Grid>
    )
}