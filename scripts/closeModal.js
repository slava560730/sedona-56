let modalContainer = document.querySelector(".modal-container");
let modalButton = document.querySelector(".navigation-list__button");
let hotelBooking = document.querySelector(
  ".hotel-booking__search-hotels-button"
);

modalContainer.addEventListener("click", function (event) {
  let target = event.target;

  if (
    target.className === "modal-close-button" ||
    target.className === "modal-container"
  ) {
    console.log(target.className);
    modalContainer.classList.add("visually-hidden");
  }
});

modalButton.addEventListener("click", function () {
  modalContainer.classList.remove("visually-hidden");
});

hotelBooking.addEventListener("click", function () {
  modalContainer.classList.remove("visually-hidden");
});
