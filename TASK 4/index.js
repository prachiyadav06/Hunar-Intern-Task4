function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
  
    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }
  
    const bmi = weight / (height * height);
    document.getElementById('bmi-value').innerText = bmi.toFixed(2);
  
    let category = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    document.getElementById('bmi-category').innerText = category;
    document.getElementById('result').style.display = 'block';
  }
  