import s from './Selector.module.scss'
import PropTypes from 'prop-types'

import { typePizzaDough, typePizzaSize } from '../../../constants/pizza'

import Filter from '../../molecules/Filter/Filter'

const Selector = () => {
  return (
    <div className={s.root}>
      <Filter filters={typePizzaDough} />
      <Filter filters={typePizzaSize} />
    </div>
  )
}

export default Selector

Selector.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
}
