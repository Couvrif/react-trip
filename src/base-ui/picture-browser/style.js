import styled from 'styled-components'

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  z-index: 999;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      cursor: pointer;
      top: 15px;
      right: 25px;
      z-index: 9999;
    }
  }

  .slider {
    flex: 1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        margin: auto 0;
        width: 83px;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-width: 105vh;
      img {
        width: 100%;
        /* height: 100%; */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(100%);
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    margin: 15px auto 150px;
    height: 120px;
    
    max-width: 105vh;
    overflow: hidden;
    .info{
      font-size: 15px;
      color: white;
      .preview-desc{
        display: flex;
        justify-content: space-between;
        transform: translateY(${props => props.showBottom ? '0' : '100px'});
        transition: transform 200ms ease;
        .desc-right{
          cursor: pointer;
          z-index: 6999;
        }
      }
      .preview-list{
        margin: 13px -8px 0;
        transform: translateY(${props => props.showBottom ? '0' : '120px'});
        transition: transform 200ms ease;
        .pre-item{
          width: 120px;
          height: 100%;
          margin: 0 8px;
          opacity: 0.5;
          img{
            width: 100%;
            height: 80px;
            transition: height 200ms ease;
            cursor: pointer;
          }
        }

        .activeImg{
          opacity: 1;
        }
      }
    }
    
  }

  .helloBox {
    width: 100px;
    height: 100px;
    background-color: pink;
  }

  .box-enter {
    opacity: 0;
    transform: scale(0.6);
  }

  .box-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 1000ms;
  }

  .box-exit {
    opacity: 1;
    transform: scale(1);
  }

  .box-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition: all 1000ms;
  }
`
