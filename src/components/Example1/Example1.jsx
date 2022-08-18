import { Component } from 'react';
import Counter from './Counter';


class New extends Component {
    state = {
        counter: 0,
    }

    handleDecrement = () => {
        // this.setState({
        //     counter: this.state.counter - 1,
        // })
        this.setState((prevState)=>({
           counter: prevState.counter - 1,
            
        }))
    }

    handleIncrement = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // })
        this.setState((prevState)=>({
            counter: prevState.counter + 1,
             
         }))
    }

    render() {
        const {counter} = this.state
        const { handleDecrement,handleIncrement } = this
        return (
            <div>
                <h1> My work</h1>
                <Counter
                    counter={counter}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                />
           </div>
        )
    }
}

export default New;