import { isArrayLiteralExpression, isTemplateSpan } from "typescript";
import quest from "./questions.json";


// ÉLÉMENTS POUR START LE QUIZ

  // CONST POUR AFFICHER SUR HTML
const question : HTMLElement = document.getElementById("questions")
const text : HTMLElement = document.getElementById("text-theme-animaux")
const startBtn : HTMLElement = document.getElementById("btn-start")
startBtn.addEventListener("click", startGame)

  // FONCTION POUR BOUTON START
function startGame() {
  startBtn.classList.add("hide")
  text.classList.add("hide")
  question.classList.remove("hide")
}

// QUIZ CULTURE

// AFFICHAGE QUESTIONS ET RÉPONSES
let index : number = 0
function quizC() {
    // ALÉATOIRE QUESTIONS ET RÉPONSES
    quest.questionsCulture.splice(index, 1)
    shuffleArray(quest.questionsCulture[index].reponses)
    
    // QUESTIONS
    const questionAffiche : HTMLElement = document.getElementById("questionCulture")
    questionAffiche.innerHTML = quest.questionsCulture[index].question
  
    // REPONSES
    const a_text : HTMLElement = document.getElementById("a_textC")
    a_text.innerHTML =
    quest.questionsCulture[index].reponses[0]
  
    const b_text : HTMLElement = document.getElementById("b_textC")
    b_text.innerHTML =
    quest.questionsCulture[index].reponses[1]
  
    const c_text : HTMLElement = document.getElementById("c_textC")
    c_text.innerHTML =
    quest.questionsCulture[index].reponses[2]
  
    const d_text : HTMLElement = document.getElementById("d_textC")
    d_text.innerHTML =
    quest.questionsCulture[index].reponses[3]
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

shuffleArray(quest.questionsCulture)

// ÉLÉMENTS POUR LES RÉPONSES

  // BOUTON POUR VÉRIFICATION DES RÉPONSES
let verifC : HTMLInputElement = document.getElementById("verification")
verifC.addEventListener("click", reponseC)
    
  // CONST POUR APPELER HTML
const a : HTMLInputElement = document.getElementById("a")
const b : HTMLInputElement = document.getElementById("b")
const c : HTMLInputElement = document.getElementById("c")
const d : HTMLInputElement = document.getElementById("d")
const indicateurC : HTMLElement = document.getElementById("indicateur")


// ELEMENT CLICK POSSIBLE 1 FOIS POUR LA VERIFICATION
let nbClickVerif : number = 0
let nbClickVerifmax : number = 1
function ClickVerif() {
  nbClickVerif++
  if (nbClickVerif >= nbClickVerifmax) {
    verifC.disabled = true
    verifC.classList.add("hide")
  }
}
    
  // SCORE : VARIABLES + AFFICHAGE
let score = 0
let scoreAff : HTMLElement = document.getElementById("score")
    
  // FONCTION QUI PERMET DE SÉLÉECTIONNER LES REPONSES ET LES VÉRIFIER
function reponseC() {
  if ((a.checked && quest.questionsCulture[index].reponses[0]) === quest.questionsCulture[index].correctRep) {
    score++
    indicateurC.innerHTML = "Bonne réponse"
    indicateurC.classList.add("correct")
  } else if ((b.checked && quest.questionsCulture[index].reponses[1]) === quest.questionsCulture[index].correctRep) {
    score++
    indicateurC.innerHTML = "Bonne réponse"
    indicateurC.classList.add("correct")
  } else if ((c.checked && quest.questionsCulture[index].reponses[2]) === quest.questionsCulture[index].correctRep) {
    score++
    indicateurC.innerHTML = "Bonne réponse"
    indicateurC.classList.add("correct")
  } else if ((d.checked  && quest.questionsCulture[index].reponses[3]) === quest.questionsCulture[index].correctRep) {
    score++
    indicateurC.innerHTML = "Bonne réponse"
    indicateurC.classList.add("correct")
  } else {
    indicateurC.innerHTML = "Mauvaise réponse"
    indicateurC.classList.add("incorrect")
  }
  ClickVerif()
  scoreAff.innerHTML = "Score = " + score + " /8"
    
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
  if (i === quest.questionsCulture.length){
    boutonC.classList.add("hide")
    question.classList.add("hide")
    restartBtn.classList.remove("hide")
  }
}

// BOUTON POUR PASSER A LA PROCHAINE QUESTION
let boutonC : HTMLElement = document.getElementById("next")
boutonC.addEventListener("click", updateBoutonC)



  // PROCHAINE QUESTION
function updateBoutonC() {
  quizC()
  decocher()
  // Éléments pour réinitialiser
  verifC.disabled = false
  verifC.classList.remove("hide")
  indicateurC.innerHTML = "Veuillez sélectionner une réponse"
  indicateurC.classList.remove("correct")
  indicateurC.classList.remove("incorrect")
  finQuiz()
}

updateBoutonC()

// BOUTON POUR RESTART LE QUIZ
const restartBtn : HTMLElement = document.getElementById("restart")
const relance : HTMLElement = document.getElementById("btn-restart")
relance.addEventListener("click", restart)

  // RESTART
function restart(){
location.reload()
}