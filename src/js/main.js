import '../css/style.css'
import '../css/overlay.css'
import '../css/navbars.css'

function setCSS(){
    const docHeader = document.querySelector('head')
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    docHeader.append(cssLink);
}

