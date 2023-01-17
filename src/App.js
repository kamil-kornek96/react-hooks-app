import './assets/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout, UseCallbackHook, UseStateHook, UseContextHook, UseEffectHook, UseMemoHook, UseReducerHook, UseRefHook} from "./pages"
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UseStateHook />} />
              <Route path="/use-effect" element={<UseEffectHook />} />
              <Route path="/use-memo" element={<UseMemoHook />} />
              <Route path="/use-ref" element={<UseRefHook />} />
              <Route path="/use-context" element={<UseContextHook />} />
              <Route path="/use-reducer" element={<UseReducerHook />} />
              <Route path="/use-callback" element={<UseCallbackHook />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
