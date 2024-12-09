import { Header } from './components/Header'; 
import { Balance } from './components/Balance';
import { Incomeexpensive } from './components/Incomeexpensive';
import  Transactionlist  from './components/Transactionlist';
import Addtransaction from './components/Addtransaction';


import { GlobalProvider } from './context/Globalstate';
import './App.css';
function App() {
  return (
    <GlobalProvider>
       <Header />
       <div className='container'>
        <Balance />
        <Incomeexpensive />
        <Transactionlist/>
        < Addtransaction/>
        </div> 
    </GlobalProvider>
  );
}
export default App;
