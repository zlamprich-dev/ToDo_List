


function newUserOverlay() {
    const contentPane = document.getElementById('contentPane')
    const newUser = document.createElement('div')
    const newUserList = document.createElement('div')
    newUser.setAttribute('id', 'userPrompt')
    newUserList.setAttribute('id', 'newUserList')
    newUser.textContent = 'Stay on top of your day with a sleek, ' +
        'easy-to-use to-do list built for busy professionals and productivity enthusiasts alike. ' +
        'Whether you\'re tackling work tasks, managing personal goals, or just trying to remember what\'s ' +
        'for dinner, we\'ve got you covered. Organize, prioritize, and achieve—because your time matters.'

    newUserList.textContent = 'Start Here'
    contentPane.appendChild(newUser)
    contentPane.appendChild(newUserList)

    newUserList.addEventListener('click', (e) => {
        contentPane.replaceChildren('')
        contentPane.style.backgroundColor = 'transparent'


    })
}