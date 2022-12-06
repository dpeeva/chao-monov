import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import { Content } from "./partials/Content"
import { Header } from "./partials/Header"
import "./App.css"
import Bots from "./Bots"
import Withdraw from "./Withdraw"

function App() {
    return (
        <Router>
            <Header balance={0} />
            <div className="page-wrap">
                <Content>
                    <Routes>
                        {/* <Route path='/' element={<App />}></Route> */}
                        <Route path='/bots' element={<Bots />}></Route>
                        <Route path='/withdraw' element={<Withdraw />}></Route>
                    </Routes>
                </Content>
            </div>

            Repeatable
        </Router>
    )
}

export default App
