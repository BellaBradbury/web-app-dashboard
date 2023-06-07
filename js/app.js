// NOTIFICATIONS 
const btnNotes = document.getElementById('btn-notifications');
let notesCot = document.getElementsByClassName('header-notes')[0];
console.log(notesCot)
let notesArr = [
    'New message from Dale',
    'Dawn commented on your post',
    'Your post is live'
];

const alrBanner = document.getElementById('sect-alr');
const alrDot = document.getElementsByClassName('notification-dot')[0];

function createNotes() {
    notesArr.forEach(note => {
        const newDiv = document.createElement('div');

        let noteHTML = `
            <p>${note}</p>
            <button class='btn-note-clear'>X</button>
         `;

        newDiv.innerHTML = noteHTML;
        notesCot.appendChild(newDiv);
    });

    alrBanner.style.display = 'flex';
    alrDot.style.display = 'block';
    btnNotes.style['pointer-events'] = 'auto';
    btnNotes.style['pointerEvents'] = 'auto';
}
createNotes();

btnNotes.addEventListener('click', (e) => {
    let btnFlag = btnNotes.getAttribute('itms');

    if (btnFlag === 'hidden') {
        btnNotes.setAttribute('itms', 'shown');
        notesCot.style.display = 'flex';

        let clearBtns = Array.from( document.getElementsByClassName('btn-note-clear') );

        clearBtns.forEach(btn => {
            btn.addEventListener('click', (e)=> {
                const noteElement = btn.parentElement;
                noteElement.remove();

                let notesCount = notesCot.children.length;

                if (notesCount === 0) {
            
                    alrBanner.style.display = 'none';
                    alrDot.style.display = 'none';
                    btnNotes.setAttribute('itms', 'hidden');
                    notesCot.style.display = 'none';
                    btnNotes.style['pointer-events'] = 'none';
                    btnNotes.style['pointerEvents'] = 'none';
            
                    setTimeout(function() { 
                        createNotes();
                    }, 5000);
                }
            });
        });

    } else {
        btnNotes.setAttribute('itms', 'hidden');
        notesCot.style.display = 'none';
    }
});

let dashboard = document.getElementById('dashboard');
let navBar = document.getElementsByTagName('nav')[0];

window.addEventListener('click', (e)=> {
    if (dashboard.contains(e.target) || navBar.contains(e.target) ) {
        btnNotes.setAttribute('itms', 'hidden');
        notesCot.style.display = 'none';
    }
});

// ALERT BANNER 
const alrClearBtn = document.getElementsByClassName('btn-alert')[0];
alrClearBtn.addEventListener('click', (e)=> {
    alrBanner.style.display = 'none';
})

// OVERVIEW TRAFFIC CHARTS NAV
const chartBar = document.getElementsByClassName('tro-nav')[0];
const charts = document.querySelectorAll('#sect-tro canvas');

chartBar.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName === 'BUTTON') {
        let opt = target.innerHTML.toLowerCase();

        charts.forEach(chart => {
            let data = chart.getAttribute('chart').toLowerCase();

            if (opt == data) {
                chart.style.display = 'block';
            } else {
                chart.style.display = 'none';
            }
        });
    }
});


// SEARCH AUTOCOMPLETE
const searchBar = document.getElementById('user-search');
const searchCot = document.getElementById('search-results');
const userArr = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
]

function searchDisplay(usr) {
    const resultElement = document.createElement('button');
    resultElement.innerHTML = usr;
    resultElement.className = 'search-opt';
    searchCot.appendChild(resultElement);

    if (usr === 'NO MATCHES AVAILABLE') {
        resultElement.style.color = '#a81d0a';
        resultElement.style.fontSize = 'large';
        resultElement.style.fontWeight = 'bold';
    }
}

searchBar.addEventListener('keyup', (e)=> {
    let searchValue = searchBar.value.toLowerCase();

    searchCot.innerHTML = '';

    if (searchValue) {
        searchCot.style.display = 'block';

        userArr.forEach(user => {
            let usrL = user.toLowerCase();
    
            if ( usrL.includes(searchValue) ) {
                searchDisplay(user);
            }
        });

        let searchOptsHTML = document.getElementsByClassName('search-opt');
        let searchOptsArr = Array.from(searchOptsHTML);

        searchOptsArr.forEach(opt => {
            opt.addEventListener('click', (e)=> {
                opt.disabled = true;
                searchBar.value = opt.innerHTML;
                searchCot.style.display = 'none';
            });
        });

        window.addEventListener('click', (e)=> {
            if (!searchCot.contains(e.target)) {
                searchCot.style.display = 'none';
            }
        });

        console.log(!searchCot.hasChildNodes());
        console.log(searchCot.childNodes)
        if ( !searchCot.hasChildNodes() ) {
            const noElement = document.createElement('h5');
            noElement.innerHTML = 'NO MATCHES AVAILABLE';
            searchCot.appendChild(noElement);
        }
    } else {
        searchCot.style.display = 'none';
    }
});


// MESSAGE FORM VALIDATION 
const msgForm = document.getElementsByClassName('ume-main')[0];
const msgArea = document.getElementById('user-message');
const sendMsgBtn = document.getElementById('btn-message-send');

