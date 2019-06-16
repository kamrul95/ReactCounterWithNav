import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 5},
            {id: 3, value: 0},
        ]
    };

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

    handleReset = () =>{
      const counters = this.state.counters.map(counter =>{
         counter.value = 0;
         return counter;
      });
      this.setState({counters});
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>

                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;