$(document).ready(() => {
  $(document).on("click", "#btn-create", event => {
    let userProfile = {};
    let userGoal = [];
    let user;

    userProfile.username = $("#username").val();
    userProfile.name = $("#fullname").val();
    userProfile.age = $("#user-age").val();
    userProfile.height = $("#user-height").val();
    userProfile.weight = $("#user-weight").val();

    $.post("/api/user", userProfile).then(userResponse => {
      $("#goal-section")
        .children(".form-group")
        .each(function() {
          let goalName = $(this).attr("data-goal");
          let goalMetric = $(this)
            .children(".form-control")
            .val();
          user = userResponse.id;
          userGoal.push({ name: goalName, metric: goalMetric, UserId: user });
        });

      $.post("/api/goals", { userGoal }).then(goalResponse => {
        console.log(goalResponse);
        sessionStorage.setItem("userId", user);
      });
    });
  });
});
