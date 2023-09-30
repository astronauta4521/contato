import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Sobre from "../pages/sobre";
import Projeto from "../pages/projeto";
import Tarefas from "../pages/tarefas";

const router = createBrowserRouter([
  {path:'/', element:<Home/>, errorElement:<NotFound/>},
  {path:'/sobre', element:<Sobre/>},
  {path:'/sobre-projeto', element:<Projeto/>},
  {path:'/tarefas', element:<Tarefas/>}
])

export default router