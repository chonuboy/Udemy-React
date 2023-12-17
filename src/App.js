import Navbar from './navbar'
import "./style.css"
import Sale from './sale'
import Topics from './Topics'
import Recommended from './Recommended'
import Categories from './categories'
import Popular from './Popular'
import Footer from './footer'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Categories></Categories>
      <Sale></Sale>
      <Recommended></Recommended>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </>
  )
}
export default App