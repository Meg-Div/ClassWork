import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useState } from "react";
import Student from "./components/Student/Student";

function App() {
  console.log("rendered app");
  const [counter, setCounter] = useState(0);
  const studentData = [
    { name: "tyler", occupation: "ui/ux designer" },
    { name: "tony", occupation: "ui/ux designer" },
  ];
  const studentName = "William";
  const student2 = "Rob";

  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Counter is: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {studentData.map((student) => (
        <Student student={student} />
      ))}
      <Header student2={student2} counter={counter} />
      <Footer studentName={studentName} counter={counter} />
    </div>
  );
}
export default App;
