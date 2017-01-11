window.onload = function() {
  var model = new NewsModel();
  var view = new NewsView();
  var controller = new NewsController(model, view);


  controller.getData();

};
