import { render } from "./index.js"
import { point } from "./index.js"

import { mainDiv } from "./index.js"

export function handleStart(){
    const headerEL = document.getElementById("header-div")
    console.log(headerEL)
    if(!document.querySelector(`input[name = "gender"]:checked`)){
        return
    }
    point[0]=document.querySelector(`input[name = "gender"]:checked`).value
    console.log(point[0])
    render()
}
export function renderStart(){
    let str = `
        <h1>SELECT YOUR GENDER</h1>
        <div class = "option-div">
            <input id="male-input" type = "radio" name = "gender" value=1>
            <label for = "male-input">
                MALE
            </label>
        </div>
        <div class = "option-div">
            <input id = "female-input" type = "radio" name = "gender" value=0>
            <label for = "female-input">
                FEMALE
            </label>
        </div>
        <button class="start">Start</button>
`
    return str
}