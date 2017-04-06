var quoteRequest = new XMLHttpRequest();
quoteRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs', true);
quoteRequest.send()

quoteRequest.onload = function() {
  if (quoteRequest.readyState === XMLHttpRequest.DONE) {
jsonObj = JSON.parse(quoteRequest.responseText);
console.log (jsonObj);
document.getElementById('maori').innerHTML=jsonObj.source;
document.getElementById('english').innerHTML=jsonObj.translation;
}
}
