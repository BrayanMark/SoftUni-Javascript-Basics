function salary(input) {
  let n = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 1; i <= n + 1; i++) {
    let tab = String(input[i]);

    if (tab == "Facebook") {
      salary -= 150;
    }
    if (tab == "Instagram") {
      salary -= 100;
    }
    if (tab == "Reddit") {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log("You have lost your salary.");
  }
  if (salary > 0) {
    console.log(salary);
  }
}
