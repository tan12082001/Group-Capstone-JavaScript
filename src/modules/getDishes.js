const getDish = async () => {
  const dishCounts = document.getElementById('mealCounts');
  const dishSection = document.getElementById('content');
  const feedback = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=British');
  const display = await feedback.json();
  dishCounts.innerHTML += ` (${display.meals.length})`;
  display.meals.forEach((element) => {
    const data = `<div id=${element.idMeal} class="container">
        <img src=${element.strMealThumb} alt="image" />
        <div class="mealInfo" >
          <h3>${element.strMeal}</h3>
          <p>Like 201</p>
          <button>Comment</button>
        </div>
    </div>`;
    dishSection.innerHTML += data;
  });
};

export default getDish;