
$(document).ready(function() {
    $('#tweet-text').on('input', function() {

        $(this).next().children().eq(1).val(140 - $(this).val().length);

    })
  });

  //this.parent.thirdchild.secondchild.val()