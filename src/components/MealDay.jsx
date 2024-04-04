import React, { useEffect, useState } from 'react'
import '../styles/mealDay.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MealDay = () => {
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/random.php'
        )
        setResult(response.data.meals[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <div className="mealDay">
        <div className="container">
          <div className="mealDay__info">
            <h2 className="mealDay__text">Meal of the Day</h2>
            <Link to={`/details/${result.idMeal}`} className="mealDay__name">
              {result.strMeal}
            </Link>
            <p className="mealDay__category">
              {result.strArea} <span>{result.strCategory}</span>
            </p>
          </div>
          <div className="mealDay__image">
            <img src={result.strMealThumb} alt="mealImage" />
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
