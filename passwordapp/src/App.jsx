import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(0);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_-+=[]{}~`";

        for (let i = 1; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [setPassword, length, numberAllowed, charAllowed]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700 py-4">
                <h1 className="text-white text-center px-4 py-2">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4 py-2">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3 rounded"
                        placeholder="password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-1"
                    >
                        Copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={44}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                        <div className="flex items-center gap-x-1">
                            <input
                                type="checkbox"
                                defaultChecked={charAllowed}
                                id="characterInput"
                                onChange={() => {
                                    setCharAllowed((prev) => !prev);
                                }}
                            />
                            <label htmlFor="characterInput" className="mx-1">
                                Characters
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
