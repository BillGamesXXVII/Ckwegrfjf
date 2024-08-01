const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
  {
    correct: 2,
    option: ['Рио-де-Жанейро', 'Мумбай', 'Токио'],
    quiz: ['Самый густонаселенный город'],
  },
  {
    correct: 2,
    option: ['Франция', 'Исландия', 'Швейцария'],
    quiz: ['В какой стране самый старый в мире парламент'],
  },
  {
    correct: 2,
    option: ['Эскимосы', 'Цыгане', 'Индусы'],
    quiz: ['Какой народ живёт в кибитках?'],
  },
  {
    correct: 1,
    option: ['193', '269', '85'],
    quiz: ['Сколько в мире независимых государств?'],
  },
  {
    correct: 2,
    option: ['Россия', 'Канада', 'Финляндия'],
    quiz: ['В какой стране больше всего озёр?'],
  },
  {
	  correct: 3,
	  option: ['Платина', 'Серебро', 'Золото'],
	  quiz: ['Какой металл в абсолютно чистом виде можно мять руками?'],
  },
]

let clicked = []
let score = 0

scoreDisplay.textContent = score


function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')

    const logoDisplay = document.createElement('h1')
    logoDisplay.textContent = '🦉'
    questionBox.append(logoDisplay)

    question.quiz.forEach((tip) => {
      const tipText = document.createElement('p')
      tipText.textContent = tip
      questionBox.append(tipText)
    })

    const questionButtons = document.createElement('div')
    questionButtons.classList.add('question-buttons')
    questionBox.append(questionButtons)

    question.option.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button')
      questionButton.classList.add('question-button')
      questionButton.textContent = option
      questionButton.addEventListener('click', () =>
        checkAnswer(
          questionBox,
          questionButton,
          option,
          optionIndex + 1,
          question.correct
        )
      )
      questionButtons.append(questionButton)
    })
    const answerDisplay = document.createElement('div')
    answerDisplay.classList.add('answer-display')

    questionBox.append(answerDisplay)
    questionDisplay.append(questionBox)
  })
}

populateQuestions()

function checkAnswer(
  questionBox,
  questionButton,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex === correctAnswer) {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, 'Верно!', 'correct')
  } else {
    score--
    scoreDisplay.textContent = score
    addResult(questionBox, 'Не верно!', 'wrong')
  }
  clicked.push(option)
  questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
}