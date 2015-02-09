function initialize(){

  $("a#new_book").on("click", function(e){
    e.preventDefault;
    var inputTitle = $("input#title").val();
    var inputThoughts = $("input#thoughts").val();
    $.ajax({
      url: "/books",
      type: "post",
      data:{
        book:{
          title: inputTitle,
          thoughts: inputThoughts,
        }
      }

    }).done(function(data){
      // console.log(data)

      var bookRecord = "<tr><td>" + data.title + "</td><td>" + data.thoughts + "</td></tr>"
      $("tbody").append(bookRecord);

    })
  })

//VIEW DETAILS_______________________________________________

  $('a.view-details').on("click", function(e){
    e.preventDefault();

    $(".ui.modal").modal("setting", {
      onHide: function () {
        $(".ui.modal .description").text("");
      }
    }).modal("show");

    var linkRow = $(this);
    var title = linkRow.attr("data-title");
    var thoughts = linkRow.attr("data-thoughts");

    // $('div.description').append("Title:");
    $('div.description').append(title);

    $('div.description').append("........");

    // $('div.description').append("Thoughts:");
    $('div.description').append(thoughts);

  });

//_______________________________________________

  $("a#new_book").on("click", function(){
    $("input#title").val(" ")
    $("input#thoughts").val(" ")
  })




//_______________________________________________




}
$(document).ready(initialize);
