import LandingPageText from "./LandingPageText"
import Table from "./Table"

const LandingPage = (props) => {
    return (  
            <>
            <LandingPageText/>
            {props.tableLoading===false?<Table exchangeRates={props.exchangeRates}/>:""}
            </>
    );
}
 
export default LandingPage;