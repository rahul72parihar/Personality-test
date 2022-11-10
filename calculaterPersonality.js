import { point } from "./index.js"
export function calculatePer(){
    let ans = ''
    if(point[1]>point[2])ans+='E'
    else ans+='I'
    if(point[3]>point[4])ans+='S'
    else ans+='N'
    if(point[5]>point[6])ans+='T'
    else if(point[5]<point[6])ans+='F'
    else{
        if(point[0]==1)ans+='T'
        else ans+='F'
    }
    if(point[7]>point[8])ans+='J'
    else ans+='P'
    console.log("personality -> "+point)
    console.log("ans -> "+ans)
    return ans
}