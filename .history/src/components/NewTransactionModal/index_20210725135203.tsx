import Modal from 'react-modal';
import { useState  , FormEvent } from 'react';
import { useTransaction } from '../../hooks/useTransactions';

import closeImg from '../../assets/vector.svg'
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import { Container , TransactionTypeContainer , RadioBox} from './styles';

interface NewTransactionProps  {
  isOpen : boolean ;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen , onRequestClose } : NewTransactionProps ){
  
  const { createTransaction } = useTransaction()

  const [title , setTitle] = useState('');
  const [ amount, setAmount] = useState(0);
  const [category , setCategory] = useState('');
  const [type,setType] = useState('deposit');
  
 async function handleCreateNewTransaction (event : FormEvent){
    event.preventDefault();


     await createTransaction({
      title ,
      amount ,
      type , 
      category ,
    })

    setTitle('');
    setAmount(0);  //cleaning modal
    setCategory('');
    setType('deposit');
    onRequestClose();
  }
    return (
     
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content"
               >  

         <button type="button" 
         onClick={onRequestClose}
         className="react-modal-close">
           <img src={closeImg} alt="close modal" />
        </button> 

        <Container onSubmit={handleCreateNewTransaction}>    
              <h2>Cadastrar transação</h2>

              <input type="text"
               placeholder="Título" 
               value={title}                                        // event.target gets the value typed 
               onChange = { event =>setTitle(event.target.value)}  //onChange runs a action when value changes 
               />                                                  

              <input 
              type="number"
               placeholder="Valor" 
               value ={amount}
               onChange = { event =>setAmount(Number(event.target.value))}
               />

              <TransactionTypeContainer>
                <RadioBox
                type='button'
                onClick={()=> {setType('deposit')}}
                isActive={type === 'deposit'}
                activeColor='green'
                >
                  <img src={incomeImg} alt="income" />
                  <span>Entrada</span>
                </RadioBox>


                <RadioBox
                type='button'
                onClick={()=>{setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor='red'
                >
                  <img src={outcomeImg} alt="outcome" />
                  <span>Saida</span>
                  
                </RadioBox>
              </TransactionTypeContainer>
             

              <input type="text"
               placeholder="Categotia" 
               value={category}
               onChange = { event =>setCategory(event.target.value)} // we get the value typed here
               />

              <button 
              type="submit"
              >Cadastrar</button>

        </Container>
        </Modal>
    
    )
}