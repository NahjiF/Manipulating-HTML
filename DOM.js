document.addEventListener('DOMContentLoaded', function() {

    var button = document.createElement('button');
    var buttonText = document.createTextNode('Click Me');
    button.appendChild(buttonText);
    document.body.prepend(button);

    button.addEventListener("click", function() {
        alert("Good Work Christy!!!");
    })

    var button2 = document.getElementById('button2')
    button2.addEventListener("click", function() {
        var text = document.getElementById('textbox').value;
        alert(text);
    })

    var hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.style.backgroundColor = 'black';
    hoverDiv.style.height = '100px';
    hoverDiv.style.width = '100px';

    hoverDiv.addEventListener("mouseover", function() {
        hoverDiv.style.backgroundColor = 'pink';
        hoverDiv.addEventListener("mouseout", function() {
            hoverDiv.style.backgroundColor = 'black';
        })
    })

    var p = document.createElement('p');
    var pText = document.createTextNode('This is the text that goes in the paragraph');
    p.appendChild(pText);
    document.body.appendChild(p);

    p.addEventListener("click", function() {
        var colors = ["pink", "purple", "teal", "grey", "greenyellow"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.color = randomColor;
    })

    var button3 = document.createElement('button');
    var button3Text = document.createTextNode('Empty Div Button');
    button3.appendChild(button3Text);
    document.body.appendChild(button3);
    var div = document.createElement('div');

    button3.addEventListener("click", function() {
        var span = document.createElement('span');
        var spanText = document.createTextNode(div.localName);
        span.appendChild(spanText);
        document.body.appendChild(span);
    })


})