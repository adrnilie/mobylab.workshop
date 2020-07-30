import React from 'react';
import { MyContext } from './context';

const Counter = props => {
    return(
        <MyContext.Consumer>
            {
                context => (
                    <div>
                        <p>{context.state.counter}</p>
                        <button onClick={context.increment}>increment</button>
                        <button onClick={context.decrement}>decrement</button>
                    </div>
                )
            }
        </MyContext.Consumer>
    )
}

export default Counter;