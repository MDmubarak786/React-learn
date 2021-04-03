import { useState } from "react";
import "./styles.css";

function Button1(props){
const btn = () => props.adding_value1(props.incrementvalue1) ;
  return(
  <div>
  <button onClick={btn}>100+</button>
  <span>{props.newvalue1}</span>
  </div>
  );
}
function Button2(props){
  return(
  <div>
  <button onClick={() => props.adding_value2(props.incrementvalue2)}>5+</button>
  <span>{props.newvalue2}</span>
  </div>
  );
}

export default function App() {
  const [newnum2, oldnum2] = useState(0);
  const [newnum1, oldnum1] = useState(0);
  const adding = (increment) => oldnum1(newnum1+increment);
  const adding2 = (increment2) => oldnum2(newnum2+increment2);
  return (
    <div className="App">
     <Button1 adding_value1={adding} newvalue1={newnum1} incrementvalue1={100}/>
     <Button2 adding_value2={adding2} newvalue2={newnum2} incrementvalue2={5}/>
    </div>
  );
}
