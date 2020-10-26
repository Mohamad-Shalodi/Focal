var sliderindex = 0;
var slideritemsnumber = 3;

function updateslider()
{
    $(".header .slider .slidingitem").each(function(idx, itm) {
        $(itm).css('display', 'none');
        $(itm).css('transform', 'translateX(' + (idx - sliderindex)*1000 + 'px)');
        if(idx == sliderindex)
            $(itm).css('display', 'flex');
    });
}

updateslider();

$(".header .slider .left").on("click", () => {
    console.log(sliderindex, slideritemsnumber);
    if(sliderindex == 0)
        sliderindex = slideritemsnumber - 1;
    else
        sliderindex = sliderindex - 1;
    

    updateslider();
});

$(".header .slider .right").on("click", () => {
    console.log(sliderindex, slideritemsnumber);
    if(sliderindex == 2)
        sliderindex = 0;
    else
        sliderindex = sliderindex + 1;
    

    updateslider();
});