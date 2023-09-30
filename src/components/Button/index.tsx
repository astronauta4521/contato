import {Button} from '@chakra-ui/react'

//definindo as propriedade de atributos que nosso botao tera
interface Props{
    leftIcon?: React.ReactElement
    label: string
    bg: string
    variant:string
}

//({type, label}:Props) - Passando o tipo de propriedade necessaria
//ou poderia ser Props...
function ButtonPers({leftIcon, label, bg}:Props){
    return(
        <Button size='lg' bg={bg} leftIcon={leftIcon} _hover={{bg: "#c7efcf"}}>
            {label}
        </Button>
    )
}

export default ButtonPers