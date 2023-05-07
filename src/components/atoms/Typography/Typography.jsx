import s from './Typography.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Typography = ({ children, className = '', component: Component = 'h1' }) => {
  const rootClassName = cn(s.root, className)
  return <Component className={rootClassName}>{children}</Component>
}
export default Typography

Typography.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  component: PropTypes.element,
}
