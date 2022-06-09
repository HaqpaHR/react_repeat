import React, {useEffect, useState} from "react";
import "./styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        };
        setIsLoading(false)
    }, []);


  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
    }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
