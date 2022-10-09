import styled from 'styled-components'

export const RoomWrapper = styled.div`
  position: relative;
  .title {
    font-size: 20px;
    font-weight: 600;
    margin: 25px 37px;
  }

  .list-content {
    display: flex;
    box-sizing: border-box;
    padding: 10px 30px;
    flex-wrap: wrap;
  }

  .cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
