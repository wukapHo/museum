export function viewTicketsPopup() {
  const ticketsButton = document.querySelector('.amount__button-buy');
  const coverElem = document.querySelector('.cover');
  const bookingTicketsForm = document.querySelector('.booking-tickets');
  const buttonClose = document.querySelector('.booking-tickets__button-close');

  ticketsButton.addEventListener('click', () => {
    coverElem.classList.toggle('cover--hidden');
    bookingTicketsForm.classList.toggle('booking-tickets--hidden');
  })

  coverElem.addEventListener('click', () => {
    coverElem.classList.toggle('cover--hidden');
    bookingTicketsForm.classList.toggle('booking-tickets--hidden');
  })

  buttonClose.addEventListener('click', () => {
    coverElem.classList.toggle('cover--hidden');
    bookingTicketsForm.classList.toggle('booking-tickets--hidden');
  })
}

export function rippleButton() {
  const buttonBook = document.querySelector('.booking-tickets__button');

  buttonBook.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.getBoundingClientRect().top;
    const buttonLeft = event.target.getBoundingClientRect().left;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;


    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  })
}
