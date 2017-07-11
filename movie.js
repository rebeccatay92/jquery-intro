$(document).ready(function () {
  // run ajax now
  // 2 methods = GET and POST

  var discover_movie_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83ebcfbe2592e4358658da3522dad3ff'
  var image_url = 'https://image.tmdb.org/t/p/w300/'
  var $ul = $('ul')
  var $searchButton = $('button')

  $.get(discover_movie_url)
    .done(function (data) {
      var movie_arr = data.results

      movie_arr.forEach(function (movie) {
        var $createdList = createList(movie)
        $ul.append($createdList)
      })


    }) //close .get(discover_movie_url)

  // input: obj
  // output: jquery object
  // jquery object => <li> <img src=""> </li>
  function createList (obj) {
    var $newLi = $('<li>')
    var $newImg = $('<img>')

    $newImg.attr({
      src: image_url + obj.poster_path,
      alt: obj.title
    })
    $newLi.append($newImg)
    return $newLi
  }
  function clearList () {
    var $list = $('ul li')
    $list.remove()
  }

  var $searchForm = $('form')

  $searchForm.on('keyup', function() {
    event.preventDefault()
    var $searchString = $(this).serializeArray()[0].value
    var search_movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=81566214b9b2cb916da64b9c5830f84d&language=en-US&query=' + $searchString
    clearList()
    $.get(search_movie_url)
      .done(function (data) {
        var movie_arr = data.results

        movie_arr.forEach(function (movie) {
          var $createdList = createList(movie)
          $ul.append($createdList)
        })
      }) //close .get
  }) //close keyup

  $searchForm.on('submit', function() {
    event.preventDefault()
  })

  $(document).on({
    ajaxStart: function() {$('h1').text('Please wait...')},
    ajaxStop: function() {$('h1').text('Search Movie')}
  })
}) //close doc.ready

// var searchURL = https://api.themoviedb.org/3/search/movie?api_key=81566214b9b2cb916da64b9c5830f84d&language=en-US&query=
//string here with special characters and spaces replaced
// space is %20, : %3A / %2F '%27 "%22
