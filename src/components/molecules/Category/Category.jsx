import s from './Category.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Category = ({ type = '', active = false, onSetCategory }) => {
  return (
    <li
      className={cn(s.root, {
        [[s.active]]: active,
      })}
      onClick={() => onSetCategory(type)}
    >
      {type}
    </li>
  )
}

export default Category

Category.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.string,
  onSetCategory: PropTypes.func,
}
