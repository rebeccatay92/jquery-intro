$(document).ready(function() {
   var h1 = document.querySelector('h1')
   var $h1 = $('h1')

  // console.log('h1', h1) // returns html node
  // console.log('$h1', $h1) // return jQ object

   // target the odd element of li
   var allLi = document.querySelectorAll('.list-item')
   var $allLi = $('.list-item-jq')

  //
  // for(var i=0; i < allLi.length; i++) {
  //   allLi[i].addEventListener('click', clickDom)
  // }
  //
  // function clickDom(event) {
  //   alert(event.target.innerText)
  // }

  // add event listener with jQuery
  $allLi.on('click', clickJq)

  function clickJq() {
    // this here is html node that is being clicked
    // this === event.target
    // native dom manipulation way
    // console.log(this.innerText)

    // console.log($(this).text())

    //getter of innerText of html node
    // this.innerText

    //setter of innerText
    // this.innerText = 'smth'
    // $(this).text('clicked')

    // if ($(this).text() === 'clicked') {
    //   $(this).text('unclicked')
    // } else {
    //     $(this).text('clicked')
    // }

    // $(this).toggleClass('shade')

  } //close clickJq()

  var $addToLunch = $('.addToLunch')
  var $lunch = $('.lunch')
  var $breakfast = $('.breakfast')

  $addToLunch.on('click', function() {
    var $firstBrekkie = $('.breakfast li').first()
    $lunch.prepend($firstBrekkie)
  })

//eat eats the first one
  var $eat = $('.eat')
  $eat.on('click', function() {
    // var $firstLunch = $('.lunch li').first()
    // traverse down the lunch object and find match
    var $firstLunch = $lunch.find('.list-item-jq:first-child')
    $firstLunch.remove()
  })

//target egg
var $traverse = $('.traverse')
var $tuesday = $breakfast.find('.tuesday')

$traverse.on('click', function() {
  console.log($tuesday.find('li').first().text())
})

//traverse up from egg
var $travUp = $('#travUp')
$travUp.on('click', function() {
  //this is html node
  // $this is jquery object
  //parent moves 1 lvl up
  //parents moves up until match
  var $tuesday = $(this).parents('.tuesday')
  $tuesday.find('h2').text('Change from egg')

})

//back to brekkie moves it back to last item in breakfast
  var $backToBrekkie = $('.backToBrekkie')
  $backToBrekkie.on('click', function() {
    var $lastLunch = $('.lunch li').last()
    $breakfast.append($lastLunch)
  })

  //rearrange lunch lolol
  $lunch.sortable()

}) //close document.ready
