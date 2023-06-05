document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'Fries',
        img: 'Images/Fries.jpg'
      },
      {
        name: 'Burger',
        img: 'Images/Burger.jpg'
      },
      {
        name: 'IceCream',
        img: 'Images/IceCream.jpg'
      },
      {
        name: 'Pizza',
        img: 'Images/Pizza.jpg'
      },
      {
        name: 'MilkShake',
        img: 'Images/MilkShake.jpg'
      },
      {
        name: 'HotDog',
        img: 'Images/HotDog.jpg'
      },
      {
        name: 'Fries',
        img: 'Images/Fries.jpg'
      },
      {
        name: 'Burger',
        img: 'Images/Burger.jpg'
      },
      {
        name: 'IceCream',
        img: 'Images/IceCream.jpg'
      },
      {
        name: 'Pizza',
        img: 'Images/Pizza.jpg'
      },
      {
        name: 'MilkShake',
        img: 'Images/MilkShake.jpg'
      },
      {
        name: 'HotDog',
        img: 'Images/HotDog.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/Blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Images/Blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/Blank.jpg')
        alert('You have clicked the same Images!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'Images/White.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/White.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'Images/Blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/Blank.jpg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })