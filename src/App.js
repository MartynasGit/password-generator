import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import Title from "./components/Title/Title";

function App() {
  const [password, setPassword] = useState("");
  const [passWords, setPasswords] = useState([]);
  return (
    <div className="container minHeight100 ">
      <Title />
      <div className="d-flex justify-content-center pt-3 minHeight">
        <Form
          setPassword={setPassword}
          setPasswords={setPasswords}
          passWord={password}
          passWords={passWords}
        />
        <Results password={password} passwords={passWords} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
