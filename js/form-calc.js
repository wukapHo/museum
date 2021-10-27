export function calcTicketsForm() {
  const basicCount = document.querySelector('#basic-count-form');
  const seniorCount = document.querySelector('#senior-count-form');
  const basicCountField = document.querySelector('#basic-count-field-form');
  const seniorCountField = document.querySelector('#senior-count-field-form');
  const basicPrice = document.querySelector('.basic-price');
  const seniorPrice = document.querySelector('.senior-price');
  const totalField = document.querySelector('#total-count');
  const basicSum = document.querySelector('#basic-sum-form');
  const seniorSum = document.querySelector('#senior-sum-form');
  const buttonsNumber = document.querySelectorAll('.booking-tickets__entry-button');
  const buttonsSelect = document.querySelectorAll('.form-select');
  const buttonBuy = document.querySelector('.amount__button-buy');
  const coverElem = document.querySelector('.cover');
  const buttonClose = document.querySelector('.booking-tickets__button-close');
  const select = document.querySelector('#ticket-type');
  const ticketsType = document.querySelector('.booking-tickets__right-ballot');
  const dateInput = document.querySelector('#date');
  const dateField = document.querySelector('.booking-tickets__right-date');

  const dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let basicCost;
  let seniorCost;

  const storage = window.localStorage;

  let name = storage.checked;
  if (name) document.querySelector(`#f${name}`).selected = true;

  if (storage.basic == 'undefined') storage.basic = 1;
  if (storage.senior == 'undefined') storage.senior = 1;
  if (storage.total == 'undefined') storage.total = 30;

  basicCount.value = `${storage.basic}`;
  seniorCount.value = `${storage.senior}`;
  totalField.textContent = `${storage.total}`;

  basicCountField.textContent = storage.basic;
  seniorCountField.textContent = storage.senior;

  buttonBuy.addEventListener('click', updateForm);
  coverElem.addEventListener('click', updateForm);
  buttonClose.addEventListener('click', updateForm);

  buttonsNumber.forEach(button => button.addEventListener('click', updateTicketsNumber));
  buttonsNumber.forEach(button => button.addEventListener('click', updateForm));

  select.addEventListener('change', updateSelected);
  select.addEventListener('change', updateForm);

  dateInput.addEventListener('change', updateDate);

  function updateTicketsNumber(e) {
    if (e.target === buttonsNumber[0] && storage.basic > 0) {
      --storage.basic;
      basicCountField.textContent = `${storage.basic}`;
      basicCount.value = `${storage.basic}`;
      // basicSum.textContent = cost * storage.basic;
    } else if (e.target === buttonsNumber[1] && storage.basic < 20) {
      ++storage.basic;
      basicCountField.textContent = `${storage.basic}`;
      basicCount.value = `${storage.basic}`;
    } else if (e.target === buttonsNumber[2] && storage.senior > 0) {
      --storage.senior;
      seniorCount.value = `${storage.senior}`;
      seniorCountField.textContent = `${storage.senior}`;
    } else if (e.target === buttonsNumber[3] && storage.senior < 20) {
      ++storage.senior;
      seniorCountField.textContent = `${storage.senior}`;
      seniorCount.value = `${storage.senior}`;
    }
  }

  function updateSelected(e) {
    if (e.target.value === 'permanent') {
      storage.basicCost = 20;
      basicCost = storage.basicCost;
      seniorCost = storage.basicCost / 2;
      ticketsType.textContent = 'Permanent exhibition';
    } else if (e.target.value === 'temporary') {
      storage.basicCost = 25;
      basicCost = storage.basicCost;
      seniorCost = storage.basicCost / 2;
      ticketsType.textContent = 'Temporary exhibition';
    } else if (e.target.value === 'combined') {
      storage.basicCost = 40;
      basicCost = storage.basicCost;
      seniorCost = storage.basicCost / 2;
      ticketsType.textContent = 'Combined Admission';
    }
  }

  function updateDate(e) {
    const today = new Date(e.target.value);
    dateField.textContent = `${dayOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}`;
  }

  function updateForm() {
    basicCountField.textContent = `${storage.basic}`;
    seniorCountField.textContent = `${storage.senior}`;
    basicPrice.textContent = `${storage.basicCost}`;
    seniorPrice.textContent = `${storage.basicCost / 2}`;
    basicCount.value = `${storage.basic}`;
    seniorCount.value = `${storage.senior}`;
    basicSum.textContent = `${storage.basic * storage.basicCost}`;
    seniorSum.textContent = `${storage.senior * storage.basicCost / 2}`;
    totalField.textContent = `${storage.basic * storage.basicCost + storage.senior * storage.basicCost / 2}`;

    if (buttonsSelect.value === 'permanent') {
      ticketsType.textContent = 'Permanent exhibition';
    } else if (buttonsSelect.value === 'temporary') {
      ticketsType.textContent = 'Temporary exhibition';
    } else if (buttonsSelect.value === 'combined') {
      ticketsType.textContent = 'Combined Admission';
    }
  }

  function validDate() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('#date').setAttribute('min', today);
  }


  validDate();
  updateForm();
}
