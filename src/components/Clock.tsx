import React from "react"
import styled from "styled-components"

const Wrap = styled("span")`
width: 52px;
text-align: center;
`

interface Props extends React.PropsWithChildren<HTMLSpanElement & any> {
}

export const Clock: React.FunctionComponent<Props> = (props) => {
    const [date, setDate] = React.useState(new Date())

    function refreshClock() {
        setDate(new Date())
    }

    React.useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return <Wrap>{date.toLocaleTimeString()}</Wrap>
}