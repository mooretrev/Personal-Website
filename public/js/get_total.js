export const get_total = (data) =>{
    var benchMax = 0;
    var squatMax = 0;
    var deadMax = 0;

    var squatData = data.Squat;
    var benchData = data.Bench;
    var deadData = data.Deadlift;

    for(var attempt in squatData){
        squatMax = determineMax(squatMax, attempt, squatData);
    }

    for(var attempt in benchData){
        benchMax = determineMax(benchMax, attempt, benchData);
    }

    for(var attempt in deadData){
        deadMax = determineMax(deadMax, attempt, deadData);
    }

    return squatMax + benchMax + deadMax;


}

const determineMax = (max, attempt, data) =>{
    if(data[attempt].Weight=="DNA"){
        return max;
    }
    if(max == 0 && data[attempt].Sucessful){
        max = data[attempt].Weight;
    }
    if(max < data[attempt].Weight && data[attempt].Sucessful){
        max = data[attempt].Weight;
    }  
    return max;
}