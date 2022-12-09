import React from "react"
import styled from "styled-components"

const Wrap = styled("span")`
width: 52px;
text-align: center;
`

interface Props extends React.PropsWithChildren<HTMLSpanElement & any> {
}

export const Clock: React.FunctionComponent<Props> = (props) => {
    const [date, setDate] = React.useState("")

    let currTime, endTime, diff

    const getFormat = (value: number) => {
        let text = value.toString()
        return text.length > 1
            ? value
            : `0${value}`
    }

    function refreshClock() {
        currTime = Date.now()
        endTime = new Date("December 9, 2022 18:00:00 GMT+02:00").getTime()
        diff = endTime - currTime

        let hours, minutes, seconds

        if (diff < 0) {
            hours = "00"
            minutes = "00"
            seconds = "00"
        } else {
            // const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            hours = getFormat(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            minutes = getFormat(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
            seconds = getFormat(Math.floor((diff % (1000 * 60)) / 1000))
        }

        setDate(`${hours}:${minutes}:${seconds}`)
    }

    React.useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return <Wrap>{date}</Wrap>
}