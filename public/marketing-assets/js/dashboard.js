/* Sidebar Start */
$(function() {
    var width = $(window).width();
    if( width <= 991 && width >= 320) {
      
        $('#sidebar-container').addClass('sidebar-collapsed');
        $('[data-toggle=sidebar-colapse]').click(function() {
                SidebarCollapse();
        });

    }else{
        
        $('#sidebar-container').addClass('sidebar-expanded d-none d-md-block');
        $('[data-toggle=sidebar-colapse]').click(function() {
                SidebarCollapse();
                $('.menu-collapsed').toggleClass('d-none');
                $('.sidebar-submenu').toggleClass('d-none');
                $('body').toggleClass('sidebar_minimize');
        });
    }

});

function SidebarCollapse () {
    
    
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('.logo-header').toggleClass('sidebar-expanded sidebar-collapsed');
    $('.big-logo .logo-full').toggleClass('d-none');
    $('.big-logo .logo-img').toggleClass('d-none');

    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-bars fa-angle-double-right');
}

 jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("opened")
  ) {
    $(".sidebar-dropdown").removeClass("opened");
    $(this)
      .parent()
      .removeClass("opened");
  } else {
    $(".sidebar-dropdown").removeClass("opened");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("opened");
  }
});


});

/* Sidebar Ends */

 /* Chart - Dashboard Home */
  // chart colors
var colors = ['#8274E8','#C679D0','#2e3d62'];


/* bar chart */
var chBar = document.getElementById("chBar");
if (chBar) {
  new Chart(chBar, {
  type: 'bar',
  data: {
    labels: ["1st April 2024", "2nd April 2024", "3rd April 2024", "4th April 2024", "5th April 2024", "6th April 2024"],
    datasets: [{
      label: "New Listed Domains",
      data: [65, 50, 60, 70, 50, 40, 30],
      backgroundColor: colors[0]
    },
    {
      label: "Sold Domains",
      data: [85, 60, 50, 85, 56, 74, 50],
      backgroundColor: colors[1]
    }]
  },
  options: {
    legend: {
      display: true,
       position: 'bottom',
       labels: {
            color: '#000',
            font: {
               weight: 'bold'
            },
        }

    },
    scales: {
      xAxes: [{
        barPercentage: 0.6,
        categoryPercentage: 0.4
      }]
    }
  }
  });
}

/* Filter Starts */
$(document).ready(function(){        
        $(".filter-dropdown").click(function(){
        $(".edit-filter-modal").toggleClass("hidden");
        $(".view-fields-modal").addClass("hidden"); // Hide if View fields is open
    });

    $('#auctionListing').change(function() {
        if(this.checked) {
          $('.auctionType').css('display','block');  
        } else{
          $('.auctionType').css('display','none'); 
        }      
    });
});
/* Filter Ends */

/* View Fields Starts */
$(document).ready(function(){
        $(".view-fields-dropdown").click(function(){
        $(".view-fields-modal").toggleClass("hidden");
        $(".edit-filter-modal").addClass("hidden");   //Hide if Filter is open
    });
});
/* View Fields Ends */

// Filter - right Sidebar
function openNav() {
  document.getElementById("sidebarRight").style.width = "300px";
 
}

function closeNav() {
  document.getElementById("sidebarRight").style.width = "0";
 
}

