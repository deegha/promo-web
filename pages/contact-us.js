

import { connect } from 'react-redux'
import { ContactUsPageView } from '../views/contactUsPageView/contactUsPageView'
import { validateEmail } from '../services/helper'

const GOOGLE_FORM_NAME_ID = 'entry.1256200638'
const GOOGLE_FORM_EMAIL_ID = 'entry.502970920'
const GOOGLE_FORM_MESSAEGE_ID = 'entry.1910208166'
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdj18QPh_b1URAqdDRMZSMQHC27-Qs1hHlcucH-NPqQdxQJvA/formResponse'

class ContactUs extends React.Component {

  state = {
      name: "",
      email: "",
      message: "",
      validForm: false,
      sent: false
  }

  doSubmit = () => {
    const {name, email, message} = this.state
    if(name !== '' && email !== '' && message !== '') {
      this.sendMessage()
    }
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_NAME_ID, this.state.name)
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)
    formData.append(GOOGLE_FORM_MESSAEGE_ID, this.state.message)
    
    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      body: formData 
    })
    .then((res) => {
      console.log(res, 'done')
   }).catch((err) => {
       console.log(err, 'there was an error')
   })

   this.setState({
    name: "",
    email: "",
    message: "",
    validForm: false,
    false: true,
    sent:true
   })

  }

  handleChange = (name, value) =>  this.setState({
    [name]: value
  }, this.validateForm)

  validateForm = () => {
    const {name, email, message} = this.state
    if( validateEmail(email) && name !== '' && email !== '' && message !== '') {
      this.setState({validForm:true})
    }else {
      this.setState({validForm:false})
    }
  }

  render() {
    const { window: {isMobile} } = this.props
    return(
      <ContactUsPageView 
      {...this.state}
      isMobile={isMobile}
      dosubmit={this.doSubmit}
      handlechange={this.handleChange} />
    )
  }
}

const mapStateToProps = ({window}) => ({
  window
})

export default connect(mapStateToProps)(ContactUs)

