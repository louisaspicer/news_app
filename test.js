

// myRequest.onreadystatechange = function() {
//   // console.log(myRequest.responseText)
//   json = myRequest.responseText;
//   // console.log(json)
//   obj = JSON.parse(json);
//   console.log(obj);
//
//   if (myRequest.readyState === 4) {
//     var p = document.createElement("p");
//     // var t = document.createTextNode(obj.response.content.fields.bodyText);
//     p.appendChild(t);
//     document.getElementById("app").appendChild(p);
//   }
// };


// var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football/2017/jan/07/preston-north-end-arsenal-fa-cup-match-report?show-fields=body'
// var url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/politics/blog/live/2017/jan/08/theresa-may-interview-sky-sophy-ridge-andrew-marr-with-skys-sophy-ridge-politics-live';

// this generates a request for the headlines' webUrl, so that they can be used to access each individual articles' data later.
// newsHeadlinesModel
//this.headlinesIds = [] - ids for the guardians api bodyText
//this.headlinesWebUrls = [] - urls for getting the summary using the Aylien API sentences

var myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function() {
  var json = myRequest.responseText;
  var obj = JSON.parse(json);
  var headlines = [];
  if (myRequest.readyState === 4) {
    var length = obj.response.results.length;
    for (var index = 0; index < length; index++) {
      headlines.push(obj.response.results[index].id);
    }
    console.log(headlines);
  }

};
var headlines = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=headline?show-fields=body';
// var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/lifeandstyle/2017/jan/08/botox-nation-america-addiction-crack-like-cosmetic-procedures?show-fields=all';
myRequest.open('GET', headlines, true);
myRequest.send(null);

// newsSummaryModel
