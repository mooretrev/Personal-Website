import {getPromise} from './api_call.js'

setResults()

var button = document.getElementById('risk_calculator_button')
button.addEventListener("click", () =>{
    var ticker = document.getElementById('ticker').value
    var stoploss = document.getElementById('stop_loss').value

    getPromise(`/risk_calculator?ticker=${ticker}&stoploss=${stoploss}`)
    .then((data) =>{
        console.log(data)
        // data = JSON.parse(data)
        var shares = Math.round(data['shares'] * 100) / 100
        var size = Math.round(data['size'] * 100) / 100
        var amountAtRisk = Math.round(data['amount at risk'] * 100) / 100
        setResults(shares, size, amountAtRisk)
    })
    .catch((err) =>{throw err})
})

function setResults(_shares="", _postionSize="", _amountRisked=""){
    var shares = document.getElementById('shares')
    var positionSize = document.getElementById('position_size')
    var amountRisked = document.getElementById('amount_risked')

    if(_shares != ""){
        shares.innerText = `Shares: ${_shares}`
        positionSize.innerText = `Position Size ${_postionSize}`
        amountRisked.innerText = `Amount Risked ${_amountRisked}`
    }else{
        shares.innerText = ""
        positionSize.innerText = ""
        amountRisked.innerText = ""
    }
}
    