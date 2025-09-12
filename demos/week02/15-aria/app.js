

const notificationArea = document.getElementById('notification-area')
const generateNotif = document.getElementById('notificationButton')

generateNotif.addEventListener('click', function() {
    notificationArea.textContent = 'New email!'
})