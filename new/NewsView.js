(function(exports) {
  function NewsView() {

  }

  NewsView.prototype = {
    showLinksOnPage: function(newsData) {
      var self = this;
      var length = newsData.length;

      for (var index = 0; index < length; index++) {
        var headlineText = newsData[index].fields.headline;
        var articlesHtml = "<a class='link' id='"+index+"' href='#'><li>" + headlineText + "</li></a>";
        document.getElementById("headlines").innerHTML += articlesHtml;
      }
    },
  };


exports.NewsView = NewsView;
})(this);
