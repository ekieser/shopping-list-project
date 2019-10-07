loadEvents();
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}

$(function addText() {
    $('.js-shopping-list-form').sumbit(function(event) {
        event.preventDefault();
        const userText = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val("");
    });
},

$(function addToList() {
    $("button").click(function(event) {
      $('.shopping-list').prepend(
        "<li>" + ${userText} + "</li>"
      );
    });
    
},

$(function editList() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });
    
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
}

