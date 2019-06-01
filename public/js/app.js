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
        sessionStorage.setItem("userProfile", userResponse);
        window.location.replace("/profile");
      });
    });
  });

  $(document).on("click", "#btn-save-activity", event => {
    let userActivity = [];

    let userId = JSON.parse(sessionStorage.getItem("userProfile")).id;

    userActivity.push({
      name: $("#activity-yoga").attr("data-activity"),
      metric: $("#activity-yoga").val(),
      UserId: userId
    });
    userActivity.push({
      name: $("#activity-weights").attr("data-activity"),
      metric: $("#activity-weights").val(),
      UserId: userId
    });
    userActivity.push({
      name: $("#activity-cardio").attr("data-activity"),
      metric: $("#activity-cardio").val(),
      UserId: userId
    });
    userActivity.push({
      name: $("#activity-water").attr("data-activity"),
      metric: $("#activity-water").val(),
      UserId: userId
    });
    userActivity.push({
      name: $("#activity-calories").attr("data-activity"),
      metric: $("#activity-calories").val(),
      UserId: userId
    });
    userActivity.push({
      name: $("#activity-sleep").attr("data-activity"),
      metric: $("#activity-sleep").val(),
      UserId: userId
    });

    console.log(userActivity);

    $.post("/api/activities", { userActivity }).then(activityResponse => {
      console.log(activityResponse);
    });
  });

  $(document).on("click", "#btn-getStarted", event => {
    let userEmail = $("#user-email").val();
    $.get("/api/user/" + userEmail).then(userResponse => {
      console.log(userResponse);

      if (userResponse !== null) {
        sessionStorage.setItem("userProfile", JSON.stringify(userResponse));
      }
      window.location.replace("/profile");
    });
  });

  let showUserProfileSection = () => {
    let userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    if (userProfile !== null) {
      $("#current-profile").show();
      $("#new-profile").hide();
      $("#current-username").text(userProfile.username);
      $("#current-name").text(userProfile.name);
      $("#current-age").text(userProfile.age);
      $("#current-height").text(userProfile.height);
      $("#current-weight").text(userProfile.weight);
    } else {
      $("#new-profile").show();
      $("#current-profile").hide();
    }
  };

  $(window).on("load", event => {
    if (window.location.href.match("profile") !== null) {
      showUserProfileSection();
    }
  });
});
