
import { ContactUsPageView } from '../views/contactUsPageView/contactUsPageView'

const config = {
  cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
  formUrl: 'https://docs.google.com/forms/d/e/1gktshv9AH-Y6n47SLK-q0VKt3Gh_FBOvVAWaDv-5YYI//formResponse' 
};

const GOOGLE_FORM_NAME_ID = 'entry.1256200638'
const GOOGLE_FORM_EMAIL_ID = 'entry.502970920'
const GOOGLE_FORM_MESSAEGE_ID = 'entry.1910208166'
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdj18QPh_b1URAqdDRMZSMQHC27-Qs1hHlcucH-NPqQdxQJvA/formResponse'

export default class ContactUs extends React.Component {

  state = {
      name: "",
      email: "",
      message: "",
      validForm: false
  }

  doSubmit = () => {
    const {name, email, message} = this.state
    if(name !== '' && email !== '' && message === '') {
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
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }


  render() {

    return(
      <ContactUsPageView 
      {...this.state}
      dosubmit={this.doSubmit}
      handlechange={this.handleChange} />
    )
  }
}