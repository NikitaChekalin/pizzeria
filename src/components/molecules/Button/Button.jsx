import s from './Button.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = ({
  count = 0,
  size = 'medium',
  type = 'primary',
  variant = 'filled',
  loading = false,
  disabled = false,
  children,
}) => {
  const rootClassName = cn(s.root, {
    [s[size]]: size,
    [s[type]]: type,
    [s[variant]]: variant,
    [s.loading]: loading,
    [s.disabled]: disabled,
  })

  return (
    <div disabled={disabled} data-counter={count} className={rootClassName} loading={loading}>
      <span className={s.label}>{children}</span>
    </div>
  )
}

export default Button

Button.propTypes = {
  count: PropTypes.number,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
}
