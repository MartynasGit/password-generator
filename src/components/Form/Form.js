import Button from "../Button/Button";
import Dificulty from "../Dificulty/Dificulty";
import { useEffect, useRef, useState } from "react"; // eslint-disable-next-line
import {
  UpperCase,
  LowerCase,
  Symbols,
  Numbers,
} from "../data/Options";

const Form = ({ setPassword, setPasswords, passWords, passWord }) => {
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [lenghty, setLenghty] = useState(6);
  const passwordInput = useRef(null);
  const [error, setError] = useState(false)

  useEffect(() => {
    const lsItems = localStorage.getItem("items");
    if (!lsItems) {
      localStorage.setItem("items", JSON.stringify(lsItems));
    } else {
      setPasswords(JSON.parse(lsItems));
      setPassword(passWords[0]);
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(passWords));
  }, [passWords]);

  const generate = () => {
    let temp = "";
    console.log(lenghty)
    if(lenghty > 0){
    if (upperCase) temp += UpperCase;
    if (lowerCase) temp += LowerCase;
    if (numbers) temp += Numbers;
    if (symbols) temp += Symbols;
    let sum = "";
    for (let i = 0; i < lenghty; i++) {
      sum += temp[Math.floor(Math.random() * temp.length)];
    }
    setPassword(sum);
    let pass = [...passWords, { pass: sum }];

    if (pass.length > 10) pass.splice(0, 1);
    setPasswords(pass);}
  };

  const handleChange = (e) => {
    if (e.target.value > 50) {
      e.target.value = 50;
      setLenghty(50);
    }
    setLenghty(e.target.value);
  };
  const checkChange = (e) => {
    switch (e.target.id) {
      case "UpperCase":
        setUpperCase(!upperCase);
        break;
      case "LowerCase":
        setLowerCase(!lowerCase);
        break;
      case "Symbols":
        setSymbols(!symbols);
        break;
      case "Numbers":
        setNumbers(!numbers);
        break;
      default:
        break;
    }
  };
  const handleGenerate = () => {
    if (upperCase || lowerCase || symbols || numbers){
      generate();
      setError(false)
    }
    else{
      setError(true)
    }

  };
  const reset = () => {
    setUpperCase(true);
    setLowerCase(true);
    setNumbers(false);
    setSymbols(false);
    setLenghty(6);
    passwordInput.current.value = "";
    setPassword("");
    setPasswords([]);
  };

  return (
    <form className="margin-c" onSubmit={(e) => e.preventDefault()}>
      <div>
        <span>Password lenght:</span>
        <div>
          <input
            ref={passwordInput}
            type="number"
            onChange={handleChange}
            placeholder="Enter password lenght"
          />
          {!error ? (
            ""
          ) : (
            <div className="text-danger">At least one must be active !</div>
          )}
        </div>
      </div>
      <div>
        <span>Password dificulty:</span>
        <br />
        <Dificulty
          text={"Upper Case"}
          id={"UpperCase"}
          change={checkChange}
          checked={upperCase}
        />
        <Dificulty
          text={"Lower Case"}
          id={"LowerCase"}
          change={checkChange}
          checked={lowerCase}
        />
        <Dificulty
          text={"Numbers"}
          id={"Numbers"}
          change={checkChange}
          checked={numbers}
        />
        <Dificulty
          text={"Symbols"}
          id={"Symbols"}
          change={checkChange}
          checked={symbols}
        />
      </div>
      <div className="d-flex pt-2">
        <Button text={"Generate"} func={handleGenerate} />
        <Button text={"Clear"} func={reset} />
      </div>
    </form>
  );
};

export default Form;
