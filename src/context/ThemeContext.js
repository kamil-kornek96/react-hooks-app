import React, { useState, useContext } from "react";

const ThemeContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{darkTheme: darkTheme, toggleTheme: toggleTheme}}>
             {children}
        </ThemeContext.Provider>
    )
}