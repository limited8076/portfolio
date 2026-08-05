import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Databridge from "./Databridge";
import { PortfolioContext } from "./PortfolioContext";

const App = () => {
  const data = Databridge();

  return (
    <PortfolioContext.Provider value={data}>
      <div className="px-10 md:px-20 select-none">
        <Header />
        <Body />
        <Footer />
      </div>
    </PortfolioContext.Provider>
  );
};

export default App;
