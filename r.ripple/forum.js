var section = $('.commentsection');
var button = $('.button');
var name = $('#name');
var comment = $('#comment');

button.on("click", add);

function add(event) {
  event.preventDefault();
  var val = $('#name').val();
  var val2 = $('#comment').val();
  section.append(`
    <p>${val}</p>
    <p>${val2}</p>
`)
}