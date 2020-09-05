import {getPromise} from "./api_call.js"

var nav_bar = document.getElementById("nav-bar")
var htmlPage = getScriptID()

getPromise("/pages")
.then(function (data){
    for(var url in data){
        var link = document.createElement('a')
        link.href = url
        link.innerText = data[url]
        if(htmlPage == url){
            link.className = "active"
        }
        nav_bar.appendChild(link)
    }
})

function getScriptID() {
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[0];
    return lastScript.id
}
