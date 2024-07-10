document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("sel1");
  var options = select.options;

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#add8e6"; // Light blue background
      this.style.color = "#fff"; // White text color
    });

    options[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = ""; // Reset to default
      this.style.color = ""; // Reset to default
    });
  }
});

let exp_type;
function toggleDivs(element) {
  var exp = element.querySelector("p");
  exp_type = exp.textContent;
  var prev_page = document.getElementById("first");
  var next_page = document.getElementById("second");
  prev_page.style.display = "none";
  next_page.style.display = "block";
}

// //////////////////////////////////////////////////////////////////
// ============================Second =================================

var license = "";

function updateNextButtonState() {
  if (license === "") {
    document.getElementById("second-next").classList.add("disabled");
  } else {
    document.getElementById("second-next").classList.remove("disabled");
  }
}

function disableOtherButtons(clickedId) {
  var buttons = ["redtaxi", "blacktaxi", "nolicense"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}
function enableAllButtons() {
  var buttons = ["redtaxi", "blacktaxi", "nolicense"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}

function secondCheck1() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";

  var img_container_dom = document.querySelector(".next-img-second");
  var red_taxi_dom = document.getElementById("redtaxi");

  if (license === "普通免許") {
    license = "";
  } else {
    license = "普通免許";
  }
  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";

  updateNextButtonState();
}
function secondCheck2() {
  var img_container_dom = document.querySelector(".next-img-second");
  var black_taxi_dom = document.getElementById("blacktaxi");
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
  if (license === "⼆種免許") {
    license = "";
    enableAllButtons();
    img_container_dom.style.top = "2.5rem";
    black_taxi_dom.style.backgroundColor = "";
  } else {
    license = "⼆種免許";
  }
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";

  updateNextButtonState();
}

function secondCheck3() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
  var no_license_dom = document.getElementById("nolicense");

  if (license === "免許は持っていない") {
    license = "";
    enableAllButtons();
    no_license_dom.style.backgroundColor = "";
  } else {
    license = "免許は持っていない";
    disableOtherButtons("nolicense");
  }
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";

  updateNextButtonState();
}
// Initial check to ensure the second-next button is disabled on page load
function gotoFirst() {
  var prev_page = document.getElementById("first");

  var secondpage = document.getElementById("second");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second Page
  secondpage.style.display = "none";

  enableAllButtons();
}

///////////////////////////////////////////////////////////////
// ==========================Third=============================
function secondHidden() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}
function updateThirdNextButtonState() {
  if (license === "") {
    document.getElementById("third-next").classList.add("disabled");
  } else {
    document.getElementById("third-next").classList.remove("disabled");
  }
}

