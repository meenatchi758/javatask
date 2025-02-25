const calendar = document.querySelector('.calendar');
const monthElement = document.querySelector('.month');
const daysElement = document.querySelector('.days');
const eventsElement = document.querySelector('.events');
const prevButton = document.querySelector('.prev-month');
const nextButton = document.querySelector('.next-month');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

const events = [
  { date: '2025-02-10', title: 'Project Meeting' },
  { date: '2025-02-15', title: 'Team Lunch' },
  { date: '2025-02-25', title: 'Client Presentation' }
];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const renderCalendar = () => {
  monthElement.textContent = `${months[currentMonth]} ${currentYear}`;
  daysElement.innerHTML = '';

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  
  
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('empty-cell');
    daysElement.appendChild(emptyCell);
  }

  for (let i = 1; i <= daysInMonth(currentMonth, currentYear); i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = i;

  
    const today = new Date();
    if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      dayElement.classList.add('today');
    }

  
    const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
    const event = events.find(event => event.date === dateStr);
    
    if (event) {
      dayElement.classList.add('event-day');
      dayElement.addEventListener('click', () => showEvent(event));
    }

    daysElement.appendChild(dayElement);
  }
};

const showEvent = (event) => {
  eventsElement.innerHTML = `<p><strong>${event.title}</strong> on ${event.date}</p>`;
};


prevButton.addEventListener('click', () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  renderCalendar();
});

nextButton.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  renderCalendar();
});


renderCalendar();
