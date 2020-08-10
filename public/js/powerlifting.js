import {get} from './api_call.js';
import {url_load} from './url_parsing.js';

var meets = document.getElementById('meets');

get('/meet_data', (json)=>{
    var dates = json.dates;
    for(var i = 0; i < dates.length; i++){
        var anchor = document.createElement('a');
        anchor.href = './meet_results?date=' + url_load(dates[i]);
        anchor.innerText = dates[i];
        meets.appendChild(anchor);
    }
})
