import { isArrayLiteralExpression, isTemplateSpan } from "typescript";
import quest from "./questions.json";

// ÉLÉMENTS POUR START LE QUIZ

// CONST POUR AFFICHER SUR HTML
const question : HTMLElement= document.getElementById("questions")
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
function quizT() {
  // ALÉATOIRE QUESTIONS ET RÉPONSES
  quest.questionsTelevision.splice(index, 1)
  shuffleArray(quest.questionsTelevision[index].reponses)
    
  // QUESTIONS
  const questionAffiche : HTMLElement = document.getElementById("questionTelevision")
  questionAffiche.innerHTML = quest.questionsTelevision[index].question
  
  // REPONSES
  const a_text : HTMLElement = document.getElementById("a_textT")
  a_text.innerHTML =
  quest.questionsTelevision[index].reponses[0]
  
  const b_text : HTMLElement = document.getElementById("b_textT")
  b_text.innerHTML =
  quest.questionsTelevision[index].reponses[1]
  
  const c_text : HTMLElement = document.getElementById("c_textT")
  c_text.innerHTML =
  quest.questionsTelevision[index].reponses[2]
  
  const d_text : HTMLElement = document.getElementById("d_textT")
  d_text.innerHTML =
  quest.questionsTelevision[index].reponses[3]
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

shuffleArray(quest.questionsTelevision)

// ÉLÉMENTS POUR LES RÉPONSES

  // BOUTON POUR VÉRIFICATION DES RÉPONSES
let verifT : HTMLInputElement = document.getElementById("verificationT")
verifT.addEventListener("click", reponseT)
    
  // CONST POUR APPELER HTML
const a : HTMLInputElement = document.getElementById("a")
const b : HTMLInputElement = document.getElementById("b")
const c : HTMLInputElement = document.getElementById("c")
const d : HTMLInputElement = document.getElementById("d")
const indicateurT : HTMLElement = document.getElementById("indicateurT")


  // ELEMENT CLICK POSSIBLE 1 FOIS POUR LA VERIFICATION
let nbClickVerif : number = 0
let nbClickVerifmax : number = 1
function ClickVerif() {
  nbClickVerif++
  if (nbClickVerif >= nbClickVerifmax) {
    verifT.disabled = true
    verifT.classList.add("hide")
  }
}


  // SCORE : VARIABLES + AFFICHAGE
let score = 0
let scoreAff : HTMLElement = document.getElementById("scoreT")
    

  // FONCTION QUI PERMET DE SÉLÉECTIONNER LES REPONSES ET LES VÉRIFIER
function reponseT() {
  if ((a.checked && quest.questionsTelevision[index].reponses[0]) === quest.questionsTelevision[index].correctRep[index]) {
    score++
    indicateurT.innerHTML = "Bonne réponse"
    indicateurT.classList.add("correct")
  } else if ((b.checked && quest.questionsTelevision[index].reponses[1]) === quest.questionsTelevision[index].correctRep[index]) {
    score++
    indicateurT.innerHTML = "Bonne réponse"
    indicateurT.classList.add("correct")
  } else if ((c.checked && quest.questionsTelevision[index].reponses[2]) === quest.questionsTelevision[index].correctRep[index]) {
    score++
    indicateurT.innerHTML = "Bonne réponse"
    indicateurT.classList.add("correct")
  } else if ((d.checked && quest.questionsTelevision[index].reponses[3]) === quest.questionsTelevision[index].correctRep[index]) {
    score++
    indicateurT.innerHTML = "Bonne réponse"
    indicateurT.classList.add("correct")
  } else {
    indicateurT.innerHTML = "Mauvaise réponse"
    indicateurT.classList.add("incorrect")
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
  if (i === quest.questionsTelevision.length){
    boutonT.classList.add("hide")
    question.classList.add("hide")
    restartBtn.classList.remove("hide")
  }
}

// BOUTON POUR PASSER A LA PROCHAINE QUESTION
let boutonT : HTMLElement = document.getElementById("nextT")
boutonT.addEventListener("click", updateBoutonT)

  // PROCHAINE QUESTION
function updateBoutonT() {
  quizT()
  decocher()
  // Éléments pour réinitialiser
  verifT.disabled = false
  verifT.classList.remove("hide")
  indicateurT.innerHTML = "Veuillez sélectionner une réponse"
  indicateurT.classList.remove("correct")
  indicateurT.classList.remove("incorrect")
  finQuiz()
}

updateBoutonT()

// BOUTON POUR RESTART LE QUIZ
const restartBtn = document.getElementById("restart")
const relance : HTMLElement = document.getElementById("btn-restart")
relance.addEventListener("click", restart)

  // RESTART
function restart(){
  location.reload()
}


