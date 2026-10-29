import { useState } from "react";

import { ToastContainer } from "react-toastify";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
function App() {
  const [cardDate, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cardDate, setCardData }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
