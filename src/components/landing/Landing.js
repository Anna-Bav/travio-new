import React from 'react';
import './Landing.css';
import Header from '../landing/header/Header';
import Main from '../landing/main/Main';
import Work from '../landing/work/Work';
import Stimul from '../landing/stimul/Stimul';




export default function Landing() {
    return(
     <div className='landing'>
         <Header />
        <Main />
        <Work />
        <Stimul />
     </div>
     )
 }