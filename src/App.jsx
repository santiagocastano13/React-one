import { ContainerNews } from "./components/ContainerNews/ContainerNews"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Home } from "./components/Pages/Home/Home"


function App() {

  return (
    <>

    <Home>
      <Header/>
      <Main>
        <ContainerNews/>
      </Main>
    </Home>

    </>
  )
}

export default App
