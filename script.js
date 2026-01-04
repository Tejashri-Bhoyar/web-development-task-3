function convertTemperature() {
  const input = document.getElementById("tempInput");
  const unit = document.getElementById("unitSelect").value;
  const result = document.getElementById("result");

  let temp = input.value;

  // Empty input
  if (temp === "") {
    result.style.color = "yellow";
    result.innerHTML = "Please enter a temperature value!";
    result.className = "result show";
    return;
  }
  
  // Kelvin validation (same style as empty input)
  if (unit === "K" && parseFloat(temp) < 0) {
    result.style.color = "yellow";
    result.innerHTML = "Kelvin cannot be negative!";
    result.className = "result show";
    return;
  }
  temp = parseFloat(temp);

  let convertedTemp = "";

  if (unit === "C") {
    convertedTemp = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F | Kelvin: ${(temp + 273.15).toFixed(2)}°K`;
  } 
  else if (unit === "F") {
    convertedTemp = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C | Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}°K`;
  } 
  else {
    convertedTemp = `Celsius: ${(temp - 273.15).toFixed(2)}°C | Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
  }

  // Success case
  result.style.color = "white";
  result.innerHTML = convertedTemp;

  // Animation trigger (safe)
  result.className = "result animate";
  setTimeout(() => {
    result.className = "result show";
  }, 50);
}

function resetFields() {
  document.getElementById("tempInput").value = "";
  document.getElementById("unitSelect").value = "C";
  document.getElementById("result").innerHTML = "";
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
}

// Enter key support
document.getElementById("tempInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convertTemperature();
  }
});

function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.querySelector(".theme-toggle");
  if (document.body.classList.contains("light")) {
    btn.innerHTML = "🌞";
  } else {
    btn.innerHTML = "🌙";
  }
}
