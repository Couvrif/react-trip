import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: ${(props) => (props.theme.isOpacity ? 'none' : '1px solid #eee')};
  z-index: 999;
  .del-cover {
    position: relative;
    z-index: 999;
    background-color: ${(props) => (props.theme.isOpacity ? 'rgba(255,255,255,0)' : 'white')};
    /* background-color: rgba(255,255,255,0); */
    .header-content {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    display: ${(props) => (props.theme.isOpacity ? 'none' : 'block')};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const HeightWrapper = styled.div`
  height: ${(props) => (props.isSearch ? '100px' : '0')};
  transition: height 250ms ease;
`
