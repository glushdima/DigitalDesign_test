const btn = document.querySelector(".theme-button");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const date = new Date('01.01.2022');
const weekday = weekdays[date.getDay()];
const weekNumber = Math.ceil((date.getDate() + 6 - date.getDay()) / 7);
const month = months[date.getMonth()];
const year = date.getFullYear();

const formattedDate = `${weekday}, ${weekNumber} неделя ${month} ${year} года`;

const cardDates = document.querySelectorAll('.card-date');
cardDates.forEach(cardDate => {
  cardDate.textContent = formattedDate;
});



const buttons = document.querySelectorAll('.buy');
const form = document.querySelector('#form');
const popup = document.querySelector('.popup');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
  });
}); 

function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}

