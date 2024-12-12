import '../../css/style.css'




function createNavBar(){
    const contentPane = document.getElementById('contentPane');
    if(contentPane.innerText === ''){
        const navBarBackground = document.createElement('nav')
        const navList = document.createElement('ul')
        navList.id = 'navLinkList'
        navBarBackground.id = 'sideNavBar'
        contentPane.appendChild(navBarBackground)
        navBarBackground.appendChild(navList)
    }
    
}

function populateNavbar(){
    createNavBar()
    const navLinks = ['Home', 'Projects', 'Reminders', 'Calendar']
    const list = document.getElementById('navLinkList')
    for (let link in navLinks){
        const liEle = document.createElement('li')
        const aHref = document.createElement('a')


        liEle.setAttribute('id', `navLink${link}`)
        liEle.setAttribute('class', 'navLinks')
        list.appendChild(liEle)

        aHref.setAttribute('href', `#${link}`)
        aHref.innerText = navLinks[link]
        liEle.appendChild(aHref)

    }
}


export {populateNavbar}