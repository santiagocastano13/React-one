import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Home } from "./components/Pages/Home/Home"
import { ContainerNews } from "./components/ContainerNews/ContainerNews"
import { ContainerSlide } from "./components/ContainerSlide/ContainerSlide"




function App() {

  return (
    <>

    <Home>
      <Header/>
      <Main>
        <ContainerNews/>
        <ContainerSlide />
      </Main>
    </Home>

    </>
  )
}

export default App
