import { useTheme } from "../context/ThemeContext";

function UseContextHook() {
  const {darkTheme, toggleTheme} = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? "#222222" : "#ffffff",
    color: darkTheme ? "white" : "black",
    width: '100%',
    height: '500px'
  }

  return (
    <div style={themeStyles}>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <button onClick={toggleTheme}>Toogle theme</button>
    </div>
  );
}

export default UseContextHook;
