ingredientList = () =>{
let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
let arr = []
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            for (i = 0; i < 100; i++) {
                let img = document.createElement('img'); 
                let imgLink = document.createElement('a');
                let name = document.createElement('p');
                let div = document.createElement('div');
                name.innerHTML = Object.values(data.drinks[i])
                div.className = 'ingredient'

                img.src =  'https://www.thecocktaildb.com/images/ingredients/' + Object.values(data.drinks[i]).toString().replace(' ', '%20')+ '.png';
                imgLink.href = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + Object.values(data.drinks[i]).toString().replace(' ', '%20')
                imgLink.target = '_blank'
                document.getElementById('byIng').appendChild(div).appendChild(imgLink).appendChild(img);
                document.getElementById('byIng').appendChild(div).appendChild(imgLink).appendChild(name)
        }
    })
        .catch(function (error) {
            console.log(error);
        })
console.log(arr)
}

window.onload = ingredientList()