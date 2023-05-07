import { useState } from 'react'

import s from './Categories.module.scss'
import PropTypes from 'prop-types'

import Category from '../../molecules/Category/Category'

const Categories = ({ filters = '' }) => {
  const [category, setCategory] = useState(filters[0].type)

  return (
    <div className={s.root}>
      {filters &&
        filters.map(({ type }) => (
          <Category
            key={type}
            type={type}
            onSetCategory={() => setCategory(type)}
            active={type === category ? true : false}
          />
        ))}
    </div>
  )
}

export default Categories

Categories.propTypes = {
  filters: PropTypes.arrayOf(Object),
}
