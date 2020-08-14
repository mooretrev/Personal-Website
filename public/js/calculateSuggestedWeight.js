import {getPromise} from './api_call.js'

export const calculateSuggestedWeight = async(mainLift, percentage) =>{
    var maxes = await getPromise('/current_maxes')   
    var max = maxes[mainLift]
    var res = max * percentage / 100
    // console.log(res)
    return res
}