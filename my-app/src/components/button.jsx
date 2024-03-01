import styled from "styled-components"

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`
export const Button = () => {
    return (
        <StyledButton>
            My Button
        </StyledButton>
    )
}
