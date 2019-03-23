/**
 * Created by Deegha on 23/03/2019
 */

import { LoginPageView } from '../views/loginPageView/loginPageView'

class Login extends React.Component {

  state = { 
    width: 0, 
    height: 0 ,
    email: '',
    password: '',
    validForm: false
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  onChange = (feild, value) => this.setState({
    [feild]: value
  },this.validateForm)

  validateForm = () => {
    const { email, password } = this.state
    if( email !== "" && password !== "" ) {
      this.setState({validForm: true})
    }else {
      this.setState({validForm: false})
    }

  }

  render () {
    return (
      <LoginPageView {...this.state} onChange={this.onChange}/>
    )
  }
}

export default Login