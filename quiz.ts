import { isArrayLiteralExpression, isLineBreak, isTemplateSpan } from "typescript";
import quest from "./questions.json";


// ÉLÉMENTS POUR START LE QUIZ

  // CONST POUR AFFICHER SUR HTML
const question : HTMLElement  = document.getElementById("questions")
const text : HTMLElement = document.getElementById("text-theme-animaux")
const startBtn : HTMLElement = document.getElementById("btn-start")
startBtn.addEventListener("click", startGame)

  // FONCTION POUR BOUTON START
function startGame() {
  startBtn.classList.add("hide")
  text.classList.add("hide")
  question.classList.remove("hide")
}


// AFFICHAGE QUESTIONS ET RÉPONSES
let index : number = 0
function quizA() {
  // ALÉATOIRE QUESTIONS ET RÉPONSES
  quest.questionsAnimaux.splice(index, 1)
  shuffleArray(quest.questionsAnimaux[index].reponses)
    
  // QUESTIONS
  const questionAffiche : HTMLElement = document.getElementById("questionAnimaux")
  questionAffiche.innerHTML = quest.questionsAnimaux[index].question
  
  // REPONSES
  const a_text : HTMLElement = document.getElementById("a_textA")
  a_text.innerHTML =
  quest.questionsAnimaux[index].reponses[0]
  
  const b_text : HTMLElement = document.getElementById("b_textA")
  b_text.innerHTML =
  quest.questionsAnimaux[index].reponses[1]
  
  const c_text : HTMLElement = document.getElementById("c_textA")
  c_text.innerHTML =
  quest.questionsAnimaux[index].reponses[2]
  
  const d_text : HTMLElement = document.getElementById("d_textA")
  d_text.innerHTML =
  quest.questionsAnimaux[index].reponses[3]
}

// FONCTIONS POUR MÉLANGER
function shuffleArray(array: string[]) : void {
  for (let i: number = array.length - 1; i > 0; i--) {
    let j: number = Math.floor(Math.random() * (i + 1));
    let temp: string = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(quest.questionsAnimaux)

// ÉLÉMENTS POUR LES RÉPONSES

  // BOUTON POUR VÉRIFICATION DES RÉPONSES
let verifA : HTMLInputElement = document.getElementById("verification")
verifA.addEventListener("click", reponseA)
    
    // CONST POUR APPELER HTML
const a : HTMLInputElement = document.getElementById("a")
const b : HTMLInputElement = document.getElementById("b")
const c : HTMLInputElement = document.getElementById("c")
const d : HTMLInputElement = document.getElementById("d")
const indicateur : HTMLElement= document.getElementById("indicateur")
  

  // ELEMENT CLICK POSSIBLE 1 FOIS POUR LA VERIFICATION
let nbClickVerif : number = 0
let nbClickVerifmax : number = 1
function ClickVerif() {
  nbClickVerif++
  if (nbClickVerif >= nbClickVerifmax) {
    verifA.disabled = true
    verifA.classList.add("hide")
  }
}

  // SCORE : VARIABLES + AFFICHAGE
let score = 0
let scoreAff : HTMLElement = document.getElementById("score")


  // FONCTION QUI PERMET DE SÉLECTIONNER LES REPONSES ET LES VÉRIFIER
function reponseA() {
  if ((a.checked && quest.questionsAnimaux[index].reponses[0]) === quest.questionsAnimaux[index].correctRep) {
    score++
    indicateur.innerHTML = "Bonne réponse"
    indicateur.classList.add("correct")
  } else if ((b.checked && quest.questionsAnimaux[index].reponses[1]) === quest.questionsAnimaux[index].correctRep) {
    score++
    indicateur.innerHTML = "Bonne réponse"
    indicateur.classList.add("correct")
  } else if ((c.checked && quest.questionsAnimaux[index].reponses[2]) === quest.questionsAnimaux[index].correctRep) {
    score++
    indicateur.innerHTML = "Bonne réponse"
    indicateur.classList.add("correct")
  } else if ((d.checked  && quest.questionsAnimaux[index].reponses[3]) === quest.questionsAnimaux[index].correctRep) {
    score++
    indicateur.innerHTML = "Bonne réponse"
    indicateur.classList.add("correct")
  } else {
    indicateur.innerHTML = "Mauvaise réponse"
    indicateur.classList.add("incorrect")
  }
  ClickVerif()
  scoreAff.innerHTML = "Score = " + score + " / 8"
    
  const final : HTMLElement = document.getElementById("fin")
  final.innerHTML = "Bravo ! Vous avez terminé le quiz. Voici votre score : " + score + " !"
}

// DECOCHER LES CHECKBOX
function decocher() {
  a.checked = false
  b.checked = false
  c.checked = false
  d.checked = false
}

// AFFICHER BOUTON RESTART
function finQuiz() {
  let i : number  = 0
  i++
  if (i === quest.questionsAnimaux.length){
    boutonA.classList.add("hide")
    question.classList.add("hide")
    restartBtn.classList.remove("hide")
  }
}

// BOUTON POUR PASSER A LA PROCHAINE QUESTION
let boutonA : HTMLElement = document.getElementById("next")
boutonA.addEventListener("click", updateBoutonA)

  // PROCHAINE QUESTION
function updateBoutonA() {
  quizA()
  decocher()
  // Éléments pour réinitialiser
  verifA.disabled = false
  verifA.classList.remove("hide")
  indicateur.innerHTML = "Veuillez sélectionner une réponse"
  indicateur.classList.remove("correct")
  indicateur.classList.remove("incorrect")
  finQuiz()
}

updateBoutonA()


// BOUTON POUR RESTART LE QUIZ
const restartBtn : HTMLElement = document.getElementById("restart")
const relance : HTMLElement = document.getElementById("btn-restart")
relance.addEventListener("click", restart)

  // RESTART
function restart(){
  location.reload()
}


