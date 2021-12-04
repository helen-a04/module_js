$(document).ready(function(){
    let parent = $('.parent');

    parent.css("color", "blue");

    console.log(parent.css("color"))

    parent.addClass("blue")

    console.log(parent.attr("class"))

    console.log(parent.html());
    console.log(parent.text());

    let input = $('input[type="text"]');
    console.log(input.val());

    let child = $('.child');

    child.each(function($element){
        console.log($element)
    })

    input.change(function(){
        console.log($(this).val())
    });
})

$((function() {
    $.ajax('https://rickandmortyapi.com/api/character', {
        method: 'GET',
        error: function(){
            console.log("Is is error!")
        },
        success: function(data){
            // console.log(data)            
            data.results.forEach(element => {
                // let html = renderPerson(element)

                $('body').html(
                    // $('body').html() + html
                );
            });
        }
    })

    function renderPerson(el){
        return (`
            <div>${el.name}</div>
        `)
    }
}))

$((function(){
    $('#show').click(function(){
        $('#block').show(2000);
    })

    $('#hide').click(function(){
        $('#block').hide(2000);
    })

    $('#fadeIn').click(function(){
        $('#block').fadeIn(150);
    })

    $('#fadeOut').click(function(){
        $('#block').fadeOut(2000).slideDown(500);
    })
}));