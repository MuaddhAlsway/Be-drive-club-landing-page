import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../BuildFirstProject/header';
import HomePage from '../BuildFirstProject/homePage';
import FooterContainer from '../BuildFirstProject/footer';

const root = document.getElementById('Header');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Header />
    </StrictMode>
  );
} else {
  console.error('Element with id "Header" not found.');
}



createRoot(document.getElementById('ContactUs')).render(
  <StrictMode>
  <HomePage/>
  </StrictMode>,
)

createRoot(document.getElementById('Footer')).render(
  <StrictMode>
  <FooterContainer/>
  </StrictMode>
)

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
//npm run dev
