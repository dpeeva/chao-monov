import React from "react"

export const MoneyContext = React.createContext({
    sum: 0,
    setSum: (sum: number) => { },
})