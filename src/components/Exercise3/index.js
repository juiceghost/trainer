import React from 'react';
import bcrypt from 'bcryptjs';

function Exercise3() {
    return (
        <div className="App">
            <NameForm />
        </div>
    );
}

export default Exercise3;
const users = [{ username: 'Krille', email: 'kj@kj.se', id: 1, password_hash: '$2a$10$ZrP1grvTLqpCN8vzdc/N2eO7ZQN4VMegsATymKHX.LqhZO2Gnlf.K' }, { username: 'Rebecka', last_name: 'Hedlin', email: 're@re.se', id: 2 }];
const messages = [];
/*******************************************************************************************************************************************************
 * Nu kopplar vi in React i övningarna på allvar! Målet är att implementera ett någorlunda säkert sätt att logga in 
 * dock utan Firebase Auth den här gången. 
 * Uppgift 1. Studera källkoden till denna komponent, samt testa att kör den i browsern. Studera eventuella fel, vad är bra att göra efter en git pull?
 * Uppgift 2. Se https://reactjs.org/docs/forms.html för en beskrivning hur forms fungerar i React. Jag har dock valt att avvika något från deras exempel. Vad är skillnaden mellan en controlled component och en uncontrolled?
 * Uppgift 3. Se om du kan få koden i handleSubmit att fungera som tänkt, dvs console.log ska ej skriva ut undefined
 * Uppgift 4. Du ska nu implementera en grundläggande login. Användaren fyller i ett username och ett lösenord. Utöka handleSubmit-funktionen så att först
 * tittar på det finns en användare i users-arrayen med samma username, och i så fall testar om lösenordet är det samma. Det är inte säkert att spara lösenord i klartext
 * därför sparas de med en s.k. one-way hash. Den fungerar så att den alltid ger samma hash för en given input, men är helt omöjlig att reversera, dvs
 * få ut lösenordet i klartext från hashen. Med det sagt, minns du vilket lösenord jag alltid brukar använda i Firebase? Kanske har jag använt samma.
 * Vid en lyckad inloggning ska användaren redirectas till /account t.ex. Vid en misslyckad inloggning ska formuläret rensas. Du får gärna lägga till ytterligare
 * funktionalitet som felmeddelande
 * Uppgift 5. Implementera Account-delen så att det ser ut som att det går att ändra lösenord, den komponenten lär bli lik NameForm, låt dig inspireras
 * Uppgift 6. Faktorisera om users-arrayen i en egen modul och skriv metoder för att uppdatera arrayen. Implementera localStorage så att ändringarna sparas
 * Uppgift 7. Implementera signup. Flytta formulären så de ligger där de är mest logiska (/signin, /signup, /account t.ex)
 * 
 * 
 * 
 * 
 * 
 * 
********************************************************************************************************************************************************/

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.state.value, salt, (err, hash) => {
                console.log(hash);
            });
        });
        event.preventDefault();
        return false;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Userame:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}