/*===== POPUP =====*/

let popup = document.getElementById("popup");



function openPopup(id){
    var link = document.getElementById(id);
    if(link.id=="python"){
        let python = document.getElementById("popup python")
        python.classList.add("open-popup")
    }
    else if(link.id=="sql"){
        let sql = document.getElementById("popup sql")
        sql.classList.add("open-popup")
    }
    else if(link.id=="bash"){
        let bash = document.getElementById("popup bash")
        bash.classList.add("open-popup")
    }
    else if(link.id=="html"){
        let html = document.getElementById("popup html")
        html.classList.add("open-popup")
    }
    else if(link.id=="css"){
        let css = document.getElementById("popup css")
        css.classList.add("open-popup")
    }
    else if(link.id=="js"){
        let js = document.getElementById("popup js")
        js.classList.add("open-popup")
    }
    else if(link.id=="snowflake"){
        let snowflake = document.getElementById("popup snowflake")
        snowflake.classList.add("open-popup")
    }
    else if(link.id=="aws"){
        let aws = document.getElementById("popup aws")
        aws.classList.add("open-popup")
    }
    else if(link.id=="prefect"){
        let prefect = document.getElementById("popup prefect")
        prefect.classList.add("open-popup")
    }
    else if(link.id=="fivetran"){
        let fivetran = document.getElementById("popup fivetran")
        fivetran.classList.add("open-popup")
    }
    else if(link.id=="kafka"){
        let kafka = document.getElementById("popup kafka")
        kafka.classList.add("open-popup")
    }
    else if(link.id=="hvr"){
        let hvr = document.getElementById("popup hvr")
        hvr.classList.add("open-popup")
    }
    else if(link.id=="splunk"){
        let splunk = document.getElementById("popup splunk")
        splunk.classList.add("open-popup")
    }
    else if(link.id=="git"){
        let git = document.getElementById("popup git")
        git.classList.add("open-popup")
    }
    else if(link.id=="github"){
        let github = document.getElementById("popup github")
        github.classList.add("open-popup")
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

/*===== POPUP =====*/

function closePopup(id){
    let links = document.querySelectorAll(".popup")

    for (let i = 0; i < links.length; i++) {

        if(links.id=="python");{
            let python = document.getElementById("popup python");
            python.classList.remove("open-popup");
        } 
        if(links.id=="sql");{
            let sql = document.getElementById("popup sql");
            sql.classList.remove("open-popup");
        }
        if(links.id=="bash");{
            let bash = document.getElementById("popup bash");
            bash.classList.remove("open-popup");
        } 
        if(links.id=="html");{
            let html = document.getElementById("popup html");
            html.classList.remove("open-popup");
        }
        if(links.id=="css");{
            let css = document.getElementById("popup css");
            css.classList.remove("open-popup");
        } 
        if(links.id=="js");{
            let js = document.getElementById("popup js");
            js.classList.remove("open-popup");
        }
        if(links.id=="snowflake");{
            let snowflake = document.getElementById("popup snowflake");
            snowflake.classList.remove("open-popup");
        } 
        if(links.id=="aws");{
            let aws = document.getElementById("popup aws");
            aws.classList.remove("open-popup");
        }
        if(links.id=="prefect");{
            let prefect = document.getElementById("popup prefect");
            prefect.classList.remove("open-popup");
        } 
        if(links.id=="fivetran");{
            let fivetran = document.getElementById("popup fivetran");
            fivetran.classList.remove("open-popup");
        }
        if(links.id=="kafka");{
            let kafka = document.getElementById("popup kafka");
            kafka.classList.remove("open-popup");
        }
        if(links.id=="hvr");{
            let hvr = document.getElementById("popup hvr");
            hvr.classList.remove("open-popup");
        }
        if(links.id=="splunk");{
            let splunk = document.getElementById("popup splunk");
            splunk.classList.remove("open-popup");
        }
        if(links.id=="git");{
            let git = document.getElementById("popup git");
            git.classList.remove("open-popup");
        }
        if(links.id=="github");{
            let github = document.getElementById("popup github");
            github.classList.remove("open-popup");
        }
      }

}

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