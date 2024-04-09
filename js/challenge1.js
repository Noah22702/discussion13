window.addEventListener("load", function() {
    document.getElementById("heading").style.color = "purple";

});

document.addEventListener("dblclick", function (){
    alert(new Date());
});


document.querySelector('input[type=checkbox]').addEventListener("click", function(){
    document.getElementById("emailBox").classList.toggle("hidden");
});