
import { Header, TextInput, Button } from '../../components'
import css from './styles.scss'
import {APP_NAME, APP_LOG} from '../../config/config'

export const ContactUsPageView = ({isMobile, sent, validForm, handlechange, dosubmit, name, email, message}) => {

  const formStyles = {
    width: isMobile? '100%':'50%'
  }

  return (
    <div>
      <Header
        ogImage={APP_LOG}
        url={`https://promo-web.deegha.now.sh/contact-us`}
        title={`${APP_NAME} | Contact us`} 
        description={`Contact us for more information`}/>

    <div className={css.container}>
      <div className={css.form} style={formStyles}>
      <div className={css.formController}>
        {sent ? (
          <div className={css.thankYou}>Thank you! for contacting us, we'll get in touch with you shortly</div>
        ):<div className={css.noMessage}> We love to talk </div>}
      </div>
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
            placeholder="We love to know your name"
            onChange={handlechange}/>
        </div>

         <div className={css.formController}>
          <TextInput 
            value={message}
            name={'message'}
            lable={"Message"}
            type={"largeText"} 
            placeholder="Tell us how we can help you"
            onChange={handlechange}/>
        </div>
        <div className={css.formController}>
        <Button title={'send'} callback={dosubmit} color={'primary'} disabled={!validForm}/>
        </div>
      </div>
    </div>
    </div>
  )
}