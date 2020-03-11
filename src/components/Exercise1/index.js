import React from 'react';

const testArray = [100, 200, 250, 250, 500, 500, 750, 750, 800, 2000, 6000, 7000];

const testArray2 = { transfer: [{ key: 'currency', value: 'USD' }, { key: 'amount', value: '10000' }, { key: 'timestamp', value: '1582044818312' }] };

// const testArray3 = [{ }]

function Exercise1() {
    return (
        <div className="App">
            <h1>Exercise 1</h1>
            <List />
        </div>
    );
}

export default Exercise1;

export const List = () => <ul><li>hej</li></ul>


/*******************************************************************************************************************************************************

   Det finns två arrayer, testArray med belopp och testArray2 med överföringar.
   1. Skriv en funktion som tar testArray som argument, och returnerar de fem högsta beloppen.
   2. Skriv en som tar testArray som argument 1 och antal högsta belopp att returnera: getMax (testArray, 3) skulle returnera 3 högsta beloppen.
   3. Skriv motsvarande funktion för att ta ut n lägsta
   4. Skriv en funktion som tar testArray2 som argument, och returnerar ett objekt som funktionen bygger och ser ut som:
      {currency: 'USD', amount: 10000, timestamp: 1582044818312}
   5. Utgå ifrån datamängden du stött på i TP2, kan du applicera map, reduce, filter etc(Array.prototype) Object.keys, Object.values, Object.assign (Object.prototype)
      i syfte att skapa två arrayer, labels och data. Labels innehåller det vi vill visa, och data säger hur mycket.

   Lycka till och hojta till om du behöver assistans
*******************************************************************************************************************************************************/