$(document).ready(function() {
    var isWin = -1;
    $('div.boundary').on({
        'mouseover': function() {
            if (isWin === -1) {
                $('div.boundary').css('background-color', 'red');
                alert('Sorry, you lost! =(');
                isWin = 0;
            }
        },
        'mouseleave': function() {
            //$('div.boundary').removeAttr('style');
        }
    });

    $('div#end').on('mouseover', function() {
        if (isWin === -1) {
            alert('You win! =)');
            isWin = 1;
        }
    })

    $('div#start').click(function() {
        isWin = -1;
        $('div.boundary').removeAttr('style');
    })

});



// var isRunning = false;
// $(document).ready(function() {
//     $('#start').click(function() {
//         $('div.boundary').removeClass('youlose');
//         $('#status').text('Click the "S" to begin.');
//         isRunning = true;
//     });

//     $('#end').mouseover(function(e) {
//         if (isRunning) {
//             alert("Congratulations! You win. =)");
//             // $('#status').text('You win. =)');
//             isRunning = false;
//         }
//     });

//     $('#maze').hover(function(event) {
//         const element = $('div.boundary');
//         if (isRunning) {
//             const startPosition = $('#start').offset();
//             const endPosition = $('#end').offset();
//             var x = event.pageX;
//             if (x < startPosition.left || x > endPosition.left) {
//                 markFailure();
//             }
//         }
//     });

//     $('div.boundary').mouseover(function() {
//         if (isRunning) {
//             markFailure();
//         }
//     });
// });

// function markFailure() {
//     const element = $('div.boundary');
//     if (isRunning) {
//         element.addClass('youlose');
//  // $('#status').text('Sorry, you lost. =(');
//         isRunning = false;
//         alert("Sorry, you lost. =(");
//     }
// }