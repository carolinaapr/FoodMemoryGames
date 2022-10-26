const cardArray =[
    {
        name: 'cake',
        img:'./images/cake.jpg'
    },
    {
        name:'chicken',
        img:'./images/chicken.jpg'
    },
    {
        name:'coffee',
        img:'./images/coffee.jpg'
    },
    {
        name:'ebifurai',
        img:'./images/ebifurai.jpg'
    },
    {
        name:'eggtoast',
        img:'./images/eggtoast.jpg'
    },
    {
        name:'hamburger',
        img:'./images/hamburger.jpg'
    },
    {
        name: 'cake',
        img:'./images/cake.jpg'
    },
    {
        name:'chicken',
        img:'./images/chicken.jpg'
    },
    {
        name:'coffee',
        img:'./images/coffee.jpg'
    },
    {
        name:'ebifurai',
        img:'./images/ebifurai.jpg'
    },
    {
        name:'eggtoast',
        img:'./images/eggtoast.jpg'
    },
    {
        name:'hamburger',
        img:'./images/hamburger.jpg'
    }
]

cardArray.sort( () => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen =[]
let cardsChosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i = 0 ; i< cardArray.length; i++){
        const card =    document.createElement('img')
        card.setAttribute('src','./images/backcard.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match! ')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','./images/backcard.jpg')
        cards[optionTwoId].setAttribute('src','./images/backcard.jpg')
        alert('Yo have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You have found a match!')
        cards[optionOneId].setAttribute('src','./images/pink.png')
        cards[optionTwoId].setAttribute('src','./images/pink.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','./images/backcard.jpg')
        cards[optionTwoId].setAttribute('src','./images/backcard.jpg')
        alert('sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]
    
    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML = 'Congratulations, you have found them all!'
    } 
    
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }

}