/* Settings Page */

 $(function () {
            $('.settingsPage input').prop('disabled', true);
             $('.settingsPage select').prop('disabled', true);
             $('.settingsPage .save').addClass('disabledBtn');
             $('.settingsPage #menu4 input').prop('disabled', false);
              $('.settingsPage #menu4 select').prop('disabled', false);

             /* Account Setting Tab */
            $('.editOne').click(function () {
                $(this).addClass('disabledBtn');
                $('.saveOne').removeClass('disabledBtn');
                $('html').addClass('active');
                $('.settingFormOne input').prop('disabled', false);
                $('.settingFormOne select').prop('disabled', false);
            });
            $('.saveOne').click(function () {
                $('.editOne').removeClass('disabledBtn');
                $(this).addClass('disabledBtn');
                $('html').removeClass('active');
                $('.settingFormOne input').prop('disabled', true);
                $('.settingFormOne select').prop('disabled', true);
            });

            $('.editTwo').click(function () {
                $(this).addClass('disabledBtn');
                $('.saveTwo').removeClass('disabledBtn');
                $('html').addClass('activeTwo');
                $('.settingFormTwo input').prop('disabled', false);
                $('.settingFormTwo select').prop('disabled', false);
            });
            $('.saveTwo').click(function () {
                $('.editTwo').removeClass('disabledBtn');
                $(this).addClass('disabledBtn');
                $('html').removeClass('activeTwo');
                $('.settingFormTwo input').prop('disabled', true);
                $('.settingFormTwo select').prop('disabled', true);
            });

            /* Privacy Setting Tab */ 
            $('.editThree').click(function () {
                $(this).addClass('disabledBtn');
                $('.saveThree').removeClass('disabledBtn');
                $('html').addClass('activeThree');
                $('.settingFormThree input').prop('disabled', false);
                $('.settingFormThree select').prop('disabled', false);
            });
            $('.saveThree').click(function () {
                $('.editThree').removeClass('disabledBtn');
                $(this).addClass('disabledBtn');
                $('html').removeClass('activeThree');
                $('.settingFormThree input').prop('disabled', true);
                $('.settingFormThree select').prop('disabled', true);
            });

            /* Payment Setting Tab */
            $('.editFour').click(function () {
                $('.saveFour').removeClass('disabledBtn');
                $(this).addClass('disabledBtn');
                $('html').addClass('activeFour');
                $('.settingFormFour input').prop('disabled', false);
                $('.settingFormFour select').prop('disabled', false);
            });
            $('.saveFour').click(function () {
                $(this).addClass('disabledBtn');
                $('.editFour').removeClass('disabledBtn');
                $('html').removeClass('activeFour');
                $('.settingFormFour input').prop('disabled', true);
                $('.settingFormFour select').prop('disabled', true);
            });

            $('.editFive').click(function () {
                $(this).addClass('disabledBtn');
                $('.saveFive').removeClass('disabledBtn');
                $('html').addClass('activeFive');
                $('.settingFormFive input').prop('disabled', false);
                $('.settingFormFive select').prop('disabled', false);
            });
            $('.saveFive').click(function () {
                $('.editFive').removeClass('disabledBtn');
                $(this).addClass('disabledBtn');
                $('html').removeClass('activeFive');
                $('.settingFormFive input').prop('disabled', true);
                $('.settingFormFive select').prop('disabled', true);
            });

            /* Ownership Setting Tab */

            $('.editSix').click(function () {
                $(this).addClass('disabledBtn');
                $('.saveSix').removeClass('disabledBtn');
                $('html').addClass('activeSix');
                $('.settingFormSix input').prop('disabled', false);
                $('.settingFormSix select').prop('disabled', false);
            });
            $('.saveSix').click(function () {
                $('.editSix').removeClass('disabledBtn');
                $(this).addClass('disabledBtn');
                $('html').removeClass('activeSix');
                $('.settingFormSix input').prop('disabled', true);
                $('.settingFormSix select').prop('disabled', true);
            });
        function resizeInput() {
            $(this).attr('size', $(this).val().length + 2);
        }

        $('.settingsPage input')
            .keyup(resizeInput)
            .each(resizeInput);
        });

  $(".qrCodeBox").hide();
        $("#twoFactor").click(function() {
            if($(this).is(":checked")) {
                $(".qrCodeBox").show();
            } else {
                $(".qrCodeBox").hide();
            }
    });


    /* Single Input Range Picker */
  (function($) {
  function compareDates(startDate, endDate, format) {
    var temp, dateStart, dateEnd;
    try {
      dateStart = $.datepicker.parseDate(format, startDate);
      dateEnd = $.datepicker.parseDate(format, endDate);
      if (dateEnd < dateStart) {
        temp = startDate;
        startDate = endDate;
        endDate = temp;
      }
    } catch (ex) {}
    return { start: startDate, end: endDate };
  }

  $.fn.dateRangePicker = function (options) {
    options = $.extend({
      "changeMonth": false,
      "changeYear": false,
      "numberOfMonths": 2,
      "rangeSeparator": " - ",
            "useHiddenAltFields": false
    }, options || {});

        var myDateRangeTarget = $(this);
    var onSelect = options.onSelect || $.noop;
    var onClose = options.onClose || $.noop;
    var beforeShow = options.beforeShow || $.noop;
    var beforeShowDay = options.beforeShowDay;
    var lastDateRange;

    function storePreviousDateRange(dateText, dateFormat) {
      var start, end;
      dateText = dateText.split(options.rangeSeparator);
      if (dateText.length > 0) {
        start = $.datepicker.parseDate(dateFormat, dateText[0]);
        if (dateText.length > 1) {
          end = $.datepicker.parseDate(dateFormat, dateText[1]);
        }
        lastDateRange = {start: start, end: end};
      } else {
        lastDateRange = null;
      }
    }
        
    options.beforeShow = function(input, inst) {
      var dateFormat = myDateRangeTarget.datepicker("option", "dateFormat");
      storePreviousDateRange($(input).val(), dateFormat);
      beforeShow.apply(myDateRangeTarget, arguments);
    };
        
    options.beforeShowDay = function(date) {
      var out = [true, ""], extraOut;
      if (lastDateRange && lastDateRange.start <= date) {
        if (lastDateRange.end && date <= lastDateRange.end) {
          out[1] = "ui-datepicker-range";
        }
      }

      if (beforeShowDay) {
        extraOut = beforeShowDay.apply(myDateRangeTarget, arguments);
        out[0] = out[0] && extraOut[0];
        out[1] = out[1] + " " + extraOut[1];
        out[2] = extraOut[2];
      }
      return out;
    };

    options.onSelect = function(dateText, inst) {
      var textStart;
      if (!inst.rangeStart) {
        inst.inline = true;
        inst.rangeStart = dateText;
      } else {
        inst.inline = false;
        textStart = inst.rangeStart;
        if (textStart !== dateText) {
          var dateFormat = myDateRangeTarget.datepicker("option", "dateFormat");
          var dateRange = compareDates(textStart, dateText, dateFormat);
          myDateRangeTarget.val(dateRange.start + options.rangeSeparator + dateRange.end);
          inst.rangeStart = null;
                    if (options.useHiddenAltFields){
                        var myToField = myDateRangeTarget.attr("data-to-field");
                        var myFromField = myDateRangeTarget.attr("data-from-field");
                        $("#"+myFromField).val(dateRange.start);
                        $("#"+myToField).val(dateRange.end);
                    }
        }
      }
      onSelect.apply(myDateRangeTarget, arguments);
    };

    options.onClose = function(dateText, inst) {
      inst.rangeStart = null;
      inst.inline = false;
      onClose.apply(myDateRangeTarget, arguments);
    };

    return this.each(function() {
      if (myDateRangeTarget.is("input")) {
        myDateRangeTarget.datepicker(options);
      }
            myDateRangeTarget.wrap("<div class=\"dateRangeWrapper\"></div>");
    });
  };
}(jQuery));

