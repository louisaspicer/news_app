(function(exports) {

  function NewsController(HeadlinesModel, HeadlinesView) {
    this.newsModel = HeadlinesModel;
    this.newsView = HeadlinesView;
  }

  NewsController.prototype = {

    getData: function() {
      var myRequest = new XMLHttpRequest();
      var headlines = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&order-by=newest&q=headline';
      myRequest.open('GET', headlines, true);
      var self = this;

      myRequest.onreadystatechange = function() {
          if (myRequest.readyState === 4 && myRequest.status === 200) {
            var jsonObj = JSON.parse(myRequest.responseText);
            self.showLinksOnPage(jsonObj);
          }
      };
      myRequest.send();
    },

    // saveNewsArticles: function(json) {
    //   this.newsModel.saveNewsArticles(json);
    // },

    showLinksOnPage: function(json) {
      this.newsModel.saveNewsArticles(json.response.results); //saves data to an newsData array in model
      this.newsView.showLinksOnPage(this.newsModel.newsData); //uses that array to update the page
    },

  };

  exports.NewsController = NewsController;

})(this);
