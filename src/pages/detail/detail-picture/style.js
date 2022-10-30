import styled from 'styled-components'

export const DetailPictureWrapper = styled.div`
  display: flex;
  height: 600px;
  background-color: #000;

  /* 排他思想实现hover */
  &:hover {
    .cover {
      opacity: 1 !important;
    }

    .item:hover {
      .cover {
        opacity: 0 !important;
      }
      img {
        transform: scale(1.05);
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 200ms ease;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
`
