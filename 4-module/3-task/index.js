function highlight(table) {
  let rows = table.tBodies[0].rows;

  for (let row of rows) {
    let [name, age, gender, status] = row.cells;

    if (!status.dataset.available) {
      row.hidden = true;
    }

    let availableStatus = (status.dataset.available === 'true') ? 'available' : 'unavailable';
    row.classList.add(availableStatus);

    let genderType = (gender.innerText === 'm') ? 'male' : 'female';
    row.classList.add(genderType);

    if (age.innerText < 18) {
      row.setAttribute('style', 'text-decoration: line-through');
    }
  }
}
