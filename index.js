// const introverted = 0
// const extroverted = 0

// const intuitive = 0
// const sensing = 0

// const thinking = 0
// const feeling = 0

// const judging = 0
// const perceiving = 0

export const mainDiv = document.getElementById("main-div")

export let currentQuestion = 1

import { calculatePer } from "./calculaterPersonality.js"
import { QuestionData } from "./data.js"
import { findPersonality } from "./data.js"
import { findPoint } from "./data.js"
import { handleStart } from "./handleButton.js "
import { renderStart } from "./handleButton.js"
import { renderFinal } from "./celeb.js"
export let point = [0,0,0,0,0,0,0,0,0]
const mainContainerDiv = document.getElementById("main-container")

document.addEventListener('click',function(e){
    if(e.target.classList.contains('okay')){
        mainDiv.innerHTML=renderStart()
        document.getElementById("header-div").style.display="none"
    }
    else if(e.target.classList.contains('start')){
        handleStart()
    }
    else if(e.target.classList.contains('next')){
        handleNext()
        console.log(point)
    }
    else if(e.target.classList.contains('finish')){
        handleNext()
        console.log(point)
    }
})
function handleNext(){
    if(!document.querySelector(`input[name = "${currentQuestion}option"]:checked`)){
        return
    }
    let currSelected = document.querySelectorAll(`input[name = "${currentQuestion}option"]:checked`)
    // console.log(currSelected)
    currSelected.forEach(function(curr){
        let sel = curr.value
        let currPoints = findPoint(currentQuestion,sel)
        let currPersonality = findPersonality(currentQuestion,sel)
        point[currPersonality]+=currPoints
    })
    if(currentQuestion==50)
        {
            renderModal()
            return
        }
    currentQuestion++
    render()
}
export function render(){
    let tempClass = ''
    let optional = ''
    let selectType = 'radio'

    if(currentQuestion === 50)
        tempClass = 'finish'
    else    
        tempClass = 'next'
    if(currentQuestion === 25 || currentQuestion === 7){
        if(currentQuestion===25)selectType='checkbox'
        optional = `
            <div class = "option-div">
                <input 
                    type = "${selectType}" 
                    id = "${currentQuestion}o3" 
                    name = "${currentQuestion}option"
                    value = 3
                    required
                >
                <label for="${currentQuestion}o3">
                    ${QuestionData[currentQuestion-1].option3}
                </label>
            </div>
            `
    }
    mainDiv.innerHTML=`
        <div class = "question-div">
            <span>${QuestionData[currentQuestion-1].no} : </span>
            <span>${QuestionData[currentQuestion-1].question}</span>
        </div>
        <form>
        <div class = "option-div">
            <input 
                type = "${selectType}" 
                id = "${currentQuestion}o1" 
                name = "${currentQuestion}option" 
                value = 1
                required
            >
            <label for="${currentQuestion}o1">
                ${QuestionData[currentQuestion-1].option1}
            </label>
        </div>
        <div class = "option-div">
            <input 
                type = "${selectType}"
                id = "${currentQuestion}o2"
                name = "${currentQuestion}option"
                value = 2
                required
            >
            <label for="${currentQuestion}o2">
                ${QuestionData[currentQuestion-1].option2}
            </label>
        </div>
        ${optional}
        <button type = "submit" class = "${tempClass}"}>${tempClass}</button>
        </form>
    `
}
console.log(findPoint(25,1))
console.log(findPersonality(25,1))
let personality=``
function renderModal(){

    personality = calculatePer()
    
    mainDiv.innerHTML= `
    <h1 class = "center-div">
        FINISHED , Your personality is ${personality}.
    </h1>
    `
    mainDiv.innerHTML+=`
    <img src="/loading.svg" class = "loading-svg">
    <h1 class = "center-div">
        Loading ${personality} Celebs
    </h1>
    `
    setTimeout(lastWindow,3000)
}
function lastWindow(){
    mainContainerDiv.innerHTML=renderFinal(personality)
    console.log(renderFinal(personality))
}
