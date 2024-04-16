import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Hero from './components/Hero/Hero.jsx'
import NavBar from './components/NavBar/NavBar.jsx'


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div style={{display:'flex', width:'100vw', flexDirection:'column'}}>
      <NavBar></NavBar>
      <Hero></Hero>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
    </QueryClientProvider>
  )
}

export default App
