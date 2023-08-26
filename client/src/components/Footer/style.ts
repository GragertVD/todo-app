import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  flex-direction: column;
  color: ${props => props.theme.colorTextItem};
`;


export const ContactsContainer = styled.div`
  display: flex;
  gap: 8px;  
  a{
    color: ${props => props.theme.colorTextItem};
  }
`;



