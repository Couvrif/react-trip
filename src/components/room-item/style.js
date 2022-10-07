import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 30px;
  flex-shrink: 0;
  .inner {
    .cover {
      width: 100%;
      position: relative;
      padding: 66.66% 1px 0;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
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