$(document).ready(function(){
    $("#txtDateRange").dateRangePicker({
        showOn: "focus",
        rangeSeparator: " to ",
        dateFormat: "yy-mm-dd",
        useHiddenAltFields: true,
        constrainInput: true
    });
});


/*Add Domain Page Note - Include it for particular page*/

    // $(function(){
       
    //     $('#listedDate').datetimepicker({
    //         "allowInputToggle": true,
    //         "showClose": true,
    //         "showClear": true,
    //         "showTodayButton": true,
    //         "format": "MM/DD/YYYY HH:mm:ss",
    //     });

    //     $('#addDate').datetimepicker({
    //         "allowInputToggle": true,
    //         "showClose": true,
    //         "showClear": true,
    //         "showTodayButton": true,
    //         "format": "MM/DD/YYYY HH:mm:ss",
    //     });

    //      $('#expDate').datetimepicker({
    //         "allowInputToggle": true,
    //         "showClose": true,
    //         "showClear": true,
    //         "showTodayButton": true,
    //         "format": "MM/DD/YYYY HH:mm:ss",
    //     });
        
        
    // });

    // $(function() {
    //     $('.multiple-select').multipleSelect()
    // })

/* Orders Page */
 // let copyText = document.querySelector(".copy-text");

 //    copyText.querySelector("button").addEventListener("click", function () {
 //        let input = copyText.querySelector("input.text");
 //        input.select();
 //        document.execCommand("copy");
 //        copyText.classList.add("active");
 //        window.getSelection().removeAllRanges();
 //        setTimeout(function () {
 //            copyText.classList.remove("active");
 //        }, 2500);
 //    });
    // Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});