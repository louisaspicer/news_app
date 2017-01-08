(function(exports) {
  function NewsSummaryModel(newsHeadlineModel) {
    this.newsHeadlineModel = newsHeadlineModel;
    this.summaries = [];
  }

  NewsSummaryModel.prototype = {
    //need to turn this into a loop to push all summary sentences to array
   getSummaryFromApi: function(index) {

     var myRequest = new XMLHttpRequest();
     var headlineId = this.newsHeadlineModel.headlinesIds[index]; //will return the headline id for the url api request
     var url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/' + headlineId;
     var self = this;
     myRequest.open("GET", url, true);
    //  myRequest.onreadystatechange = function() {
     myRequest.addEventListener('load', function() {

       var json = myRequest.responseText;
       var obj = JSON.parse(json);
      //  console.log(self);
       if (myRequest.readyState === 4) {
        //  console.log(self.summaries);
        //  console.log(self);
         self.summaries.push(obj.sentences[0]);
         }
      //  };
       }, false);

       myRequest.send();
     }

   };


  exports.NewsSummaryModel = NewsSummaryModel;

})(this);
