export function calcTickets() {
  const basicCount = document.querySelector('#basic-count');
  const seniorCount = document.querySelector('#senior-count');
  const buttonsRadio = document.querySelectorAll('.ticket-section__radio');
  const buttonsNumber = document.querySelectorAll('.amount__number-button');
  const total = document.querySelector('#total-cost');
  const ticketsType = document.querySelector('.booking-tickets__right-ballot');
  const storage = window.localStorage;
  let basicCost;
  let seniorCost;

  storage.setItem('basic', `${storage.basic}`);
  storage.setItem('senior', `${storage.senior}`);
  storage.setItem('total', `${storage.total}`);

  if (storage.basic == 'undefined') storage.basic = 1;
  if (storage.senior == 'undefined') storage.senior = 1;
  if (storage.total == 'undefined') storage.total = 30;
  if (storage.basicCost == 'undefined') storage.basicCost = 20;

  basicCount.value = `${storage.basic}`;
  seniorCount.value = `${storage.senior}`;
  total.textContent = `${storage.total}`;

  let id = storage.checked;
  if (id) document.querySelector(`#${id}`).checked = true;

  buttonsNumber.forEach(button => button.addEventListener('click', calcTotal));
  buttonsNumber.forEach(button => button.addEventListener('click', updateTicketsNumber));

  buttonsRadio.forEach(button => button.addEventListener('input', calcTotal));
  buttonsRadio.forEach(button => button.addEventListener('input', (e) => {
    storage.checked =  e.target.id;
  }))

  function calcTotal() {
    if (buttonsRadio[0].checked) {
      storage.basicCost = 20;
      basicCost = storage.basicCost;
      seniorCost = storage.basicCost / 2;
      ticketsType.textContent = 'Permanent exhibition';
    } else if (buttonsRadio[1].checked) {
      storage.basicCost = 25;
      basicCost = storage.basicCost;
      seniorCost = storage.basicCost / 2;
      ticketsType.textContent = 'Temporary exhibition';
    } else if (buttonsRadio[2].checked) {
      storage.basicCost = 40;
      basicCost = storage.basicCost;
      seniorCost = storage.basicCost / 2;
      ticketsType.textContent = 'Combined Admission';
    }

    total.textContent = basicCount.value * basicCost + seniorCount.value * seniorCost;
    storage.total = total.textContent;
  }

  function updateTicketsNumber(e) {
    if (e.target === buttonsNumber[0] && storage.basic > 0) {
      --storage.basic;
    } else if (e.target === buttonsNumber[1] && storage.basic < 20) {
      ++storage.basic;
    } else if (e.target === buttonsNumber[2] && storage.senior > 0) {
      --storage.senior;
    } else if (e.target === buttonsNumber[3] && storage.senior < 20) {
      ++storage.senior;
    }
  }

  calcTotal();
}
