        var itemLink = document.querySelector(".buy");

        var itemPopup = document.querySelector(".modal-item");
        var itemClose = itemPopup.querySelector(".modal-close");

        itemLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          itemPopup.classList.add("modal-show-item");
        });

        itemClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          itemPopup.classList.remove("modal-show-item");
        });

        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (itemPopup.classList.contains("modal-show-item")) {
              itemPopup.classList.remove("modal-show-item");
            }
          }
        });

        var link = document.querySelector(".open-modal-contacts");

      var popup = document.querySelector(".modal-letter");
      var close = popup.querySelector(".modal-close");

      var form = popup.querySelector(".form-flex-modal");
      var firstname = popup.querySelector("[name=name-letter]");
      var mail = popup.querySelector("[name=mail-letter]");
      var message = popup.querySelector("[name=text-letter]");

      var isStorageSupport = true;
      var storage = "";
  
      try {
        storage = localStorage.getItem("name-letter");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show-letter");

        if (storage) {
          firstname.value = storage;
          mail.focus();
        } else {
          firstname.focus();
        }
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show-letter");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        if (!firstname.value || !mail.value || !message.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
          console.log("Нужно ввести логин и пароль");
        } else {
          if (isStorageSupport) {
          localStorage.setItem("name-letter", firstname.value);
          }
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show-letter")) {
            popup.classList.remove("modal-show-letter");
            popup.classList.remove("modal-error");
          }
        }
      });

      var mapLink = document.querySelector(".open-modal-map");

      var mapPopup = document.querySelector(".modal-map");
      var mapClose = mapPopup.querySelector(".modal-close");

      mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show-map");
      });

      mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show-map");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (mapPopup.classList.contains("modal-show-map")) {
            mapPopup.classList.remove("modal-show-map");
          }
        }
      });