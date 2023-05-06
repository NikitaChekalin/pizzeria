import s from './Filter.module.scss'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useState } from 'react'

const Filter = ({ filters = [], label = '' }) => {
  const [filter, setFilter] = useState(filters[0].type)

  return (
    <ul className={s.root}>
      {filters &&
        filters.map(({ type }) => (
          <li
            key={type}
            className={cn(s.filter, {
              [[s.active]]: filter === type ? true : false,
            })}
            onClick={() => setFilter(type)}
          >
            {type} {label && label}
          </li>
        ))}
    </ul>
  )
}

export default Filter

Filter.propTypes = {
  filters: PropTypes.arrayOf(Object),
  active: PropTypes.bool,
  label: PropTypes.string,
}
