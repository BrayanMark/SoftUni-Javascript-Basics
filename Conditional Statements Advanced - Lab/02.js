function weekendOrWorkingDay(input) {
    let type = input[0];

    switch (type) {
    case "Monday" :
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    console.log("Working day");
    break;
    case "Saturday":
    case "Sunday":
    console.log("Weekend");
    break;
    default:
    console.log("Error");
    break;
    }
    

}