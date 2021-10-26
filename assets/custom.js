$(document).ready(function () {
  var $popUpClose = $('.popup-modal-close');
  var $popUp = $('.popup-modal');
  if ($popUp.hasClass('completed')) {
    window.setTimeout(function () {
      $popUpClose.appendTo($('.popup-modal'));
    }, 100);
  } else {
    $popUpClose.appendTo($('.off-canvas--main-content'));
  }
});
