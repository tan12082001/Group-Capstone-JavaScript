const getDish = async () => {
  const feedback = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=British');
  const display = await feedback.json();
  return display.dishes;
};

export default getDish;