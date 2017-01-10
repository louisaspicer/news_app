window.onload = function() {
  // alert("I've loaded");
  var model = new NewsHeadlinesModel();
  var view = new NewsHeadlinesView();
  // console.log(view);

  var controller = new NewsHeadlinesController(model, view);
  controller.getData(); //works
  // console.log(model);
  controller.convertDataToHtml(view, model);
  controller.updatePage();

  // model.getHeadlinesData();
  // console.log(model);
  // view.convertHeadlinesTextToHtmlString(model);
  // console.log(view);
  // view.returnHeadlinesAsHtml();
  // controller.updatePage();

};
