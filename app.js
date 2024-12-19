let title = document.getElementById("title");
let description = document.getElementById("description");
let plan = document.getElementById("plan");
let proccedbtn = document.getElementById("procced");
let cancellbtn = document.getElementById("cancel");
let goHome = document.getElementById("goHome");
let changebtn = document.getElementById("change");
let changeTitle = document.getElementById("changeTitle");
let changePrice = document.getElementById("changePrice");
let confirming = document.getElementById("loading");

function procced() {
  setTimeout(() => {
    confirming.style.display = "none";
  }, 5000);

  setTimeout(() => {
    title.innerText = "Succesfully Subscribed";
  }, 5001);

  confirming.style.display = "flex";
  description.style.display = "none";
  plan.style.display = "none";
  proccedbtn.style.display = "none";
  cancellbtn.style.display = "none";
  goHome.style.display = "block";
  goHome.ariaHidden = false;
}

function cancel() {
  title.innerText = "Subscription Cancelled";
  description.style.display = "none";
  plan.style.display = "none";
  proccedbtn.style.display = "none";
  cancellbtn.style.display = "none";
  goHome.style.display = "block";
}

const plans = [
  { name: "Annual Plan", price: "$59.99/year" },
  { name: "Daily Plan", price: "$5.99/day" },
  { name: "Monthly Plan", price: "$29.99/month" },
];

let currentIndex = 0;

function change() {
  currentIndex = (currentIndex + 1) % plans.length;
  changeTitle.innerText = plans[currentIndex].name;
  changePrice.innerText = plans[currentIndex].price;
}
