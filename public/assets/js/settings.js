/* Settings Page */

$(function () {
  $(".settingsPage input").prop("disabled", true);
  $(".settingsPage select").prop("disabled", true);
  $(".settingsPage .save").addClass("disabledBtn");
  $(".settingsPage #menu4 input").prop("disabled", false);

  /* Account Setting Tab */
  $(".editOne").click(function () {
    $(this).addClass("disabledBtn");
    $(".saveOne").removeClass("disabledBtn");
    $("html").addClass("active");
    $(".settingFormOne input").prop("disabled", false);
    $(".settingFormOne select").prop("disabled", false);
  });
  $(".saveOne").click(function () {
    $(".editOne").removeClass("disabledBtn");
    $(this).addClass("disabledBtn");
    $("html").removeClass("active");
    $(".settingFormOne input").prop("disabled", true);
    $(".settingFormOne select").prop("disabled", true);
  });

  $(".editTwo").click(function () {
    $(this).addClass("disabledBtn");
    $(".saveTwo").removeClass("disabledBtn");
    $("html").addClass("activeTwo");
    $(".settingFormTwo input").prop("disabled", false);
    $(".settingFormTwo select").prop("disabled", false);
  });
  $(".saveTwo").click(function () {
    $(".editTwo").removeClass("disabledBtn");
    $(this).addClass("disabledBtn");
    $("html").removeClass("activeTwo");
    $(".settingFormTwo input").prop("disabled", true);
    $(".settingFormTwo select").prop("disabled", true);
  });

  /* Privacy Setting Tab */
  $(".editThree").click(function () {
    $(this).addClass("disabledBtn");
    $(".saveThree").removeClass("disabledBtn");
    $("html").addClass("activeThree");
    $(".settingFormThree input").prop("disabled", false);
    $(".settingFormThree select").prop("disabled", false);
  });
  $(".saveThree").click(function () {
    $(".editThree").removeClass("disabledBtn");
    $(this).addClass("disabledBtn");
    $("html").removeClass("activeThree");
    $(".settingFormThree input").prop("disabled", true);
    $(".settingFormThree select").prop("disabled", true);
  });

  /* Payment Setting Tab */
  $(".editFour").click(function () {
    $(".saveFour").removeClass("disabledBtn");
    $(this).addClass("disabledBtn");
    $("html").addClass("activeFour");
    $(".settingFormFour input").prop("disabled", false);
    $(".settingFormFour select").prop("disabled", false);
  });
  $(".saveFour").click(function () {
    $(this).addClass("disabledBtn");
    $(".editFour").removeClass("disabledBtn");
    $("html").removeClass("activeFour");
    $(".settingFormFour input").prop("disabled", true);
    $(".settingFormFour select").prop("disabled", true);
  });

  $(".editFive").click(function () {
    $(this).addClass("disabledBtn");
    $(".saveFive").removeClass("disabledBtn");
    $("html").addClass("activeFive");
    $(".settingFormFive input").prop("disabled", false);
    $(".settingFormFive select").prop("disabled", false);
  });
  $(".saveFive").click(function () {
    $(".editFive").removeClass("disabledBtn");
    $(this).addClass("disabledBtn");
    $("html").removeClass("activeFive");
    $(".settingFormFive input").prop("disabled", true);
    $(".settingFormFive select").prop("disabled", true);
  });

  /* Ownership Setting Tab */

  $(".editSix").click(function () {
    $(this).addClass("disabledBtn");
    $(".saveSix").removeClass("disabledBtn");
    $("html").addClass("activeSix");
    $(".settingFormSix input").prop("disabled", false);
    $(".settingFormSix select").prop("disabled", false);
  });
  $(".saveSix").click(function () {
    $(".editSix").removeClass("disabledBtn");
    $(this).addClass("disabledBtn");
    $("html").removeClass("activeSix");
    $(".settingFormSix input").prop("disabled", true);
    $(".settingFormSix select").prop("disabled", true);
  });
  function resizeInput() {
    $(this).attr("size", $(this).val().length + 2);
  }

  $(".settingsPage input").keyup(resizeInput).each(resizeInput);
});
