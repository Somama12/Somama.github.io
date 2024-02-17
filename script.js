var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("tab-active")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("tab-active")
}