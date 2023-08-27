import styled from 'styled-components';

export const TodoFooterContainer = styled.div<{ selectFilterNumber: number }>`
  width: 100%;
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  ${props => props.theme.beforeMobileL}{
    gap: 8px;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px 0;
  }
  
  button{
    cursor: pointer;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    color: ${props => props.theme.colorTextItem};


    ${props => props.theme.beforeMobileL}{
      order: 2;
    }
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;

    button:nth-child(${props => props.selectFilterNumber}) {
      color: ${props => props.theme.colorTextSelectFilter};
    }

    ${props => props.theme.beforeMobileL}{
      order: 3;
    }
  }

  p{
    ${props => props.theme.beforeMobileL}{
      order: 1;
    }
  }

`;
