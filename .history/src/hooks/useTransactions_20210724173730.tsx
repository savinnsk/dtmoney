import { createContext , useState , useEffect , ReactNode, useContext} from 'react';
import { api } from '../services/api'


interface Transaction {
    id : number 
    title : string 
    amount : number
    type : string 
    category : string
    createdAt : string
}


interface TransactionsProviderProps {
    children : ReactNode ;   // is necessary to explicit that our component context will share data to others components
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


interface TransactionsContextData {
    transactions : Transaction[];
    createTransaction : (transaction : TransactionInput ) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );  // creating a context and put what kind of value we'll use.

    
export function TransactionsProvider ( {children} : TransactionsProviderProps ){

    const [transactions , setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')  // dont need convert to json 
        .then( response => setTransactions(response.data.transactions))

    },[] ); //execute 1 time 

    async function  createTransaction(transactionInput : TransactionInput){
  
     const response =  await api.post('/transactions' , {
         ...transactionInput,
         createdAt : new Date()
     }); //sending data to route transactions created with miragejs in index 
     const {transaction} = response.data ;

     setTransactions([
         ...transactions,
            transaction,
     ])
    }
                                                                //seending data to 
    return (
        <TransactionsContext.Provider value={{transactions , createTransaction ,}}>
            {children}
        </TransactionsContext.Provider>
    )
}

//TransactionsContext.Provider


export function useTransaction(){
    const context = useContext(TransactionsContext)
    return context ;
}