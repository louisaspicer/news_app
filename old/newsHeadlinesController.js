(function(exports) {

  function NewsHeadlinesController(headlinesModel, headlinesView) {
    this.headlinesModel = headlinesModel;
    this.headlinesView = headlinesView;
    self = this;
  }

  NewsHeadlinesController.prototype = {

    getData: function() {
      // console.log(self.headlinesModel);
      self.headlinesModel.getHeadlinesData();
    },

    convertDataToHtml: function(view, model) {
      console.log(view);
      console.log(model);

      view.convertHeadlinesTextToHtmlString(model);
      // return self.headlinesView.returnHeadlinesAsHtml();
    },

    updatePage: function() {
      document.getElementById("app").innerHTML = this.headlinesView.returnHeadlinesAsHtml();
    }
  };

  exports.NewsHeadlinesController = NewsHeadlinesController;

})(this);
