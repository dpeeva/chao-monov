import * as React from "react"
import styled from "styled-components"

const StyledContent = styled( "main" )`
margin: 0 auto;
width: 1080px;
`

interface Props extends React.PropsWithChildren {
}

export const Content: React.FunctionComponent<Props> = ( { children } ) => {
    return <StyledContent>
        {children}
    </StyledContent>
}