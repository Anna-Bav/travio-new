import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';


export default function Header() {
    return(
             
         <div className='header'>
           <div className='header_inner'>

               <div className='header_inner1'>

                   <div className='logo'>
                   <img src='/images/logo.svg'/>
                   </div>

                   <div className='nav'>

                       <div className='search'>
                       <FaSearch className='imgSearch'/>
                       <button className='reg_btn'>Регистрация</button>
                       <Link to='/login'><button className='log_btn'>Вход</button></Link>
                       </div>

                       <div className='navs'>
                           <div className='navs1'>Как работает</div>
                           <div className='navs1'>Список переработчиков</div>
                           <div className='navs1'>Рейтинг и статистика</div>
                           <div className='navs2'>FAQ</div>
                           <div className='navs2'>Новости</div>
                           <div className='navs2'>Контакты</div>
                       </div>

                   </div>

               </div>

               <div className='header_inner2'>
                   <div className='travio'>Travio</div>
                   <div className='opis'>Автоматизированное решение,призванное упростить процесс переработки отходов для предприятий.</div>
                    <button className='join'>Присоединиться</button>
               </div>

           </div>
           
            

            {/* <Link to='/login'><button className='log_btn'>Вход</button></Link> */}
         </div>

       
   
     )
 }