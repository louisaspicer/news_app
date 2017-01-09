(function(exports) {
  function NewsHeadlinesView() {
    // this.newsHeadlines = newsHeadlinesModel;
    this.htmlString = "<ul>";
  }

  NewsHeadlinesView.prototype = {
    convertHeadlinesTextToHtmlString: function(newsHeadlineModel) {
      var self = this;

      var length = newsHeadlineModel.headlinesText.length;
      console.log(newsHeadlineModel.headlinesText);
      for (var index = 0; index < length; index++) {
        var bodyText = newsHeadlineModel.headlineText[index];
        self.htmlString += "<li><div>" + bodyText + "</div></li>";
      }
      self.htmlString += "</ul>";
    },


    returnHeadlinesAsHtml: function() {
      return this.htmlString;
    }

  };

  exports.NewsHeadlinesView = NewsHeadlinesView;

})(this);
