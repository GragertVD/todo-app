import React from 'react';
import { ContactsContainer, FooterContainer } from './style';

export const Footer: React.FC = () => {

  return (
    <FooterContainer>
      <h3>Created by Gragert</h3>
      <ContactsContainer>
        <h4>Contacts: </h4>
        <a href="https://t.me/gragert_vd" target="_blank" rel="noreferrer" >Telegram</a>
        <a href="https://github.com/GragertVD" target="_blank" rel="noreferrer" >GitHub</a>
      </ContactsContainer>
    </FooterContainer>
  );
};
