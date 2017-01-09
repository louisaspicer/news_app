(function(exports) {
  function NewsSummaryModel(newsHeadlineModel) {
    this.newsHeadlineModel = newsHeadlineModel;
    this.summaries = [];
  }

  NewsSummaryModel.prototype = {
    //need to turn this into a loop to push all summary sentences to array
   getSummaryFromApi: function() {
      var length = this.newsHeadlineModel.headlinesIds.length;
      for (var index = 0; index < length; index++) {

        var myRequest = new XMLHttpRequest();
        var headlineId = this.newsHeadlineModel.headlinesIds[index]; //will return the headline id for the url api request
        var url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/' + headlineId;
        var self = this;
        myRequest.open("GET", url, true);

        myRequest.addEventListener('load', function() {

           var json = myRequest.responseText;
           var obj = JSON.parse(json);
           console.log(obj)

           if (myRequest.readyState === 4) {

             self.summaries.push(obj.sentences[index]);
             }
          //  };
           }, false);

           myRequest.send();
      }

   }
 };


  exports.NewsSummaryModel = NewsSummaryModel;

})(this);