const errSearch = document.getElementById('err-search');
const errArea = document.getElementById('err-area');

msgForm.addEventListener('submit', (e)=> {
    let validSearch = false;
    let errMsgSearch = '';
    let validArea = false;
    let errMsgArea = '';

    if (!searchBar.value) {
        e.preventDefault();

        errMsgSearch = 'Please provide a recipient.';
        errSearch.style.marginTop = '2%';
    } else {
        let counter = 0;

        userArr.forEach(user => {
            let usrL = user.toLowerCase();
    
            if ( usrL === searchBar.value.toLowerCase() ) {
                counter ++;
            }
        });

        if (counter !== 1) {
            e.preventDefault();

            errMsgSearch = 'Entered name does not match known members.';
            errSearch.style.marginTop = '2%';
        } else {
            validSearch = true;
        }
    }

    if ( !msgArea.value || msgArea.value.trim().length === 0 ) {
        e.preventDefault();

        errMsgArea = 'Please enter a message.';
        msgArea.style.marginBottom = '0px';
        errArea.style.marginTop = '2%';
        errArea.style.marginBottom = '5%';
    } else {
        validArea = true;
        msgArea.style.marginBottom = '5%';
    }   

    if (errMsgSearch !== undefined) {
        errSearch.innerHTML = errMsgSearch;
        errSearch.style.display = 'block';

        searchBar.style.border = 'solid 4px #a81d0a';
    } else {
        console.log('REACHED');
        searchBar.style.borderColor = '#77ba7e';
    }

    if (errMsgSearch === '') {
        searchBar.style.borderColor = '#77ba7e';
        errSearch.style.display = 'none';
    } else if (errMsgSearch !== undefined) {
        errSearch.innerHTML = errMsgSearch;
        errSearch.style.display = 'block';

        searchBar.style.border = 'solid 4px #a81d0a';
    }

    if (errMsgArea === '') {
        msgArea.style.border = 'solid 2px #77ba7e';
        errArea.style.display = 'none';
    } else if (errMsgArea !== undefined) {
        errArea.innerHTML = errMsgArea;
        errArea.style.display = 'block';
        msgArea.style.border = 'solid 4px #a81d0a';
    }

    console.log('SEARCH: ', validSearch);
    console.log('AREA: ', validArea);

    if (validSearch && validArea) {
        alert('MESSAGE SENT!');
    } 
});


// SAVING SETTINGS
const setCot = document.getElementsByClassName('set-main')[0];

const emailSet = document.getElementById('email-notifications');
const publicSet = document.getElementById('public-profile');
const timeSet = document.getElementById('timezone-field');

let timeOptsHTML = document.getElementsByTagName('option');
let timeOptsArr = Array.from(timeOptsHTML);

const btnSetSave = document.getElementsByClassName('set-field-save')[0];
const btnSetCancel = document.getElementsByClassName('set-field-cancel')[0];

if ( localStorage.getItem('email') ) {
    let emailSave = JSON.parse( localStorage.getItem('email') );
    emailSet.checked = emailSave;
} else {
    emailSet.checked = true;
}

if ( localStorage.getItem('public') ) {
    let publicSave = JSON.parse( localStorage.getItem('public') );
    publicSet.checked = publicSave;
} else {
    publicSet.checked = true;
}

if ( localStorage.getItem('time') ) {
    let timeSave = localStorage.getItem('time');

    timeOptsArr.forEach(opt => {
        if (opt.value === timeSave) {
            opt.selected = true;
            return;
        }
    });
} else {
    let placeholder = document.getElementsByTagName('option')[0];

    placeholder.selected = true;
}

btnSetSave.addEventListener('click', (e)=> {
    localStorage.setItem('email', emailSet.checked);
    localStorage.setItem('public', publicSet.checked);
    localStorage.setItem('time', timeSet.value);

    location.reload()
});

btnSetCancel.addEventListener('click', (e)=> {
    localStorage.removeItem('email');
    localStorage.removeItem('public');
    localStorage.removeItem('time');

    location.reload()
});

// SELECT MENU STYLING 
timeSet.addEventListener('change', (e)=> {
    let value = timeSet.value;
    let text = timeSet.options[timeSet.selectedIndex].text;

    if (value !== 'placeholder') {
        timeSet.style.color = 'black';
    }

    console.log(text.length);
    if (text.length > 50) {
        timeSet.style.fontSize = '.75rem';
    } else if (text.length > 30) {
        console.log('REACHED')
        timeSet.style.fontSize = 'small';
    } else {
        timeSet.style.fontSize = '100%';
    }
});
window.addEventListener('load', (e)=> {
    let value = timeSet.value;
    let text = timeSet.options[timeSet.selectedIndex].text;

    if (value !== 'placeholder') {
        timeSet.style.color = 'black';
    }

    if (text.length > 50) {
        timeSet.style.fontSize = '.68rem';
    } else if (text.length > 30) {
        timeSet.style.fontSize = 'small';
    } else {
        timeSet.style.fontSize = '100%';
    }
});