import  logoImg  from '../../assets/logo.svg'
import { Container , Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionNewModal : () => void ; //without params and return 
}


export function Header ({ onOpenNewTransactionNewModal } : HeaderProps){
    
    return (
    
    <Container>
        <Content>
            <img src={logoImg} alt="dt money" />
            <button onClick={onOpenNewTransactionNewModal}> {/* alter data from app(Dad Component) */}
                Nova transação
            </button>         
        </Content>
    </Container>
    
    )
}