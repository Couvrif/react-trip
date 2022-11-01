import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 35px;
  font-weight: 600;

  .btns {
    display: flex;
    justify-content: space-between;

    .btn {
      color: ${(props) => props.theme.isOpacity ? 'white' : props.theme.text.primaryColor};
      font-size: 15px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;

      &:hover {
        background-color: ${(props) => props.theme.isOpacity ? 'rgba(255,255,255,.2)' : '#f5f5f5'};
      }
    }
  }

  .profile {
    display: flex;
    width: 77px;
    position: relative;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    padding: 8px;
    margin-left: 10px;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 200px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .panelItem {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
      }

      .panelItem:first-child {
        color: black;
        padding-top: 5px;
      }

      .panelItem:last-child {
        padding-bottom: 5px;
      }

      .panelItem:nth-child(2) {
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
      }

      .panelItem:nth-child(3) {
        padding-top: 5px;
      }
    }
  }
`
