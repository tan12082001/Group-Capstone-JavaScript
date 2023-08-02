const displayPopup = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  const content = data.meals[0];
  const popupcontainer = document.querySelector('.popup-container');
  const pops = document.querySelector('.popups');
  pops.classList.toggle('no');
  const ingredientsArray = [];
  const measuresArray = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredient = content[`strIngredient${i}`];
    const measure = content[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientsArray.push(ingredient);
      measuresArray.push(measure);
    } else {
      break;
    }
  }
  let tableHTML = '<table>';
  for (let i = 0; i < ingredientsArray.length; i += 1) {
    tableHTML += `
          <tr class='table-row'>
            <td class='table-col'>${ingredientsArray[i]}</td>
            <td class='table-col'>${measuresArray[i]}</td>
          </tr>
        `;
  }
  tableHTML += '</table>';
  popupcontainer.innerHTML = `
      <h2 class='popup-title'>${content.strMeal}</h2>
      <img class='popup-img' src='${content.strMealThumb}'>
      <div class='for-background'>
        <ul class='recipe-info'>
        <li class='recipe-area'><h3>Area: </h3><span>${content.strArea}</span></li>
        <li class='recipe-catogery'><h3>Category: </h3><span>${content.strCategory}</span></li>
        <li class='recipe-tags'><h3>Tags: </h3><span>${content.strTags}</span></li>
        <li class='recipe-ingredients'>
            <h3>Ingredients:</h3>
            ${tableHTML}
        </li>
        <li class='recipe-instructions'><h3>Recipe to make</h3>${content.strInstructions}</li>
        </ul>
        <div class='comments-section'>
        <h3>Comments (<span class='comments-count'></span>)</h3>
        <div class='comment-display'></div>
        </div>
        <div class='comments-form'>
        <form class='add-comment'>
        <label for='user'></label>
        <input class='input' type='text' id='user' placeholder='Your Name' required>
        <label for='commen'></label>
        <input class='input' type='text' id='commen' placeholder='Comment' required>
        <button class='recipe-popup' id='${id}' type='button'>Comment</button>
        </form>
        </div>
      </div>
    `;
};
export default displayPopup;