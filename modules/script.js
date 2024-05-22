function dropDownMenu() {
  function toggleDropDownDisplayOnOff() {
    const dropdown = document.querySelector(".drop-down-list");
    dropdown.classList.toggle("visible");
  }

  function hideDropDown() {
    const dropdown = document.querySelector(".drop-down-list");
    if (dropdown) {
      dropdown.classList.remove("visible");
    }
  }

  function functionOne() {
    console.log("one");
  }
  function functionTwo() {
    console.log("two");
  }
  function functionThree() {
    console.log("three");
  }

  const buttonFunctions = [functionOne, functionTwo, functionThree];

  function addEventListenersToDropDownButtons() {
    const threeDotButton = document.querySelector(".dots");
    const dropdown = document.querySelector(".drop-down-list");
    const dropdownButtons = document.querySelectorAll(".drop-down-items>li");

    threeDotButton.addEventListener("click", toggleDropDownDisplayOnOff);

    dropdown.addEventListener("mouseleave", hideDropDown);

    dropdownButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        buttonFunctions[index]();
        hideDropDown();
      });
    });
  }
  document.addEventListener(
    "DOMContentLoaded",
    addEventListenersToDropDownButtons
  );
}

dropDownMenu();

export default dropDownMenu;
