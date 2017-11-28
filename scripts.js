function showMenu(){
    var menuContent = document.getElementById("menu-content");

    if(menuContent.style.display != "block"){
        menuContent.style.display = "block";
    }
    else{
        menuContent.style.display = "none";
    }
}