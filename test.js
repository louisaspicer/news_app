var myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function() {
  // console.log(myRequest.responseText)
  json = myRequest.responseText;
  // console.log(json)
  obj = JSON.parse(json);
  console.log(obj);
  // console.log(obj.response.content.fields.body)
  if (myRequest.readyState === 4) {
    var p = document.createElement("p");
    var t = document.createTextNode(myRequest.responseText);
  }
};

// var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body';
// var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/sport/2017/jan/07/saracens-exeter-premiership-match-report';

// var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football/2017/jan/07/preston-north-end-arsenal-fa-cup-match-report?show-fields=body'

var headlines = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=headline?show-fields=body';
myRequest.open('GET', headlines, true);
myRequest.send(null);
