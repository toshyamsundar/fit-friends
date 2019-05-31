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

  $(document).on("click", "#btn-save-activity", event => {
    let userActivity = [];

    userActivity.push({
      name: $("#activity-yoga").attr("data-activity"),
      metric: $("#activity-yoga").val(),
      UserId: sessionStorage.getItem("userId")
    });
    userActivity.push({
      name: $("#activity-weights").attr("data-activity"),
      metric: $("#activity-weights").val(),
      UserId: sessionStorage.getItem("userId")
    });
    userActivity.push({
      name: $("#activity-cardio").attr("data-activity"),
      metric: $("#activity-cardio").val(),
      UserId: sessionStorage.getItem("userId")
    });
    userActivity.push({
      name: $("#activity-water").attr("data-activity"),
      metric: $("#activity-water").val(),
      UserId: sessionStorage.getItem("userId")
    });
    userActivity.push({
      name: $("#activity-calories").attr("data-activity"),
      metric: $("#activity-calories").val(),
      UserId: sessionStorage.getItem("userId")
    });
    userActivity.push({
      name: $("#activity-sleep").attr("data-activity"),
      metric: $("#activity-sleep").val(),
      UserId: sessionStorage.getItem("userId")
    });

    console.log(userActivity);

    $.post("/api/activities", { userActivity }).then(activityResponse => {
      console.log(activityResponse);
    });
  });
});
