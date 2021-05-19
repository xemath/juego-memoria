document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [
        {
            name:'fries',
            img:'imagenes/fries.png'
        },
        {
            name:'fries',
            img:'imagenes/fries.png'
        },
        {
            name:'cheeseburger',
            img:'imagenes/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'imagenes/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'imagenes/hotdog.png'
        },
        {
            name:'hotdog',
            img:'imagenes/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'imagenes/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'imagenes/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'imagenes/milkshake.png'
        },
        {
            name:'milkshake',
            img:'imagenes/milkshake.png'
        },
        {
            name:'pizza',
            img:'imagenes/pizza.png'
        },
        {
            name:'pizza',
            img:'imagenes/pizza.png'
        }
    ]

    cardArray.sort(()=> 0.5 - Math.random())
    console.log(Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    function createBoard(){
        for (let i=0; i<cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'imagenes/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);

        }
    }
    function checkForMatch(){
       var cards = document.querySelectorAll('img');
       var text = document.querySelector('#texto');
       const optionOneId = cardsChosenId[0];
       const optionTwoId = cardsChosenId[1];
       if(cardsChosen[0] === cardsChosen[1]){
            text.innerHTML = 'Encontraste una carta';
            //alert('you found a match');
            cards[optionOneId].setAttribute('src', 'imagenes/white.png');
            cards[optionTwoId].setAttribute('src', 'imagenes/white.png');
            cardsWon.push(cardsChosen);
       }else{
           cards[optionOneId].setAttribute('src','imagenes/blank.png');
           cards[optionTwoId].setAttribute('src','imagenes/blank.png');
           text.innerHTML = 'Sorry intentalo nuevamente';
           //alert('sorry intentalo nuevamente');

       }
       cardsChosen = []
       cardsChosenId = []
       resultDisplay.textContent = cardsWon.length;
       if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Felicitaciones las encostraste todas'
       }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

    console.log(cardArray[0].name);
})


