import { useState } from 'react'
import PanelInicio from './componentes/PanelInicio'
import RegistroUsuarios from './componentes/RegistroUsuarios'
//Importaciones de Firebase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
      <PanelInicio/>
      {/* {usuario ? <CarruselInicio/> : <PanelInicio/>} */}
    </section>

  )
}

export default App
