import React from 'react'
import '../styles/mealDay.css'
import Header from './Header'

const MealDay = () => {
  return (
    <>
      <Header />
      <div className="mealDay">
        <div className="container">
          <div className="mealDay__info">
            <h2 className="mealDay__text">Meal of the Day</h2>
            <a href="#">Smoked Haddock Kedgeree</a>
            <p className="mealDay__category">Breakfast | Indian</p>
          </div>
          <div className="mealDay__image">
            <img src="" alt="mealImage" />
          </div>
          <div className="search__block">
            <h2 className="search__text">Find your Meal</h2>
            <div className="cearch__bar">
              <form>
                <input type="text"></input>
                <input type="submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealDay
