import React, {useState, useEffect} from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {registration} from '../../actions/user';




export default function Registration(props) {
    const [email, setEmail] = useState()  
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    // const [emailMessage, setEmailMessage] = useState('Введите e-mail, указанный при регистрации')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const dispatch = useDispatch()
    const [colorType, setColorType] = useState('#333333');
    const [colorLatin, setColorLatin] = useState('#333333');
    const [colorNumber, setColorNumber] = useState('#333333');
    const [colorSpecial, setColorSpecial] = useState('#333333');
    const [colorLower, setColorLower] = useState('#333333');
    const [colorUpper, setColorUpper] = useState('#333333');



    useEffect( () => {
        if (emailError || passwordError) {
            setFormValid (false)
        } else {
            setFormValid (true)
        }
        }, [emailError, passwordError])

        const emailHandler = (e) => {
            setEmail(e.target.value)
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('')
        }
        }

        const passwordHandler = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 8 || e.target.value.length > 14) {
                setPasswordError('Пароль должен быть не менее 8 и не более 14 символов')
                setColorType('red');
                if(!e.target.value) {
                    setPasswordError('Пароль не может быть пустым')
                }
            } else {
                setPasswordError ('')
                setColorType('green')
            }

           
           const regexp1 = /([a-zA-Z])/;
            if (regexp1.test(e.target.value)) {
                // console.log('1', regexp1.test(e.target.value))
                setColorLatin('green')
            } else {
                // console.log('2', regexp1.test(e.target.value))
                setColorLatin('red')
            }

             
            const regexp2 = /([0-9])/;
            if (regexp2.test(e.target.value)) {
               setColorNumber('green')
            } else {
               setColorNumber('red')
            }

            const regexp3 = /([$&+,:;=?@#|'<>.^*()%!-])/;
            if (regexp3.test(e.target.value)) {
               setColorSpecial('green')
            } else {
               setColorSpecial('red')
            }

            const regexp4 = /([a-z])/;
            if (regexp4.test(e.target.value)) {
               setColorLower('green')
            } else {
               setColorLower('red')
            }

            const regexp5 = /([A-Z])/;
            if (regexp5.test(e.target.value)) {
                setColorUpper('green')
            } else {
                setColorUpper('red')
            }
           
        }
          
        
                  
            


               
                
            
        const blurHandler = (e) => {
            switch (e.target.name) {
              case 'email':
                  setEmailDirty(true)  
                  break
             case 'password':
                 setPasswordDirty(true)
                 break
            } 
         }


    // const {popup ,setPopup ,  setPopupReg,popupReg} = props
    // function toggleReg(){
    //     setPopupReg(!popupReg)
    //     setPopup(!popup)
    // }
    return(
        <div className='registration'>
           <div className='registration_inner'>

              <div className='reg_inner1'>
              Регистрация нового пользователя
              </div>

              <div className='reg_inner2'>
              <div className='mail_adress'>Адрес электронной почты</div>
              <input onChange = {e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} className="reg_mail" name='email' type='email' />
              {(emailDirty && emailError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{emailError}</div>}
             
              <div className='mail_adress'>Пароль</div>
             
              <input onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)} className="reg_password" name='password'  type='password' />
              {(passwordDirty && passwordError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{passwordError}</div>}
              

              <div className='mail_adress'>Подтвердить пароль</div>
             
              <input onChange = {e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)} className="reg_password" name='password'  type='password' />
              {(passwordDirty && passwordError) && <div style={{color:'#EF3125', fontSize:'10px'}}>{passwordError}</div>}

              

              <div className='pass_must'>
                  <div className='must_title'>Пароль должен:</div>
                  
                  {/* <div >
                      <div className='visualBtn' 
                      style={{position:"relative",
                        width: "10px",
                        height: "10px",
                        border: "1px solid black",
                        borderRadius: "50%"}}>
                      <svg style={{width:"10px", height:"10px", position:"absolute"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                          <path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/>
                  <path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/>
                  </svg>
                  </div >содержать не менее 8 и не более 14 символов;</div> */}
                  <div className='must_text' style={{color:colorType}}><input  type='radio'/>содержать не менее 8 и не более 14 символов;</div>
                  <div className='must_text' style={{color:colorLatin}}><input  type='radio'/>состоять из букв латинского алфавита (aA-zZ);</div>
                  <div className='must_text' style={{color:colorNumber}}><input  type='radio'/>содержать не менее одной арабской цифры (0-9);</div>
                  <div className='must_text' style={{color:colorSpecial}}><input  type='radio'/>содержать один из спецсимволов [!] [@] [#] [$] [%] [^] [&] [*];</div>
                  <div className='must_text' style={{color:colorLower}}><input  type='radio'/>не менее одной латинской буквы в нижнем регистре;</div>
                  <div className='must_text' style={{color:colorUpper}}><input  type='radio'/>не менее одной латинской буквы в верхнем регистре.</div>

              </div>
              
              <div className='rules'>
                  <div>Продолжая, я подтверждаю, что я ознакомился с </div>
                  <div><a href='#'>Правилами пользования сервисом</a>, <a href='#'>Политикой конфидитенциальности</a></div>
              </div>
              
              </div>



          



              <button disabled={!formValid} onClick={() => dispatch(registration(email,password))} className='registr_btn'>Продолжить</button>


    

    


            </div>
          

         

       
        </div>
    )                                                       
}




