import React, {useState} from 'react';

export const MyContext = React.createContext();

export const MyProvider = props => {
    const [state, setState] = useState({
        theme: 'pink',
        counter: 0
    });

    const increment = () => {
        setState({
            ...state,
            counter: state.counter + 1
        })
    }

    const decrement = () => {
        setState({
            ...state,
            counter: state.counter - 1
        })
    }

    return (
        <MyContext.Provider
        value={{
            state,
            increment,
            decrement
        }}
        >
            {props.children}
        </MyContext.Provider>
    )
}
