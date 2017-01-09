(function(exports) {

  function NewsHeadlinesController() {
  }

  NewsHeadlinesController.prototype = {
    addHeadlinesToPage: function(newsHeadlinesView) {
      document.getElementById("app").innerHTML = newsHeadlinesView.returnHeadlinesAsHtml();
    }
  };

  exports.NewsHeadlinesController = NewsHeadlinesController;

})(this);
