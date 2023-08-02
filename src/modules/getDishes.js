const getDish = async () => {
  const dishCounts = document.getElementById('mealCounts');
  const dishSection = document.getElementById('content');
  const feedback = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=British');
  const display = await feedback.json();
  dishCounts.innerHTML += ` (${display.meals.length})`;
  const appId = 'yVAEqw33gzsdx8sGwaR1'
  let likeData

  const getLikes = async () => {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        likeData = data
        console.log(likeData)

      })
      .catch(err => console.log(err))


  }
  getLikes()

  const displayData = () => {
    display.meals.forEach((element) => {

      const data = document.createElement('div')
      data.className = 'container'

      const img = document.createElement('img')
      img.src = element.strMealThumb
      data.appendChild(img)

      const datainfo = document.createElement('div')
      datainfo.className = 'mealInfo'
      data.appendChild(datainfo)

      const h3 = document.createElement('h3')
      h3.textContent = element.strMeal
      datainfo.appendChild(h3)


      const div = document.createElement('div')
      datainfo.appendChild(div)
      div.className = 'newdiv'

      const p1 = document.createElement('p')
      p1.innerHTML = '❤'
      div.appendChild(p1)

      const p = document.createElement('p')
      likeData.forEach(it => {

        if (element.idMeal === it.item_id) {
          p.innerHTML = it.likes

        }
        div.appendChild(p)

      })

      const p2 = document.createElement('p')
      p2.innerHTML = "Likes"
      div.appendChild(p2)

      const button = document.createElement('button')
      button.textContent = "comment"
      datainfo.appendChild(button)

      p1.addEventListener('click', () => {
        like(element.idMeal, p)
      })

      dishSection.appendChild(data);

    });
  }

  getLikes().then(() => {
    displayData()
  })




  const like = async (id, p) => {

    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "item_id": id })
    }).then(res => res.json())
      .then(data => console.log({ "data is ": data }))
      .catch(err => console.log(err))

    p.innerHTML = Number(p.innerHTML) + 1

    getLikes()
  }

  // yVAEqw33gzsdx8sGwaR1
  // https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVAEqw33gzsdx8sGwaR1/likes
};

export default getDish;