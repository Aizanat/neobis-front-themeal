import React, { useEffect, useState } from 'react'
import '../styles/mealDay.css'
import Header from './Header'
import SearchMeal from './SearchMeal'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MealDay = () => {
  const [result, setResult] = useState([])
  const [searchData, setSearchData] = useState([])
  const [searchMeal, setSearchMeal] = useState('')

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

  const fetchMeal = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
      )
      setSearchData(resp.data.meals)
    } catch (error) {
      console.error(error)
    }
  }

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
        </div>
        <div className="search__block">
          <h2 className="search__text">Find your Meal</h2>
          <div className="search__bar">
            <form>
              <input
                type="text"
                name="search__text"
                id="search__text"
                value={searchMeal}
                onChange={(event) => setSearchMeal(event.target.value)}
                placeholder="Find your meal"
              ></input>
              <input
                type="submit"
                onClick={fetchMeal}
                value={'search'}
                className="search__button"
              ></input>
            </form>
          </div>
        </div>
        {searchData.map((search, index) => (
          <SearchMeal search={search} key={searchData[index].idMeal} />
        ))}
      </div>
    </>
  )
}

export default MealDay
