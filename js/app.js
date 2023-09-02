let btns = document.querySelectorAll(".control");
let sectbtn = document.querySelectorAll(".controls");
let dialouge = document.querySelector(".dialouge");
// console.log(sectbtn)
// console.log(btns)
const closeDialouge = () => {
  dialouge.style.transform = "translateY(-100%)";
  dialouge.style.zIndex = -1;
};

function pageChange() {
  for (let i = 0; i < btns.length; i++) {
    // const sid = btns[i].dataset.id
    // console.log(sid)
    btns[i].addEventListener("click", () => {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.classList.remove("active-btn");
      btns[i].classList.add("active-btn");
      let currentsection = document.querySelector(".active");
      currentsection.classList.remove("active");
      console.log(currentsection);
      document.querySelector(`#${btns[i].dataset.id}`).classList.add("active");
      // console.log(sec)
      // section.classList.add('active')
      // console.log(section)
      // btns[i].dataset.id.classList.add('active')
      // console.log(btns[i].classList)
      // console.log(currentBtn)
    });
  }
}

pageChange();
