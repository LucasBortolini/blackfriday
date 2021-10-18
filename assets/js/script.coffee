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
    form.reset()
    contentType = response.headers.get('content-type')
    if contentType and contentType.indexOf('application/json') != -1
      return response.json().then (json) ->
        if !json.error
          alert('Cadastro Efetuado com Sucesso!')
        return
    return

  return 

document.addEventListener 'DOMContentLoaded', load