$(function() {
    $("#puppies").click(updatePictures);
    $("#kitties").click(updatePictures);
});

function updatePictures() {
    var animal = "";
    if ($("#puppies").attr("checked") == "checked") {
        animal = "puppy";
    } else {
        animal = "kitty";
    }
    $.ajax("ajaxpets.php", {
        "type": "get",
        "data": {
            "animal": animal
        }
    }).done(displayPictures);
}

function displayPictures(data) {
    // $("#pictures").innerHTML = (data.responseText);
    $("#pictures").html(data);
}


// document.observe("dom:loaded", function() {
//     $("puppies").observe("click", updatePictures);
//     $("kitties").observe("click", updatePictures);
// });

// function updatePictures(event) {
//     var animal = "";
//     if ($("puppies").checked) {
//         animal = "puppy";
//     } else {
//         animal = "kitty";
//     }
//     new Ajax.Request("ajaxpets.php", {
//         method: "get",
//         onSuccess: displayPictures,
//         parameters: { "animal": animal }
//     });
// }

// function displayPictures(ajax) {
//     $("#pictures").innerHTML = (ajax.responseText);
// }
// //absolute url for get -- http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php