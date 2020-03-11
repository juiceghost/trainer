import React from 'react';

function Exercise2() {
    return (
        <div className="App">
            {/*  <List /> */}
        </div>
    );
}

export default Exercise2;

const names = ['Krille', 'Mårten', 'Sigvard', 'Lasse', 'Ann-Charlotte']
const ages = [40, 30, 20, 50, 65]
const cities = ['Stockholm', 'Göteborg', 'Malmö', 'Malmö', 'Luleå']


/*******************************************************************************************************************************************************
 * Om ni känner er osäkra kan det vara en bra idé att göra övningarna på https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/
 * Uppgift 1. Det finns tre stycker arrayer, namn, åldrar samt städer. Målet är att skapa en funktion som tar alla tre arrayerna som argument
 * och returnerar en array av objekt enligt följande spec: [{name: 'Krille', age: 40, city: 'Stockholm'}]
 * Använd gärna en for-loop första gången, men går det att göra med något annat än en vanlig for-loop? Experimentera!
 * Uppgift 2. Skapa en funktion som tar den färdiga arrayen från uppgift 1 som argument och returnerar en lista som passar att rendera som en komponent.
 * Använd gärna komponenten Exercise2 ovan. Det kan finnas något annat fel som gör att listan inte renderas som förväntat. Öva på att använda React Dev Tools.
 * Uppgift 2b. Refaktorisera om koden så att det finns en UserList-komponent som i sin tur renderar en UserListItem per element i arrayen.
 * Uppgift 3. Skriv en funktion som sorterar arrayen av objekt på ålder, i stigande och fallande och returnerar en ny array av objekt.
 * Uppgift 4. (överkurs) Ta reda på koordinaterna för städerna och lägg in dem i arrayen av objekt tillsammans med rätt person: [{name: 'Krille', age: 40, city: 'Stockholm', lat: 59.329323, lng: 18.068581}]
 * Skriv en funktion som returnerar avståndet mellan alla personerna: "Krille bor 500 kilometer från Mårten". Hur många avstånd behövs totalt skrivas ut?
 * Om Krille bor 500 kilometer från Mårten vet vi att Mårten bor 500 kilometer från Krille.
 *
 *******************************************************************************************************************************************************/