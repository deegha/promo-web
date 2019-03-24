
/**
 * Created by Deegha on 23/03/2019
 */

import css from './styles.scss'
import PropTypes from 'prop-types'

export class TextInput extends React.PureComponent {

  state={
    type: 'text'
  }

  componentDidMount(){
    this.setState({type: this.props.type})
  }

  onUpdateText = (e) => {
    const { onChange, name } = this.props
    onChange(name, e.target.value)
  }

  render() {
    const { type } = this.state 
    const { placeholder, value } = this.props

    if(type === 'largeText') {
     return(
      <div className={css.inputContainer}>
        <textarea value={value} placeholder={placeholder} onChange={this.onUpdateText} />
      </div>
     )
    }

    return(
      <div className={css.inputContainer}>
        <input 
          value={value}
          placeholder={placeholder}
          type={type} 
          onChange={this.onUpdateText}  />
      </div>
    )
  }
  
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  value:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  isRequired: PropTypes.bool
}