import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 30px;
  flex-shrink: 0;
  .inner {
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      cursor: pointer;

      > img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
        object-fit: cover;
      }
    }

    .swiper {
      position: relative;
      cursor: pointer;

      &:hover {
        .control {
          /* 鼠标经过时显示，设置flex也可以 */
          display: flex;
        }
      }

      .control {
        display: none;
        justify-content: space-between;
        align-items: center;
        /* 铺满容器，flex布局居中 */
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 9;

        /* 箭头按钮设置线性渐变 */
        .btn {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: #fff;
          /* 设置宽高是为了给线性渐变显示 */
          height: 100%;
          width: 83px;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
            justify-content: flex-end;
          }
        }

        .left {
        }
      }

      .indicator {
        position: absolute;
        bottom: 10px;
        width: 30%;
        z-index: 9;
        left: 0;
        right: 0;
        margin: 0 auto;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
          }

          .active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.verifyColor};
    }

    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 600;
      color: ${(props) => props.theme.text.primaryColor};

      .count {
        margin: 0 2px 0 4px;
      }

      .MuiRating-decimal {
        margin-right: -2px;
      }
    }
  }
`
