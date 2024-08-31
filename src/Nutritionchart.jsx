import React, { useState } from 'react';
import './Nutrition.css';
//import InputFields from './inputFields';
//import Meter from './Meter';


function Nutritionchart(props) {
  const [weight, setWeight] = useState(props.weight);
  const [height, setHeight] = useState(props.height);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    return bmiValue.toFixed(2)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue) && weightValue > 0 && heightValue > 0) {
      const calculatedBmi = calculateBMI(weightValue, heightValue);
      setBmi(calculatedBmi);
      setCategory(getBMICategory(calculatedBmi));
    } else {
      setBmi('Invalid input');
      setCategory('');
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="App">
    {/* <h1>your weight is {props.weight}</h1> */}
      <h1> Nutrition Chart</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Weight (kg):
            <input
              type="number"
              value={props.weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Check Nutrition With BMI</button>
      </form>
      {bmi && (
        <div className="result">
          <h2>BMI: {bmi}</h2>
          <h2>Category: {category}</h2>
        </div>
      )}
      {category && <NutritionChart category={category} />}
    </div>
  );
}

function NutritionChart({ category }) {
  const getMeals = (category) => {
    switch (category) {
      case 'Underweight':
        return {
          breakfast: 'Whole grain cereal,whole grain bread ,Dried fruits with milk, banana, and nuts',
          lunch: 'Rice , avocado salad,cheese,milk-based smoothies',
          dinner: 'Shakes , brown rice and steamed vegetables'
        };
      case 'Normal weight':
        return {
          breakfast: 'Oatmeal with fruits and nuts , berries , Breads',
          lunch: 'salad with mixed greens and a vinaigrette , Vegetables',
          dinner: 'Grilled fish with vegetables and sweet potatoes , Grains'
        };
      case 'Overweight':
        return {
          breakfast: 'Greek yogurt with berries and a sprinkle of granola , Whole grains (whole wheat, steel cut oats, brown rice, quinoa)',
          lunch: 'Turkey sandwich on whole grain bread with a side salad , Vegetables (a colorful variety-not potatoes)',
          dinner: 'Stir-fried tofu with vegetables and brown rice , Whole fruits (not fruit juices)'
        };
      case 'Obesity':
        return {
          breakfast: 'Smoothie with spinach, banana, and almond milk',
          lunch: 'Vegetable soup with a side of whole grain bread',
          dinner: 'steamed broccoli , Choose minimally processed , whole foods-whole grains , vegetables , fruits , nuts, healthful sources of protein '
        };
      default:
        return {
          breakfast: '',
          lunch: '',
          dinner: ''
        };
    }
  };

  const meals = getMeals(category);

  return (
    

    <div className="nutrition-chart">
      <h2>Nutrition Chart</h2>
      <h3>Breakfast: {meals.breakfast}</h3>
      <h3>Lunch: {meals.lunch}</h3>
      <h3>Dinner: {meals.dinner}</h3>
      </div>
  )
};

 

export default Nutritionchart;