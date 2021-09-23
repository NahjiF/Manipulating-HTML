$(document).ready(function() {

    var $button1 = $('<button>Click Me</button>').attr('id', 'btn1').appendTo('body');


    $('#btn1').click(function() {
        alert("Good Work Christy!!!");
    })

    $('#btn2').click(function() {
        var $text = $('#textbox').val();
        alert($text);
    })

    $('#hoverDiv').css({
        'background-color': 'black',
        'height': '100px',
        'width': '100px'
    })

    $('#hoverDiv').hover(function() {
        $('#hoverDiv').css('background-color', 'magenta')
        $('#hoverDiv').mouseleave(function() {
            $('#hoverDiv').css('background-color', 'black')
        })
    })

    $('<p>I am paragraph text, click me</p>').attr('id', 'para').appendTo('body');

    $('#para').click(function() {
        var colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'];
        var random = Math.floor(Math.random() * colors.length);
        $('#para').css('color', colors[random]);
    })


    $('<div><div>').attr({ 'name': 'emptydiv', 'id': 'div' }).appendTo('body');
    $('<button>Empty Div Button</div>').attr('id', 'btn3').appendTo(div);


    $('#btn3').click(function() {
        $('<span>' + $('#div').attr('name') + '</span>').appendTo(div);
    })


    var friends = ['Robert', 'mom', 'dad', 'Vicki', 'Tom', 'Christina', 'Bianca', 'Gabriel', 'Matt', 'Amanda'];
    var count = 0;
    $('#btn4').click(function() {
        if (count < 10) {
            $('<li></li>').text(friends[count]).appendTo('#ul');
            count++;
        }
    })


})