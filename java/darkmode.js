const changeThemeBtn = document.querySelector("#change-theme");

//toggle dark mode

function toggledarkmode()
{document.body.classList.toggle("darkicon")
}

//load light or darke mode
function loadtheme(){
    const darkmode = localStorage.getItem("darkicon")

    if(darkmode){
        toggledarkmode();
    }
}

loadtheme();


changeThemeBtn.addEventListener("change", function(){
    toggledarkmode();


    //save or remove dark mode   
    localStorage.removeItem("darkicon");

    if(document.body.classList.contains("darkicon")){
        localStorage.setItem("darkicon",1);
    } 
});