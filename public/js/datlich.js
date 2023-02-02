let datlich = document.getElementById("vitri");
datlich.addEventListener("click", () => {
  window.location.href = "/datlich?step=1";
  ``;
});

// $(function () {
//   $('input[name="daterange"]').daterangepicker(
//     {
//       opens: "right",
//     },
//     function (start, end, label) {
//       console.log(
//         "A new date selection was made: " +
//           start.format("YYYY-MM-DD") +
//           " to " +
//           end.format("YYYY-MM-DD")
//       );
//     }
//   );
// });

// $(function() {
//   $('input[name="datetimes"]').daterangepicker({
//     singleDatePicker: true,
//     timePicker: true,
//     startDate: moment().startOf('hour'),
//     endDate: moment().startOf('hour').add(32, 'hour'),
//     locale: {
//       format: 'M/DD hh:mm A'
//     }
//   });
// });

// $(function () {
//   $("#demo").daterangepicker(
//     {
//       singleDatePicker: true,
//       showDropdowns: true,
//       timePicker: true,
//       startDate: "11/01/2022",
//       endDate: "11/07/2022",
//     },
//     function (start, end, label) {
//       console.log(
//         "New date range selected: " +
//           start.format("YYYY-MM-DD") +
//           " to " +
//           end.format("YYYY-MM-DD") +
//           " (predefined range: " +
//           label +
//           ")"
//       );
//     }
//   );
// });

$(function () {
  $('input[name="birthday"]').daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      timePicker: true,
      startDate: "11/01/2022",
      endDate: "11/07/2022",
    },
    function (start, end, label) {
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD") +
          " (predefined range: " +
          label +
          ")"
      );

      // logic
    }
  );
});
