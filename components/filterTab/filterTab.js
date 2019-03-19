

import css from './styles.scss'

export const FilterTab = ({title, selected, callback, prop}) => {
  const styles = {
    backgroundColor: selected?'#ff4757':'#ced6e0'
  }

  return (
    <div onClick={callback(prop)} className={css.container} style={styles}>
      {title}
    </div>
  )
}