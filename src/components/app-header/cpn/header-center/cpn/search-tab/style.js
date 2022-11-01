import styled from "styled-components";

export const SearchTabWrapper = styled.div`
    display: flex;
    font-size: 18px;
    color:${props => props.theme.isOpacity ? 'white' : 'black'};
    margin: 0 -17px;
    .tabbar-item{
        margin: 0 17px;
        box-sizing: border-box;
        padding: 8px 0;
        cursor: pointer;
    }

    .active{
        border-bottom: ${props => props.theme.isOpacity ? '3px solid white' : '3px solid #222222'};
    }
`