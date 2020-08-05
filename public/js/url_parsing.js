export function url_load(str){
    return str.split(' ').join('_');
}

export function url_parse(str){
    return str.split('_').join(' ');
}

export const getQueryParams = ( params, url ) => {
  
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };