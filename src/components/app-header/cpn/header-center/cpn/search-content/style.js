import styled from "styled-components";

export const SearchContentWrapper = styled.div`
    width: 850px;
    border: 1px solid #DDDDDD;
    border-radius: 50px;
    background-color: white;
    display: flex;
    .cnt-item{
        flex: 1;
        box-sizing: border-box;
        padding: 12px 30px;
        position: relative;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        
        .cnt-title{
            font-size: 14px;
            font-weight: 600;
            color: black;
        }
        .cnt-desc{
            font-size: 15px;
            color: gray;
        }

        .searchIcon-bgm{
                width: 44px;
                height: 44px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #FF385C;
                border-radius: 50%;
            }

        &:hover{
            border-radius: 50px;
            background-color: #ebebeb;
        }
    }

    .cnt-item:after{
        content: '';
        border-right: 1px solid #DDDDDD;
        height: 37px;
        position: absolute;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);
    }

    .cnt-item:last-child:after{
        display: none;
    }

    .cnt-item:hover:after{
        display: none;
    }
`