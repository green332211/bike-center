const tabLinks = document.querySelectorAll('.tablink');
const tabContents = document.querySelectorAll('.tabcontent');

function openTab(event, tabId) {
  tabContents.forEach((tabContent) => {
    tabContent.style.display = 'none';
  });
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}

tabLinks[0].classList.add('active');

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', function (event) {
    event.stopPropagation();
    const tabId = event.currentTarget.getAttribute('data-tab');
    openTab(event, tabId);
  });
});
