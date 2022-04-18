import { GlobalStyle } from "./GlobalStyle";
import Login from "./components/Login"
import { useState } from "react";

function App() {
  const [response, setResponse] = useState('')
  return <>
    <GlobalStyle/>
    <Login setResponse={setResponse}/>
    <h3 className={response === 'falha'? 'falha' : response === 'completa' ? 'completa' : undefined}>
      {response === 'falha'? 'Requisição Falhou' : response === 'completa' ? 'Requisição Completa' : undefined}
    </h3>
  </>
}

export default App;
