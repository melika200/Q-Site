import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mynavbar from "./components/Navbar/Mynavbar"
import Home from "./Page/Home/Home"

function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>        
        </>
    )
}
export default App