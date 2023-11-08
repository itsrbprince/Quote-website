import "./App.css";
import Quotes from "./components/Quotes";
import { Navbar } from "./pages/Navbar";
import { Routehandler } from "./Routehandler";
import { Footer } from "./pages/Footer/footer";
import { Searchfilter } from "./components/Search";

const imgurl = "https://images.unsplash.com/photo-1510057622795-5c8122c2c665?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function App() {
  return (
    <div className="bg-black bg-no-repeat bg-contain"
    // style={{
    //   backgroundImage: `url(${imgurl})`,
    // }}
    >
      <Navbar />
      <Routehandler/>
      <Quotes />
      <Searchfilter />
      <Footer/>
    </div>
  );
}

export default App;
