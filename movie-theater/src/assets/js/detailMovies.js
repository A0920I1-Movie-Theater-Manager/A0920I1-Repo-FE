function chooseSeat() {
  const chair = document.querySelector('.choose_chair');
  const seat = document.querySelector('.seat');
  console.log('click');
  console.log(seat.background === "#777");

  seat.addEventListener('click', function () {
    console.log('choose seat js');
    if (seat.background === "darkgoldenrod") {
      seat.background = "#777";
    } else {
      seat.background = "darkgoldenrod";
    }
  });
}
