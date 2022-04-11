
const table = (props) => {

    const codes = ['USD', 'EUR', 'CHF', 'GBP', 'UAH', 'AUD', 'CAD', 'NOK', 'SEK'];

    const curriencies = [];
    const reference = props.exchangeRates;
    codes.forEach((el) => {
        reference.forEach((element) => {
            if (el === element.code) {
                curriencies.push(element)
            }
        })
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Waluta</th>
                        <th>Kurs</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        curriencies.map((el, i) => {

                            return (
                                <tr key={i}>
                                    <td>{el.code}/PLN</td>
                                    <td>{el.mid.toFixed(2)}</td>
                                </tr>
                            );
                        })

                    }



                    {/* <tr>
                    <td>USD/PLN</td>
                    <td>{(props.exchangeRates[1].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>EUR/PLN</td>
                    <td>{(props.exchangeRates[7].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>CHF/PLN</td>
                    <td>{(props.exchangeRates[9].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>GBP/PLN</td>
                    <td>{(props.exchangeRates[10].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>RUB/PLN</td>
                    <td>{(0.054).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>UAH/PLN</td>
                    <td>{(props.exchangeRates[11].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>AUD/PLN</td>
                    <td>{(props.exchangeRates[2].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>CAD/PLN</td>
                    <td>{(props.exchangeRates[4].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>NOK/PLN</td> 
                    <td>{(props.exchangeRates[16].mid).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>SEK/PLN</td>
                    <td>{(props.exchangeRates[17].mid).toFixed(2)}</td>
                </tr> */}
                </tbody>
            </table>
        </>
    );
}

export default table;