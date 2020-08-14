export function getPromise(url) {  
  return new Promise((res, rej) =>{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true); // Replace 'appDataServices' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            res(JSON.parse(xobj.responseText));
          }
    };
    xobj.send(null);  
  })
 }

 