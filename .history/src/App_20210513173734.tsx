import { useState } from 'react';
import Modal from 'react-modal';
import {GlobalStyle} from './styles/globals';

import { Dashbord } from './components/Dashbord';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root'); //put modal on tag root

export function App() {

  const [isNewTransactionModalOpen , setIsNewTransactionModalOpen ] = useState(false);
    
  function handleOpenNewTransactionModal(){ // handle = click
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){ // handle = click
      setIsNewTransactionModalOpen(false)
  }
  


  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal} />
     <Dashbord/>
     <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
     />
     <GlobalStyle/>
    </TransactionsProvider>
  );
}

// export default App;
