drinkSearch = () =>{
    console.log('hi')
    let drinkInput = document.getElementById('drinkInput').value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkInput;
    alert('hi')
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                document.getElementById('strDrink').innerHTML = Object.values(data.drinks[1])
                document.getElementById('strCategory').innerHTML = Object.values(data.drinks[10])
                document.getElementById('strIBA').innerHTML = Object.values(data.drinks[11])
                document.getElementById('strGlass').innerHTML = Object.values(data.drinks[13])
                document.getElementById('strInstructions').innerHTML = Object.values(data.drinks[14])
                document.getElementById('strDrinkThumb').src = Object.values(data.drinks[20])
                for(i=21; i<36; i++){
                    if(Object.values(data.drinks[i] != null)){
                        let newIngredient = document.createElement('li')
                        let newIngredientName = document.createElement('p')
                        newIngredientName = Object.values(data.drinks[i])
                        document.getElementById('ingredientsList').appendChild(newIngredient).appendChild(newIngredientName)
                        for(i=36; i < 51; i++){
                            if(Object.values(data.drinks[i] != null)){
                                let newIngredientQuantity = document.createElement('p')
                                newIngredientQuantity = Object.values(data.drinks[i])
                                document.getElementById('ingredientsList').appendChild(newIngredient).appendChild(newIngredientQuantity)
                            }
                        }
                    }
                }
        })
            .catch(function (error) {
                console.log(error);
            })
    }


// Modal display

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

