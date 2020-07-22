import React, { useState, useEffect } from "react";

const initialMsg = "Hello, people!";

const Welcome = () => {
  const [message, setMessage] = useState(initialMsg);

  // componentDidMount
  useEffect(() => {
    console.error("I was mounted");

    // componentWillUnmount
    return () => {
      console.error("I will unmount");
    };
  }, []);

  // shouldComponentUpdate
  useEffect(() => {
    if (message !== initialMsg) {
      console.error("I should update, mister!");
    }
  }, [message]);

  return (
    <>
      <button
        type="button"
        onClick={() => setMessage("Hei, why you modified me??")}
      >
        Modify MEE!!
      </button>
      <h1>{message}</h1>
    </>
  );
};

export default Welcome;

// class Welcome extends React.Component {
//   state = {
//     message: "Hello, people!",
//   };

//   componentDidMount() {
//     console.error("I was mounted");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState !== this.state) {
//       console.error("I should update, mister!");

//       return true;
//     }

//     return false;
//   }

//   componentWillUnmount() {
//     console.error("I will unmount!");
//   }

//   render() {
//     console.error("I was rendered");

//     return (
//       <>
//         <button
//           type="button"
//           onClick={() =>
//             this.setState({ message: "Hei, why you modified me??" })
//           }
//         >
//           Modify MEE!!
//         </button>
//         <h1>{this.state.message}</h1>
//       </>
//     );
//   }
// }
