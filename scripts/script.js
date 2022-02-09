// task1
var basket = document.getElementsByClassName('rem');
var ul1 = document.querySelector('.collection');
var liI = document.getElementsByTagName('li')

ul1.addEventListener('click', function (e) {
    console.log(ul1.children.length)

    if (e.target.className === 'material-icons' && ul1.children.length > 1) {
        e.target.parentElement.parentElement.remove()
    } else {
        e.target.parentElement.parentElement.remove();
        ul1.insertAdjacentHTML('beforeend', '<p>Empty to-do</p>')
    }
})
// task2
var contain = document.getElementsByClassName('container1')[0];
contain.addEventListener('click', function (e) {
    console.log(e.target.innerText === 'blue')
    if (e.target.innerText === 'red') {
        e.target.style.backgroundColor = 'red'
    } else if (e.target.innerText === 'blue') {
        e.target.style.backgroundColor = 'blue'
    }
})
// task3
/** Task3 */

var infoList = [
    {
        id: 1,
        name: 'Манчестер Юнайтед',
        yearFoundation: 1878,
        championsLeague: [1968, 1999, 2008],
        europaLeague: [2017],
        url: './images/footbal/manchester.png'
    },
    {

        id: 2,
        name: 'Барселона',
        yearFoundation: 1899,
        championsLeague: [1992, 2006, 2009, 2011, 2015],
        europaLeague: [],
        url: './images/footbal/barcelona.png'
    },
    {
        id: 3,
        name: 'ПСЖ',
        yearFoundation: 1970,
        championsLeague: [],
        europaLeague: [],
        url: './images/footbal/psg.png'
    },
    {
        id: 4,
        name: 'Ювентус',
        yearFoundation: 1897,
        championsLeague: [1985, 1996],
        europaLeague: [],
        url: './images/footbal/juventus.png'
    },
    {
        id: 5,
        name: 'Бавария',
        yearFoundation: 1900,
        championsLeague: [1974, 1975, 1976, 2001, 2013, 2020],
        europaLeague: [],
        url: './images/footbal/bayern.png'
    }
]


var sel = document.getElementsByClassName('browser-default')[0];
var div = document.getElementsByClassName('row');
var img = document.getElementsByTagName('img')[0];
var year = document.querySelector('#h5-1');
var winners = document.querySelector('#h5-2');
var leagueWinners = document.querySelector('#h5-3');


sel.addEventListener('input', (e) => {
    infoList.forEach((item) => {
        if (item.id == sel.value) {
            img.src = item.url;
            year.textContent = item.yearFoundation;
            winners.textContent = item.championsLeague.toString();
            leagueWinners.textContent = item.europaLeague.toString();
            if (item.championsLeague.toString() === '' && item.europaLeague.toString() === '') {
                winners.textContent = 'На данный момент нет кубков';
                leagueWinners.textContent = 'На данный момент нет кубков';
            } else if (item.europaLeague.toString() === '') {
                leagueWinners.textContent = 'На данный момент нет кубков';
            } else if (item.championsLeague.toString() === '')
                winners.textContent = 'На данный момент нет кубков';
        }
    })
});


// task4
var btn = document.querySelector('.btn')
var li = document.querySelector('tbody');

function sortNam() {
    var el = [].slice.call(li.children);
    el.sort((a, b) => {
        if (Number(a.firstElementChild.innerHTML) < Number(b.firstElementChild.innerHTML)) {
            return -1;
        } if (Number(a.firstElementChild.innerHTML) > Number(b.firstElementChild.innerHTML)) {
            return 1;
        }
        return 0;
    })
    while (li.children.length) {
        li.removeChild(li.children[0])
    }
    el.forEach(function (item) {
        li.appendChild(item);
    })
}
btn.addEventListener('click', sortNam);





/**Task5 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
];

var input7 = document.querySelectorAll('input')[0];
var ul5 = document.getElementById('list');
input7.addEventListener('input', () => {
    searchList.forEach((item, index) => {
        console.log([item])
        if (item.toLowerCase().includes(input7.value.toLowerCase()) && input7.value.trim() != '') {
            ul5.children[index].style.display = 'block'
        } else if (ul5.children[index].style.display = 'block' && !item.includes(input7.value)) {
            ul5.children[index].style.display = 'none'
        } else if (input7.value.trim() === '') {
            ul5.children[index].style.display = 'block'
        }
    })
})