import { Component } from 'react';
import MainPage from './Pages/MainPage';
import TransactionPage from './Pages/TransactionPage';
import BalancePage from './Pages/BalancePage';

class AppNew extends Component {
    state= {
        activePage: "",
        costs: [],
        incomes: [],
    }

    toggleActivePage = (activePage="") => {
        this.setState({activePage});
    }

    addTransaction = ({transaction, transType}) => {
        this.setState((prevState) => ({
        [transType]:[...prevState[transType],transaction]
        }))
    }

     render() {
    const {activePage}= this.state;
    switch(activePage) {
        case "costs": 
            return (
            <TransactionPage 
            closeActivePage={this.toggleActivePage}
            transType={activePage}
            addTransaction={this.addTransaction}
            />);
        case "incomes": 
            return (
            <TransactionPage 
            closeActivePage={this.toggleActivePage}
            transType={activePage}
            addTransaction={this.addTransaction}
            />);

        case "balance": 
            return <BalancePage/>;
        default:
            return <MainPage openActivePage={this.toggleActivePage}/>
    };


}
}

export default AppNew;
