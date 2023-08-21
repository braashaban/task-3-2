const togglebtn=document.querySelector('.toggel-btn') ;
const togglebtni=document.querySelector('.toggel-btn i') ;
const dropmenu=document.querySelector('.drop-menu');
togglebtn.onclick = function()
{
dropmenu.classList.toggle('open');
}