import Categories from './components/atoms/Categories/Categories'
import Selector from './components/atoms/Selector/Selector'
import Typography from './components/atoms/Typography/Typography'
import Button from './components/molecules/Button/Button'

import { pizzaFiltersTypes } from './constants/pizza'

import Margarita from './assets/img/Margarita.jpg'

import './styles/app.scss'

const App = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='container'>
          <div className='header__logo'>
            <div>
              <Typography component='h1'>Pizzeria</Typography>
              <Typography component='c1'>the most delicious pizza in the universe</Typography>
            </div>
          </div>
          <div className='header__cart'>
            <a href='/cart.html' className='button button--cart'>
              <span>520 usd</span>
              <div className='button__delimiter'></div>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z'
                  stroke='white'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z'
                  stroke='white'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669'
                  stroke='white'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories filters={pizzaFiltersTypes} />
            <div className='sort'>
              <div className='sort__label'>
                <b>Sort by:</b>
                <span>popular</span>
              </div>
              <div className='sort__popup hidden'>
                <ul>
                  <li className='active'>Popular</li>
                  <li>Price</li>
                  <li>Alphabet</li>
                </ul>
              </div>
            </div>
          </div>
          <Typography component='h2'>All pizzas</Typography>
          <div className='content__items'>
            <div className='pizza-block'>
              <img className='pizza-block__image' src={Margarita} alt='Pizza' />
              <Typography component='h3'>Margarita</Typography>
              <Selector />
              <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>395 usd</div>
                <Button type='primary' size='small' variant='filled' loading={false}>
                  Add
                </Button>
              </div>
            </div>
            <div className='pizza-block'>
              <img className='pizza-block__image' src={Margarita} alt='Pizza' />
              <Typography component='h3'>Margarita</Typography>

              <Selector />
              <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>395 usd</div>
                <Button type='primary' size='small' variant='filled' loading={false}>
                  Add
                </Button>
              </div>
            </div>
            <div className='pizza-block'>
              <img className='pizza-block__image' src={Margarita} alt='Pizza' />
              <Typography component='h3'>Margarita</Typography>
              <Selector />
              <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>395 usd</div>
                <Button type='primary' size='small' variant='filled' loading={false} count={5}>
                  Add
                </Button>
              </div>
            </div>
            <div className='pizza-block'>
              <img className='pizza-block__image' src={Margarita} alt='Pizza' />
              <Typography component='h3'>Margarita</Typography>
              <Selector />
              <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>395 usd</div>
                <Button type='primary' size='small' variant='filled' loading={false}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
