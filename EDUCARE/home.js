var subjectObject = {
    "WEST BENGAL":{
        "Alipurduar":["ALL","B.Tech","Diploma"],
        "Bankura":["ALL","B.Tech","Diploma"],
        "Birbhum":["ALL","B.Tech","Diploma"],
        "Cooch Behar":["ALL","B.Tech","Diploma"],
        "Dakshin Dinajpur":["ALL","B.Tech","Diploma"],
        "Darjeeling":["ALL","B.Tech","Diploma"],
        "Hooghly":["ALL","B.Tech","Diploma"],
        "Howrah":["ALL","B.Tech","Diploma"],
        "Jalpaiguri":["ALL","B.Tech","Diploma"],
        "Jhargram":["ALL","B.Tech","Diploma"],
        "Kalimpong":["ALL","B.Tech","Diploma"],
        "Kolkata":["ALL","B.Tech","Diploma"],
        "Malda":["ALL","B.Tech","Diploma"],
        "Murshidabad":["ALL","B.Tech","Diploma"],
        "Nadia":["ALL","B.Tech","Diploma"],
        "North 24 Parganas":["ALL","B.Tech","Diploma"],
        "Paschim Bardhaman":["ALL","B.Tech","Diploma"],
        "Paschim Medinipur":["ALL","B.Tech","Diploma"],
        "Purba Bardhaman":["ALL","B.Tech","Diploma"],
        "Purba Medinipur":["ALL","B.Tech","Diploma"],
        "Purulia":["ALL","B.Tech","Diploma"],
        "South 24 Parganas":["ALL","B.Tech","Diploma"],
        "Uttar Dinajpur":["ALL","B.Tech","Diploma"]
        }
    }
window.onload = function() {
    var subjectSel = document.getElementById("state");
    var topicSel = document.getElementById("district");
    var chapterSel = document.getElementById("type");
    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
            //empty Chapters- and Topics- dropdowns
            chapterSel.length = 1;
            topicSel.length = 1;
            //display correct values
            for (var y in subjectObject[this.value]) {
              topicSel.options[topicSel.options.length] = new Option(y, y);
            }
}
topicSel.onchange = function() 
{
//empty Chapters dropdown
chapterSel.length = 1;

//display correct values
var z = subjectObject[subjectSel.value][this.value];
for (var i = 0; i < z.length; i++) {
chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
}
}
myfunction = function () {
var districtValue = topicSel.value;
if (districtValue == "Alipurduar")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
  window.location.href = "alipurduar.html";
} else if (selectedValue === "B.Tech") {
  window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
  window.location.href = "alipurduar.html";
} else {
  alert("Select Properly");
}
}
else if (districtValue == "Bankura")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
    window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
    window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
    window.location.href = "no.html";
} else {
    alert("Select Properly");
}
}

else if (districtValue == "Birbhum")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Cooch Behar")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "coochbehar.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "coochbehar_btech.html";
} else if (selectedValue === "Diploma") {
window.location.href = "coochbehar_poly.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Dakshin Dinajpur")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "dakshindinajpur.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "btech_dakshindinajpur.html";
} else if (selectedValue === "Diploma") {
window.location.href = "diploma_dakshindinajpur.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Darjeeling")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
  window.location.href = "darjeeling.html";
} else if (selectedValue === "B.Tech") {
  window.location.href = "layoutbtech.html";
} else if (selectedValue === "Diploma") {
  window.location.href = "layoutdiploma.html";
} else {
  alert("Select Properly");
}
}
else if (districtValue == "Hooghly")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Howrah")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Jalpaiguri")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "jalpaiguri.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "btech_jpg.html";
} else if (selectedValue === "Diploma") {
window.location.href = "diploma_jpg.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Jhargram")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Kalimpong")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "kalimpong.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "kalimpong.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Kolkata")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Malda")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Murshidabad")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Nadia")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "North 24 Parganas")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Paschim Bardhaman")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Paschim Medinipur")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Purba Bardhaman")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Purba Medinipur")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Purulia")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "South 24 Parganas")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "no.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "no.html";
} else {
alert("Select Properly");
}
}
else if (districtValue == "Uttar Dinajpur")
{
var selectedValue = chapterSel.value;
if (selectedValue === "ALL") {
window.location.href = "uttardinajpur.html";
} else if (selectedValue === "B.Tech") {
window.location.href = "no.html";
} else if (selectedValue === "Diploma") {
window.location.href = "uttardinajpur.html";
} else {
alert("Select Properly");
}
}
else{
alert("Select Properly");

}
}
}