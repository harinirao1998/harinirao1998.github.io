
$('#intro').mousemove(function(e){
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    xy = x + y;
    bgWebKit1 = "linear-gradient(" + xy + "deg, #ee9ca7,#fcab9f,#ffdde1)";
    bgWebKit2 = "-webkit-gradient(" + xy + "deg, #ee9ca7, #fcab9f,#ffdde1)";
    bgWebKit3 = "-o-linear-gradient(" + xy + "deg, #ee9ca7, #fcab9f,#ffdde1)";
    $(this).css({
      'background': bgWebKit1,
    });
   
})



$("#aboutme-button").click(function(){
    window.location='contact.html';
})

$("#intro-btn1").click(function(){
    window.location.hash='aboutme';
})


$("#intro-btn2").click(function(){
    window.location='profile.html';
})

$("#resumebtn").click(function(){
    window.location='https://docs.google.com/document/d/1WaYv0rDOMm--0cBaQkmBPxkYCm0JyWjN/edit?usp=sharing&ouid=116029419545734241325&rtpof=true&sd=true'
})

$(".fa-linkedin-in").click(function(){
    window.open("https://www.linkedin.com/in/harini-rao-b0111a142/");
})

$(".fa-github").click(function(){
window.open("https://github.com/harinirao1998");
})