var changing_jobs_time = "";
function disableJob(clickedId) {
  var buttons = ["plane", "train", "bus", "bike", "rickshaw"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}

function thirdCheck(element) {
  changing_jobs_time = element.querySelector("span").textContent;
  var prev_page = document.getElementById("third");
  var next_page = document.getElementById("four");
  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";
}
// ///////////////////////////Fourth/////////////////////////////////////
// ////////////////////////////////////////////////////////////////
function gotoSecond() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");
  enableAllButtons();
  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

let changing_job_reasons = [];

function updateFourNextButtonState() {
  // Check if at least one element in the array is not null

  if (changing_job_reasons.length !== 0) {
    document.getElementById("four-next").classList.remove("disabled");
  } else {
    document.getElementById("four-next").classList.add("disabled");
  }
}

function fourClick(element) {
  let clicked_reason = element.textContent;
  if (changing_job_reasons.includes(clicked_reason)) {
    changing_job_reasons = changing_job_reasons.filter(
      (reason) => reason !== clicked_reason
    );
    element.style.backgroundColor = "";
  } else {
    changing_job_reasons.push(clicked_reason);
    element.style.backgroundColor = "#93d7dc";
  }
  updateFourNextButtonState();
  const img_container_dom = document.querySelector(".next-img-four");
  img_container_dom.style.top = "380px";
}
// /////////////////////////   Five    ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function gotoThird() {
  var prev_page = document.getElementById("third");

  var next_page = document.getElementById("four");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

function fourHidden() {
  var prev_page = document.getElementById("four");

  var next_page = document.getElementById("five");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

let taxi_attracts = [];
function updateFiveNextButtonState() {
  if (taxi_attracts.length !== 0) {
    document.getElementById("five-next").classList.remove("disabled");
  } else {
    document.getElementById("five-next").classList.add("disabled");
  }
}

function fiveClick(element) {
  let taxi_attract = element.textContent;
  if (taxi_attracts.includes(taxi_attract)) {
    taxi_attracts = taxi_attracts.filter((reason) => reason !== taxi_attract);
    element.style.backgroundColor = "";
  } else {
    taxi_attracts.push(taxi_attract);
    element.style.backgroundColor = "#93d7dc";
  }
  updateFiveNextButtonState();
  const img_container_dom = document.querySelector(".next-img-five");
  img_container_dom.style.top = "340px";
}

// ////////////// newstep /////////////////////////

// //////////////////////////  Six  ///////////////////////////////////
// /////////////////////////////////////////////////////////////
function gotoFour() {
  var prev_page = document.getElementById("four");

  var next_page = document.getElementById("five");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

function fiveHidden() {
  var prev_page = document.getElementById("five");

  var next_page = document.getElementById("six");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

let residence = "";

function disableOtherArea(clickedId) {
  var buttons = ["sixArea1", "sixArea2", "sixArea3", "sixArea4", "sixArea5"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}

function enableAllArea() {
  var buttons = ["sixArea1", "sixArea2", "sixArea3", "sixArea4", "sixArea5"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}

function sixAreaClick(element) {
  const img_container_dom = document.querySelector(".next-img-six");
  if (residence !== "") {
    residence = "";
    element.style.backgroundColor = "";
    img_container_dom.style.top = "0px";
    enableAllArea();
  } else {
    residence = element.textContent;
    element.style.backgroundColor = "#93d7dc";
    img_container_dom.style.top = "340px";
    disableOtherArea(element.id);
  }
}
function updateSixNextButtonState() {
  if (commute_ways.length !== 0) {
    document.getElementById("six-next").classList.remove("disabled");
  } else {
    document.getElementById("six-next").classList.add("disabled");
  }
}
let commute_ways = [];

function sixWayClick(element) {
  let six_way = element.textContent;
  const img_container_dom = document.querySelector(".next-img-six");
  if (commute_ways.includes(six_way)) {
    commute_ways = commute_ways.filter((reason) => reason !== six_way);
    element.style.backgroundColor = "";
  } else {
    commute_ways.push(six_way);
    element.style.backgroundColor = "#93d7dc";
  }
  if (commute_ways.length === 0) {
    img_container_dom.style.top = "340px";
    updateSixNextButtonState();
  } else {
    updateSixNextButtonState();
    img_container_dom.style.top = "510px";
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  const img_container_dom = document.querySelector(".next-img-six");
  let inputStation = document.getElementById("nearest_station");
  inputStation.addEventListener("input", () => {
    if (inputStation.value.length > 1) {
      img_container_dom.style.top = "590px";
    } 
  });
});
function gotoFive() {
  var prev_page = document.getElementById("five");
  var next_page = document.getElementById("six");
  post_number = "";
  nearest_station = "";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
}
function sixHidden() {
  var prev_page = document.getElementById("six");
  nearest_station = document.getElementById("nearest_station").value;

  var next_page = document.getElementById("newstep");

  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";
}
// //////////////  New Step /////////////////////
// six input
function newStepHidden() {
  var prev_page = document.getElementById("newstep");
  var next_page = document.getElementById("seven");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}
function gotoSix() {
  var prev_page = document.getElementById("six");
  var next_page = document.getElementById("newstep");
  var next_page_seven = document.getElementById("seven");
  const sixBeforeButton = document.getElementById('six-before');

  next_page_seven.style.display = "none";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
}
var post_number = "";
var nearest_station = "";
async function checkPost(post_num) {
  const postError = document.getElementById("postInputError");
  post_number = post_num;
  await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${post_num}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "response");
      if (data.status === 200) {
        postError.style.display = "none";
        postError.classList.remove("shake");
        setTimeout(function() {
          newStepHidden();
      }, 2000);
      } else {
        sixBefore.classList.remove("disabled");

        console.log("Address not found");
        postError.style.display = "block";
        postError.classList.add("shake");
        setTimeout(() => (postError.style.display = "none"), 2000); // Remove class after animation
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      postError.style.display = "block";
      postError.classList.add("shake");
      setTimeout(() => postError.classList.remove("shake"), 500); // Remove class after animation
    });
}
function validateNumberInput(input) {
  // Remove non-numeric characters
  input.value = input.value.replace(/[^0-9]/g, "");
}
document.addEventListener("DOMContentLoaded", (event) => {
  let inputField = document.getElementById("custom-sixinput-one");
  const postError = document.getElementById("postInputError");

  inputField.addEventListener("input", () => {
    if (inputField.value.length === 7) {
      sixBeforeButton.classList.add('disabled');
      checkPost(inputField.value);    
 
    } else if (inputField.value.length > 7) {
      sixBeforeButton.classList.remove('disabled');
      postError.style.display = "block";
      postError.classList.add("shake");
      setTimeout(() => (postError.style.display = "none"), 2000);
    } else if (inputField.value.length > 1 && inputField.value.length < 7) {
      sixBeforeButton.classList.remove('disabled');
    }     
  });
});





// ////////////////////////        Seven         ///////////////////////////////////
// ///////////////////////////////////////////////////////////
let past_accidents = [];
function updateSevenNextButtonState() {
  // Check if at least one element in the array is not null
  const img_container_dom = document.querySelector(".next-img-seven");

  if (past_accidents.length !== 0) {
    document.getElementById("seven-next").classList.remove("disabled");
    img_container_dom.style.top = "340px";
  } else {
    document.getElementById("seven-next").classList.add("disabled");
    const img_container_dom = document.querySelector(".next-img-seven");
    img_container_dom.style.top = "0px";
  }
}
function sevenAccident(element) {
  let clicked_accident = element.textContent;
  if (past_accidents.includes(clicked_accident)) {
    past_accidents = past_accidents.filter(
      (accident) => accident !== clicked_accident
    );
    element.style.backgroundColor = "";
  } else {
    past_accidents.push(clicked_accident);
    element.style.backgroundColor = "#93d7dc";
  }
  updateSevenNextButtonState();
}

function gotoNewStep() {
  var prev_page = document.getElementById("newstep");

  var next_page = document.getElementById("seven");

  document.getElementById("custom-sixinput-one").value = "";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
  post_number = "";
}

function sevenHidden() {
  var prev_page = document.getElementById("seven");

  var next_page = document.getElementById("last");
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

// ///////////////// Last ////////////////////////

function gotoSeven() {
  var prev_page = document.getElementById("seven");

  var next_page = document.getElementById("last");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}
var surname = "";
var lastname = "";

var age = "10代";
var phone_number = "";
var email = "";

var page_local_url = window.location.href
async function completeStep() {
  var name_vali = document.getElementById("nameInputError");
  var phone_vali = document.getElementById("phoneInputError");

  surname = document.getElementById("surname").value;
  lastname = document.getElementById("lastname").value;
  var selectElement = document.getElementById("sel1");
  age = selectElement.value;
  selectElement.addEventListener("change", () => {
    age = selectElement.value;
  });
  phone_number = document.getElementById("phone_number").value;
  email = document.getElementById("email").value;
  if (surname === "" || lastname === "") {
    name_vali.style.display = "block";
    name_vali.classList.add("shake");
    setTimeout(() => {
      name_vali.style.display = "none";
    }, 2000);
  } else {
    name_vali.style.display = "none";
    name_vali.classList.remove("shake");
    if (phone_number === "" || email === "") {
      phone_vali.style.display = "block";
      phone_vali.classList.add("shake");
      setTimeout(() => {
        phone_vali.style.display = "none";
      }, 2000);
    } else {
      phone_vali.style.display = "none";
      phone_vali.classList.remove("shake");
      // hubspot用で追加
      let changing_job_reasons_hubspot = new Array(changing_job_reasons.join(";"));
      let taxi_attracts_hubspot = new Array(taxi_attracts.join(";"));
      let past_accidents_hubspot = new Array(past_accidents.join(";"));
      let commute_ways_hubspot = new Array(commute_ways.join(";"));
      let sendData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          experience: exp_type,
          license: license,
          changing_jobs_time: changing_jobs_time,
          changing_job_reasons: changing_job_reasons,
          attracts_for_taxi: taxi_attracts,
          residence: residence,
          commute_ways: commute_ways,
          post_number: post_number,
          nearest_station: nearest_station,
          past_accidents: past_accidents,
          surname: surname,
          lastname: lastname,
          age: age,
          phone_number: phone_number,
          email: email,
          page_local_url,
          changing_job_reasons_hubspot,
          taxi_attracts_hubspot,
          past_accidents_hubspot,
          commute_ways_hubspot,
        }),
      };
      let url = "https://hook.us1.make.com/1od0hmbiakapcmo3h2h2id2jdki57y83";
      const data = await fetch(url, sendData);
      window.location.href = "thanks/";
    }
  }
}

function goTopPage() {
  var successModal = document.getElementById("successModal");
  successModal.style.display = "none";
  var lastPage = document.getElementById("last");
  lastPage.style.display = "none";
  var prev_page = document.getElementById("first");
  prev_page.style.display = "block";
}
