function toggleRead(e){
    e.preventDefault();

    const text = document.getElementById("moreText");

    if(text.style.display === "none"){
        text.style.display = "inline";
        e.target.innerText = " ";
    }else{
        text.style.display = "none";
        e.target.innerText = "";
    }
}
function toggleRead1(e){
    e.preventDefault();

    const text = document.getElementById("moreText1");

    if(text.style.display === "none"){
        text.style.display = "inline";
        e.target.innerText = " ";
    }else{
        text.style.display = "none";
        e.target.innerText = "";
    }
}
function toggleRead2(e){
    e.preventDefault();

    const text = document.getElementById("moreText2");

    if(text.style.display === "none"){
        text.style.display = "inline";
        e.target.innerText = " ";
    }else{
        text.style.display = "none";
        e.target.innerText = "";
    }
}
