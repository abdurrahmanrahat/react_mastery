import { useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./contexts";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
