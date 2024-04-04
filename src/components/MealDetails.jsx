import React from 'react'
import '../styles/mealDetails.css'
import Header from './Header'

const MealDetails = () => {
  return (
    <>
      <Header />
      <div className="meal__details">
        <div className="mealDetails__info">
          <div className="mealDetails__text">
            <h2 className="mealDetails__name">Smoked Haddock Kedgeree</h2>
            <p className="mealDetails__category">Breakfast | Indian</p>
            <div className="mealDetails__ingredients">
              - Butter 50g - Onion 1 chopped - Cardamom 3 Pods - Turmeric 1/4
              tsp - Cinnamon Stick 1 small - Bay Leaf Sprigs of fresh - Basmati
              Rice 450g - Chicken Stock 1 Litre - Smoked Haddock 750g - Eggs 3 -
              Parsley 3 tblsp chopped - Lemon 1 chopped
            </div>
          </div>
          <div className="mealDetails__image">
            <img alt="meal"></img>
          </div>
        </div>
        <div className="mealDetails__instruction">
          <h2 className="mealDetails-instruction__name">Instruction</h2>
          <p className="mealDetails-instruction__text">
            Melt 50g butter in a large saucepan (about 20cm across), add 1
            finely chopped medium onion and cook gently over a medium heat for 5
            minutes, until softened but not browned. Stir in 3 split cardamom
            pods, ¼ tsp turmeric, 1 small cinnamon stick and 2 bay leaves, then
            cook for 1 minute. Tip in 450g basmati rice and stir until it is all
            well coated in the spicy butter. Pour in 1 litre chicken or fish
            stock, add ½ teaspoon salt and bring to the boil, stir once to
            release any rice from the bottom of the pan. Cover with a
            close-fitting lid, reduce the heat to low and leave to cook very
            gently for 12 minutes. Meanwhile, bring some water to the boil in a
            large shallow pan. Add 750g un-dyed smoked haddock fillet and simmer
            for 4 minutes, until the fish is just cooked. Lift it out onto a
            plate and leave until cool enough to handle. Hard-boil 3 eggs for 8
            minutes. Flake the fish, discarding any skin and bones. Drain the
            eggs, cool slightly, then peel and chop. Uncover the rice and remove
            the bay leaves, cinnamon stick and cardamom pods if you wish to.
            Gently fork in the fish and the chopped eggs, cover again and return
            to the heat for 2-3 minutes, or until the fish has heated through.
            Gently stir in almost all the 3 tbsp chopped fresh parsley, and
            season with a little salt and black pepper to taste. Serve scattered
            with the remaining parsley and garnished with 1 lemon, cut into
            wedges.
          </p>
        </div>
        <a className="mealDetails-instruction__video" href="#">
          Watch on Youtube
        </a>
      </div>
    </>
  )
}

export default MealDetails
