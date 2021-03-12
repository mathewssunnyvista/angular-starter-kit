import './App.css';

import React, { useState } from "react";


function App() {
  const [elements, setElements] = useState([{ value: null }]);
  let [total, setTotal] = useState(0);

  function handleChange(i, event) {
    const re = /^[0-9\b]+$/; //Regex pattern for numbers
    if (event.target.value === '' || re.test(event.target.value)) {
      const values = [...elements];
      values[i].value = event.target.value;
      setElements(values);
    }
  }

  function addElement() {
    const values = [...elements];
    values.push({ value: null });
    setElements(values);
  }

  function removeElement(i) {
    const values = [...elements];
    values.splice(i, 1);
    setElements(values);
  }

  function handleSum() {
    let sum = 0;
    elements.map((value, index) => {
      sum += Math.floor(value.value);
      setTotal(sum);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="button" onClick={() => addElement()} value="+" />
        {elements.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <input
                type="text"
                placeholder="Enter text"
                value={field.value || ""}
                onChange={e => handleChange(idx, e)}
              />
              <input type="button" onClick={() => removeElement(idx)} value="-" />
            </div>
          );
        })}

        <input type="button" onClick={() => handleSum()} value="get total" />
         {(total !== 0) ? total : ""}

      </header>
    </div>
  );
}

export default App;
