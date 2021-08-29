const searchFood = () => {
    const serchFood = document.getElementById('search-field')
    const searchText = serchFood.value;
    console.log(searchText)

    serchFood.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => DisplaySerchresult(data. meals))
}

const DisplaySerchresult = meals => {

const searchResult = document.getElementById('searchResult');
searchResult.textContent = '';
meals.forEach(meal => {
    console.log(meal)
    const div = document.createElement('div')
    div.classList.add('col')

    div.innerHTML = `
    <div  onclick= " loadMealDetel (${meal.idMeal})" class="card h-100">
    <img  style="
    width: 100% ;
    padding: 10px;
    border-radius: 10px; 
    margin: auto; "
      src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
   ${meal.strInstructions.slice(0, 100)}.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  `;

  searchResult.appendChild(div)
})
}
const loadMealDetel = async mealId => {
console.log(mealId)
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

const res = await fetch(url)
const data = await res.json()
DisplayMealDetail(data.meals[0]);

// fetch(url)
// .then(res => res.json())
// .then(data => DisplayMealDetail(data.meals[0]))

}

const DisplayMealDetail = meal => {

const mealDetails = document.getElementById('mail-detile');
mealDetails.textContent = '';
const div = document.createElement('div');
div.classList.add('card')

div.innerHTML = `
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text"> ${meal.strInstructions.slice(0, 200)}.</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
`;
mealDetails.appendChild(div);
}