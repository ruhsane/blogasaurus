function showWhenClicked() {
    $("#identityP").show();

}
function showWhenClicked2() {
  $("#NamesP").show();

}
function showWhenClicked3() {
  $("#InterestsP").show();

}
function showWhenClicked4() {
  $("#MediasP").show();
}

function setup() {
  $("#identityP").hide();
  $("#NamesP").hide();
  $("#InterestsP").hide();
  $("#MediasP").hide();


    $("#identity").click(showWhenClicked);
    $("#Names").click(showWhenClicked2);
    $("#Interests").click(showWhenClicked3);
    $("#Medias").click(showWhenClicked4);


}

$(document).ready(setup);
