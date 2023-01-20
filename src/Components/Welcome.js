import {useState} from "react";
const Welcome = (props) => {
  const {name, message} = props;
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);
  return(
    <div>
      <h1>Hola, {name}</h1>
      <h2>{message}</h2>
      <button type="submit" onClick={()=>setCounter(counter+1)}>Hola {counter}</button>
    </div>
  )
    
}

export default Welcome