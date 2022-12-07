import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Header, InnerWrap } from "./partials"
import { Bots, Game, Gameover, Hiring, Home, Messages, Withdraw } from "./pages"
import "./App.css"

function App() {
    return (
        <Router>
            <Header balance={0} />
            <InnerWrap>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/bots' element={<Bots />}></Route>
                    <Route path='/game' element={<Game />}></Route>
                    <Route path='/withdraw' element={<Withdraw />}></Route>
                    <Route path='/messages' element={<Messages />}></Route>
                    <Route path='/hiring' element={<Hiring />}></Route>
                    <Route path='/gameover' element={<Gameover />}></Route>
                </Routes>
            </InnerWrap>
        </Router>
    )
}

export default App