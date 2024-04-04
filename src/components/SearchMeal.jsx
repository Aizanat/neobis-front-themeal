import React from 'react'
// import '../styles/searchMeal/css'
import { Link } from 'react-router-dom'

const SearchMeal = ({ search }) => {
  return (
    <Link to={`/details/${search.idMeal}`}>
      <div className="mealList">
        <img src={search.strMealThumb} alt="meal"></img>
        <div className="mealList__info">
          <h3 className="mealList__name">{search.strMeal}</h3>
          <p className="mealList__category">
            {search.strCategory} | {search.strArea}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default SearchMeal
