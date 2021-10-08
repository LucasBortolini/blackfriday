---
---

load = ->
  forms = document.getElementsByTagName 'form'
  if forms.length == 1
    forms[0].addEventListener 'submit', submit

submit = (event) ->
  event.preventDefault()
  # avoid to execute the actual submit of the form.
  form = event.target
  data = new FormData(form)
  value = Object.fromEntries(data.entries())

  fetch(form.action,
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    method: form.method
    body: JSON.stringify(value)
  ).then (response) ->
    contentType = response.headers.get('content-type')
    if contentType and contentType.indexOf('application/json') != -1
      return response.json().then (json) ->
        if !json.error
          console.log('Ok')
        return
    return

  return 

document.addEventListener 'DOMContentLoaded', load