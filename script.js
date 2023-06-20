function calculateAge() {
    var birthdayInput = document.getElementById("birthday");
    var birthday = new Date(birthdayInput.value);
    var today = new Date();
    var containerDiv = document.getElementById("result");

    // Clear previous content
    containerDiv.innerHTML = '';

    if (isNaN(birthday)) {
        // Invalid date
        containerDiv.textContent = "Please select a valid date.";
        return;
    }

    if (birthday > today) {
        // Future date
        containerDiv.textContent = "Please select a valid date.";
        return;
    }


    // Calculate the age in years by subtracting the birth year from the current year
    var ageYears = today.getFullYear() - birthday.getFullYear();

    // Calculate the age in days by subtracting the birth date from the current date
    // Math.floor is used to round down the decimal value to the nearest whole number
    // The calculation is based on the number of milliseconds in a day (1000 milliseconds * 60 seconds * 60 minutes * 24 hours)
    var ageDays = Math.floor((today - birthday) / (1000 * 60 * 60 * 24));

    // Retrieve the day of the week for the birth date using the toLocaleString() method
    // The "en-US" parameter ensures that the weekday is displayed in English (United States) format
    // The { weekday: "long" } option specifies that the full weekday name should be returned
    var dayOfWeek = birthday.toLocaleString("en-US", { weekday: "long" });


    let lableDiv = document.createElement("div");
    lableDiv.classList.add("lableDiv");

    let valueDiv = document.createElement("div");
    valueDiv.classList.add("valueDiv");


    let YearsPara = document.createElement("p");
    YearsPara.innerText = "Years"

    let DayPara = document.createElement("p");
    DayPara.innerText = "Day"

    let DaysPara = document.createElement("p");
    DaysPara.innerText = "Days"


    let YearsValue = document.createElement("p");
    YearsValue.innerText = ageYears

    let DayValue = document.createElement("p");
    DayValue.innerText = dayOfWeek

    let DaysValue = document.createElement("p");
    DaysValue.innerText = ageDays

    lableDiv.append(YearsPara, DayPara, DaysPara)
    valueDiv.append(YearsValue, DayValue, DaysValue)


    containerDiv.append(lableDiv, valueDiv)


}
