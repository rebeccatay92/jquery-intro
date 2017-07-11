$(document).ready(function () {
  var $form = $('form')
  var $addHome = $('#addHome')
  var $tbody = $('tbody')
  var $removeHome = $('.removeHome')

  $form.on('submit', function (event) {
    // stop form submission
    // default event
    event.preventDefault()
    // serialize grabs all input field data. needs name field to be filled
    var form_data = $(this).serializeArray()
    addNewRow(form_data)
  })

  function addNewRow (data) {
    // add new row with 5 columns and 1 remove button
    $newTr = $('<tr></tr>')
    $tbody.append($newTr)

    var $lastRow = $('tr').last()
    for (i = 0; i < data.length; i++) {
      $newTd = $('<td></td>')
      $newTd.text(data[i].value)
      $lastRow.append($newTd)
    }
    $lastRow.append('<td><button class="btn btn-xs btn-danger removeHome">Remove</button></td>')
  }

  //event delegation. target the parent which is always there and delegate event to new children getting appended later
  $tbody.on('click', '.removeHome', function() {
    var $removeTr = $(this).parents('tr')
    $removeTr.remove()
  })

}) // close doc.ready
