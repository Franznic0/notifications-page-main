let nNotification = document.getElementById('notification-number');
const notifications = document.querySelectorAll('.notification-box');
const dots = document.querySelectorAll('dot-notred');
const btn = document.getElementById('mark-btn');

// set not read notifications number
let count = 0;
function notiNumAdj() {
    // iterate through notification
    for (let i =0; i < notifications.length; i++) {
        // check if read and if not increase count
        if(notifications[i].classList.contains('not-read')){
            count++;
        };
        // show count
        nNotification.innerText = count;
    };

};

// change read status
function changeStatus() {
    // iterate through notification
    for (let k =0; k < notifications.length; k++) {
        
        notifications[k].addEventListener('click', () => {
            if (!notifications[k].classList.contains('not-read')) {
                // mark not read
                notifications[k].classList.add('not-read');
                count++;
            } else {
                // mark as read
                notifications[k].classList.remove('not-read');
                count--;
            }
            // show count
            nNotification.innerText = count;
        });
    };
}

// mark all read
function allRead() {
        // iterate through notification
        for (let j =0; j < notifications.length; j++) {
            // remove not-read class
            if(notifications[j].classList.contains('not-read')){
                notifications[j].classList.remove('not-read');
            };    
        };
        // reset count
        count = 0;
        nNotification.innerText = count;
};

notiNumAdj();
changeStatus();