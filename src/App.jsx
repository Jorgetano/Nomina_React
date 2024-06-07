import { useState } from 'react'
//Importaciones de Firebase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './componentes/Home'
//Constante Para autenticar desde App Firebase
const auth = getAuth(appFirebase)

function App() {

  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
    <section>
      <Home/>
    </section>

  )
}

export default App
