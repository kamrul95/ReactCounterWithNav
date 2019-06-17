import React, {Component} from 'react';
import './App.css';
import Counters from "./components/counters";
import Countnavbar from "./components/countnavbar";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 5},
            {id: 3, value: 0},
        ]
    };

    constructor(props){
        super(props);
        console.log("App - Constructor");
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});

    };


    handleDelete = (counterId) => {
        console.log("ON delete: ", counterId);
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        console.log(counters);
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    };

    render() {
        return (
            <React.Fragment>
                <Countnavbar totalCount={this.state.counters.filter(count=>count.value>0).length}/>
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                />
            </React.Fragment>

        );
    }
}

export default App;
