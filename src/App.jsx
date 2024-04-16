import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Home } from "./components/Pages/Home/Home"
import { Section } from "./components/Section/Section"
import logo  from "./assets/react.svg";
function App() {

  return (
    <>

    <Home>
      <Header/>
      <Main>
        <Section>
          <img className="w-60 h-60" href={logo} />
          <div className="w-60 bg-gray-600">
            <h3>Titulo noticia 1</h3>
            <p>Descripcion de la noticia 1</p>
          </div>
        </Section>
      </Main>
    </Home>

    </>
  )
}

export default App
