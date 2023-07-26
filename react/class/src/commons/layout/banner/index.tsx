import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 100px;
    background-color: skyblue;
`

export default function LayoutBanner() : JSX.Element {
    return (
        <div>
            <Wrapper>Layout 배너 입니다</Wrapper>            
        </div>
    )
}