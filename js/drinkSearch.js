drinkSearch = () =>{
    let drinkInput = document.getElementById('drinkInput').value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkInput;
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                document.getElementById('strDrink').innerHTML = data.drinks[0].strDrink;
                document.getElementById('strCategory').innerHTML = data.drinks[0].strCategory;
                document.getElementById('strIBA').innerHTML = data.drinks[0].strIBA
                document.getElementById('strGlass').innerHTML = data.drinks[0].strGlass
                document.getElementById('strInstructions').innerHTML = data.drinks[0].strInstructions.replace(/\./g, '<br><br>')
                document.getElementById('strDrinkThumb').src = data.drinks[0].strDrinkThumb

                document.getElementById('strIngredient1').innerHTML = data.drinks[0].strIngredient1
                document.getElementById('strMeasure1').innerHTML = data.drinks[0].strMeasure1
                

                document.getElementById('strIngredient2').innerHTML = data.drinks[0].strIngredient2
                document.getElementById('strMeasure2').innerHTML = data.drinks[0].strMeasure2

                document.getElementById('strIngredient3').innerHTML = data.drinks[0].strIngredient3 
                document.getElementById('strMeasure3').innerHTML = data.drinks[0].strMeasure3

                document.getElementById('strIngredient4').innerHTML = data.drinks[0].strIngredient4
                document.getElementById('strMeasure4').innerHTML = data.drinks[0].strMeasure4

                document.getElementById('strIngredient5').innerHTML = data.drinks[0].strIngredient5
                document.getElementById('strMeasure5').innerHTML = data.drinks[0].strMeasure5

                document.getElementById('strIngredient6').innerHTML = data.drinks[0].strIngredient6
                document.getElementById('strMeasure6').innerHTML = data.drinks[0].strMeasure6

                document.getElementById('strIngredient7').innerHTML = data.drinks[0].strIngredient7
                document.getElementById('strMeasure7').innerHTML = data.drinks[0].strMeasure7

                document.getElementById('strIngredient8').innerHTML = data.drinks[0].strIngredient8
                document.getElementById('strMeasure8').innerHTML = data.drinks[0].strMeasure8

                document.getElementById('strIngredient9').innerHTML = data.drinks[0].strIngredient9
                document.getElementById('strMeasure9').innerHTML = data.drinks[0].strMeasure9

                document.getElementById('strIngredient10').innerHTML = data.drinks[0].strIngredient10
                document.getElementById('strMeasure10').innerHTML = data.drinks[0].strMeasure10

                document.getElementById('strIngredient11').innerHTML = data.drinks[0].strIngredient11
                document.getElementById('strMeasure11').innerHTML = data.drinks[0].strMeasure11

                document.getElementById('strIngredient12').innerHTML = data.drinks[0].strIngredient12
                document.getElementById('strMeasure12').innerHTML = data.drinks[0].strMeasure12

                document.getElementById('strIngredient13').innerHTML = data.drinks[0].strIngredient13
                document.getElementById('strMeasure13').innerHTML = data.drinks[0].strMeasure13

                document.getElementById('strIngredient14').innerHTML = data.drinks[0].strIngredient14
                document.getElementById('strMeasure14').innerHTML = data.drinks[0].strMeasure14

                document.getElementById('strIngredient15').innerHTML = data.drinks[0].strIngredient15
                document.getElementById('strMeasure15').innerHTML = data.drinks[0].strMeasure15
                
        })
            .catch(function (error) {
                console.log(error);
            })
    }


// Modal display

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick =  function() {
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

