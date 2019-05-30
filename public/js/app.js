$(document).on("click", "#btn-create", event => {
  let userProfile = {};

  let userGoal = {};

  userProfile.username = $("#username").val();
  userProfile.name = $("#fullname").val();
  userProfile.age = $("#user-age").val();
  userProfile.height = $("#user-height").val();
  userProfile.weight = $("#user-weight").val();

  console.log(userProfile);

  $.post("/api/user", userProfile).then(response => {
    console.log(response);
  });
});
