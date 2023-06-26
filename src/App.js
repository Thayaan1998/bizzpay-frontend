import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from './customer/CustomerList';
import MasterConfigarationList from './masterconfigaration/MasterConfigarationList';
import HomeComponent from './HomeComponent';
import SideBar from './SideBar';
import SalesList from './sales/SalesList';
import BillWiseReciptList from './billwisereceipt/BillWiseReciptList';
import ChequeList from './cheque/ChequeList';

import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#283c64'
    }
  }
});




function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <BrowserRouter>
        {/* <Header></Header>
        < ToastContainer /> */}
        <Routes>
            <Route path="/" element={<CustomerList />} />
            <Route path="/masterConfigaration" element={<MasterConfigarationList />} />
            <Route path="/homeComponent" element={<HomeComponent />} />
            <Route path="/sideBar" element={<SideBar />} />
            <Route path="/sales" element={<SalesList />} />
            <Route path="/billWiseRecipt" element={<BillWiseReciptList />} />
            <Route path="/cheque" element={<ChequeList />} />




        </Routes>
      </BrowserRouter>


    </div>
    </ThemeProvider>
  );
}

export default App;



