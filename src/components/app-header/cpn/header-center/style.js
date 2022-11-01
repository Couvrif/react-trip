import styled from 'styled-components'

export const HeaderCenterWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  width: 300px;
  height: 48px;
  position: relative; */
  .search-bar {
    /* position: absolute; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }

    .bar-enter{
      transform: scale(2.85,1.37) translateY(58px);
      opacity: 0;
    }

    .bar-enter-active{
      transition: all 200ms ease;
      transform: scale(1.0) translateY(0);
      opacity: 1;
    }

    .bar-exit{
      opacity: 0;
    }

    /* .bar-exit-active{
      opacity: 0;
    }  */

     .detail-enter{
      transform: scale(0.35,0.72) translateY(-58px);
      opacity: 0;
    }

    .detail-enter-active{
      transform: scale(1.0) translateY(0);
      opacity: 1;
      transition: all 300ms ease;
    }

    .detail-exit{
      transform:  scale(1.0) translateY(0);
      opacity: 1;
    }

    .detail-exit-active{
      transform: scale(0.35,0.725) translateY(-58px);
      opacity: 0;
    }
  }

  .search-tab{
    position: relative;
    /* transform-origin: 50% 0; */
    /* overflow: hidden; */
    .tab-bottom{
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

`
