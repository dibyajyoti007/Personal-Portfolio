const colorSwitchToggler = document.querySelector('.color-switch-toggler');
colorSwitchToggler.addEventListener("click", () => {
    document.querySelector(".color-switch").classList.toggle("open");
})


window.addEventListener("scroll", () => {
    if(document.querySelector('.color-switch').classList.contains('open'))
    {
        document.querySelector('.color-switch').classList.remove('open');
    }
})


const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{    
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute('disabled');
        }
        else
        {
            style.setAttribute('disabled', 'true');
        }
    })
}


const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () =>{
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () =>{
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})