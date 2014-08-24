---
---

$(document).ready ->
	$("a.all-products-more-info").click (e) ->
    e.preventDefault()
    $(".all-products-content").slideToggle()
    $(this).html (if $(this).html() is "Less Info <span class=\"caret caret-up\"></span>" then "More Info <span class=\"caret\"></span>" else "Less Info <span class=\"caret caret-up\"></span>")
    return

  false

$(document).ready ->
  $("#option1, #option2, #option3").change ->
    $this = $(this)
    $this.attr "value", (if $this.is(":checked") then $this.attr("data-value") else "")
    return

  return