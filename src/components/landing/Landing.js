import React from 'react';
import './Landing.css';
import Header from '../landing/header/Header';
import Main from '../landing/main/Main';
import Work from '../landing/work/Work';





export default function Landing() {
    return(
     <div className='landing'>
         <Header />
        <Main />
        <Work />
     </div>
     )
 }