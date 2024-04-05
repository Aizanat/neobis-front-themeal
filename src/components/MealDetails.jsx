import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/mealDetails.css'
import Header from './Header'
import axios from 'axios'

const MealDetails = ({ mealNumber }) => {
  const [mealDetails, setMealDetails] = useState([])
  const { id } = useParams()
  const mealInfo = {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        setMealDetails(response.data.meals[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  let entries = Object.entries(mealDetails)
  entries.forEach((entry, index) => {
    let i = index + 1
    if (mealDetails[`strIngredient${i}`]) {
      mealInfo[mealDetails[`strIngredient${i}`]] = mealDetails[`strMeasure${i}`]
    }
  })

  return (
    <>
      <Header />
      <div className="meal__details">
        <div className="mealDetails__info">
          <div className="mealDetails__text">
            <h2 className="mealDetails__name">{mealDetails.strMeal}</h2>
            <p className="mealDetails__category">
              {mealDetails.strCategory} | {mealDetails.strArea}
            </p>
            <div className="mealDetails__ingredients">
              {Object.entries(mealInfo).map(([ingredient, measure], index) => {
                console.log(index + ingredient + measure)
                return (
                  <p key={index}>
                    {ingredient}
                    {'  '}
                    <strong>
                      {'  '}
                      {measure}
                    </strong>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="mealDetails__image">
            <img src={mealDetails.strMealThumb} alt="meal"></img>
          </div>
        </div>
        <div className="mealDetails__instruction">
          <h2 className="mealDetails-instruction__name">Instruction</h2>
          <p className="mealDetails-instruction__text">
            {mealDetails.strInstructions}
          </p>
        </div>
        <a
          className="mealDetails-instruction__video"
          target="_blank"
          href={mealDetails.strYoutube}
        >
          Watch on Youtube
        </a>
      </div>
    </>
  )
}

export default MealDetails
