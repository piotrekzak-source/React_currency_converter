import axios from "axios";
import { useState, useEffect } from "react"
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar/NavBar";
import Converter from "./components/Converter"

function App() {

  const [exchangeRates, setExchangeRates] = useState(null);
  const [tableLoading,settableLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
   

       axios.get('https://api.nbp.pl/api/exchangerates/tables/A/today/?format=json').then((response) => {
        console.log(response.data[0].rates)
        setExchangeRates(response.data[0].rates)
        settableLoading(false)
      })
    
    
  }, [])

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage}/>
      {/* <LandingPage exchangeRates={exchangeRates} tableLoading={tableLoading}/> */}
    <Converter/>
    </div>
  );
}

export default App;
