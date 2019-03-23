
import { Header, TextInput } from '../../components'
import css from './styles.scss'
import {APP_NAME, LOGO} from '../../config/config'

export const ContactUsPageView = ({handlechange, dosubmit, name, email, message}) => {
  return (
    <div>
      <Header
        ogImage={LOGO}
        url={`https://promo-web.deegha.now.sh/contact-us`}
        title={`${APP_NAME} | Contact us`} 
        description={`Contact us for more information`}/>

    <div className={css.container}>
      <div className={css.form}>
        <div className={css.formController}>
          <TextInput 
            value={email}
            name={'email'}
            lable={"Email"}
            type={"text"} 
            placeholder="Your email"
            onChange={handlechange}/>
        </div>

        <div className={css.formController}>
          <TextInput 
            value={name}
            name={'name'}
            lable={"Name"}
            type={"text"} 
            placeholder="your name"
            onChange={handlechange}/>
        </div>

         <div className={css.formController}>
          <TextInput 
            value={message}
            name={'message'}
            lable={"Message"}
            type={"text"} 
            placeholder="your name"
            onChange={handlechange}/>
        </div>

        <div onClick={dosubmit}> 
          send
        </div>
      </div>
    </div>
    </div>
  )
}