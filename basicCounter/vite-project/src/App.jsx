import { useState } from "react";
import "./App.css";
function App() {
    let [counter, setCounter] = useState(0);
    return (
        <>
            <div>
                <h2>Counter value: {counter}</h2>
                <button
                    onClick={() => {
                        setCounter((counter = counter + 1));
                    }}
                >
                    Add Value
                </button>
                <br />
                <button
                    onClick={() => {
                        if (counter <= 0) {
                            counter = 0;
                        } else {
                            setCounter((counter = counter - 1));
                        }
                    }}
                >
                    Reduce Value
                </button>
                <br />
                <button
                    onClick={() => {
                        setCounter((counter = 0));
                    }}
                >
                    Reset Counter
                </button>
            </div>
        </>
    );
}

export default App;
