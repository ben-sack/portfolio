/*===== Check for Device =====*/

const skills = document.querySelectorAll(".skills__img");
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

if (isMobile) {
    for (let i = 0; i < skills.length; i++) {
        skills[i].attributes.removeNamedItem("data-tilt")
    }
  }

  /*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
// When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




function openPopup(id){
    var link = document.getElementById(id);
    if(link.id=="python"){
        let python = document.getElementById("popup python")
        closePopup(id)
        python.classList.add("open-popup")
    }
    else if(link.id=="sql"){
        let sql = document.getElementById("popup sql")
        closePopup(id)
        sql.classList.add("open-popup")
    }
    else if(link.id=="bash"){
        let bash = document.getElementById("popup bash")
        closePopup(id)
        bash.classList.add("open-popup")
    }
    else if(link.id=="html"){
        let html = document.getElementById("popup html")
        closePopup(id)
        html.classList.add("open-popup")
    }
    else if(link.id=="css"){
        let css = document.getElementById("popup css")
        closePopup(id)
        css.classList.add("open-popup")
    }
    else if(link.id=="js"){
        let js = document.getElementById("popup js")
        closePopup(id)
        js.classList.add("open-popup")
    }
    else if(link.id=="snowflake"){
        let snowflake = document.getElementById("popup snowflake")
        closePopup(id)
        snowflake.classList.add("open-popup")
    }
    else if(link.id=="aws"){
        let aws = document.getElementById("popup aws")
        closePopup(id)
        aws.classList.add("open-popup")
    }
    else if(link.id=="prefect"){
        let prefect = document.getElementById("popup prefect")
        closePopup(id)
        prefect.classList.add("open-popup")
    }
    else if(link.id=="fivetran"){
        let fivetran = document.getElementById("popup fivetran")
        closePopup(id)
        fivetran.classList.add("open-popup")
    }
    else if(link.id=="kafka"){
        let kafka = document.getElementById("popup kafka")
        closePopup(id)
        kafka.classList.add("open-popup")
    }
    else if(link.id=="hvr"){
        let hvr = document.getElementById("popup hvr")
        closePopup(id)
        hvr.classList.add("open-popup")
    }
    else if(link.id=="splunk"){
        let splunk = document.getElementById("popup splunk")
        closePopup(id)
        splunk.classList.add("open-popup")
    }
    else if(link.id=="git"){
        let git = document.getElementById("popup git")
        closePopup(id)
        git.classList.add("open-popup")
    }
    else if(link.id=="github"){
        let github = document.getElementById("popup github")
        closePopup(id)
        github.classList.add("open-popup")
    }

}

/*===== POPUP =====*/

function closePopup(){
    let links = document.querySelectorAll(".popup")

    links.forEach(link => {
        link.classList.remove("open-popup")
    })
}

// let container = document.querySelector('.skills__container')

// container.addEventListener('click', closePopup, true); 
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.skills__img',{interval: 100}); 


function hideData(){
    let qData = document.getElementById('qdata')
    let aData = document.querySelectorAll('.qualification__sections')

    aData.forEach(i => {
        if(i.classList.contains('hide-data')){
            i.classList.remove('hide-data')
        }else {i.classList.add('hide-data')}
    })
}