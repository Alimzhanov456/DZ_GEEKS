const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

let timerId = null;

const hideTabsContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

hideTabsContent();

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

showTabContent();

const switchTabs = () => {
    let activeTab = document.querySelector(".tabheader__item_active");
    let activeTabIndex = Array.from(tabs).indexOf(activeTab);
    hideTabsContent();
    if (activeTabIndex === tabs.length - 1) {
        showTabContent(0);
    } else {
        showTabContent(activeTabIndex + 1);
    }
};

const autoSwitchTabs = () => {
    timerId = setInterval(switchTabs, 2000);
};

autoSwitchTabs();

tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (item === target) {
                hideTabsContent();
                showTabContent(i);
                clearInterval(timerId);
                timerId = null;
                setTimeout(autoSwitchTabs, 5000);
            }
        });
    }
    
});


const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const CloseModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

openModalBtn.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

CloseModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (event) => {
    if (
      event.target.closest(".modal__content") ||
      event.target.closest(".modal__dialog")
    ) {
      return;
    } else {
      closeModal();
    }
  });

  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      openModal();
    }
  });
  