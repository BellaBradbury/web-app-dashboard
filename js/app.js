// NOTIFICATIONS 
const btnNotes = document.getElementById('btn-notifications');
let notesCot = document.getElementsByClassName('header-notes')[0];
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

    console.log('NOTES CREATED'); 
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
                    console.log('NO NOTIFICATIONS');
            
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