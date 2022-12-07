import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Header } from "./partials/Header"
import { InnerWrap } from "./partials/InnerWrap"
import Bots from "./Bots"
import Game from "./Game"
import Gameover from "./Gameover"
import Hiring from "./Hiring"
import Home from "./Home"
import Messages from "./Messages"
import Withdraw from "./Withdraw"
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
