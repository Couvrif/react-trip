import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    background-color: #333;
    z-index: 999;
    display: flex;
    flex-direction: column;

    .top{
        position: relative;
        height: 86px;
        .close-btn{
            position: absolute;
            cursor: pointer;
            top: 15px;
            right: 25px;
        }
    }

    .slider{
        flex: 1;
        display: flex;
        justify-content: center;
        
        .control{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            color: #fff;

            .btn{
                margin: auto 0;
                width: 83px;
                cursor: pointer;
            }
        }

        .picture{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            max-width: 105vh;
            img{
                width: 100%;
                /* height: 100%; */
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                user-select: none;
            }
        }
    }   

    .preview{
        height: 100px;
    }
`