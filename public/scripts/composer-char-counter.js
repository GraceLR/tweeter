
$(document).ready(function() {
    $('#tweet-text').on('input', function() {

        const remLen = 140 - $(this).val().length;

        if (remLen < 0) {

            $(this).next().children().eq(1).val(140 - $(this).val().length).css(
                "color", "red");

        } else {

            $(this).next().children().eq(1).val(140 - $(this).val().length).css(
                "color", "#545149");

        }

    })
  });

  //this.parent.thirdchild.secondchild.val()