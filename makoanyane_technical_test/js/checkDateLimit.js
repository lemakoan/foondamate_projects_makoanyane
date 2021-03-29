
function checkDateLimitExist() {
    if (document.getElementById("startDate").min.length == 0) {
        return false
    }
    return true;
}

function setDateLimitMinMax(allData) {
    var allDataKeys = Object.keys(allData);
    var startDateMin = document.getElementById("startDate").min = allDataKeys[0];
    var startDateMax = document.getElementById("startDate").max = allDataKeys[allDataKeys.length -2];
    var endDateMin = document.getElementById("endDate").min = allDataKeys[1];
    var endDateMax = document.getElementById("endDate").max = allDataKeys[allDataKeys.length -1];
    document.getElementById("startDate").value =startDateMin;
    document.getElementById("endDate").value=endDateMax;
}

