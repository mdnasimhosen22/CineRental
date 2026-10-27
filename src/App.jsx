import { useState } from "react";

import MovieList from "./cinema/MovieList";
import { MovieContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [cardDate, setCardData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cardDate, setCardData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>

        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
