const reprodusctionBtn = document.querySelectorAll('#reprodusctionBtn');

const reprodusctionContent = document.querySelectorAll('.reproductionCountryItem');



reprodusctionBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);


        if(!currentBtn.classList.contains('active')) {
            reprodusctionBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            reprodusctionContent.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }  
    });
});

document.querySelector('#reprodusctionBtn:nth-child(1)').click();