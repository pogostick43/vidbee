//Fix text area new row
$('body').on('keydown', 'textarea', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    var content = $(this).val();
    var caret = this.selectionStart;
    $(this).val(content.substring(0, caret) + '\n' + content.substring(caret));
    	this.setSelectionRange(caret + 1, caret + 1);
  }
});
