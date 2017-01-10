(function(exports) {
  function NewsHeadlinesView() {
    this.htmlString = "<ul>";
  }

  NewsHeadlinesView.prototype = {
    convertHeadlinesTextToHtmlString: function(newsHeadlineModel) {
      var self = this;

      var length = newsHeadlineModel.headlinesText.length;
      console.log(newsHeadlineModel.headlinesText[0]); //why does this show empty on console but then when you open it up the data is there?
      for (var index = 0; index < length; index++) {
        var bodyText = newsHeadlineModel.headlinesText[index];
        self.htmlString += "<li><div>" + bodyText + "</div></li>";
      }
      self.htmlString += "</ul>";
      return self.htmlString;
    },


    returnHeadlinesAsHtml: function() {
      return this.htmlString;
    }

  };

  exports.NewsHeadlinesView = NewsHeadlinesView;

})(this);
