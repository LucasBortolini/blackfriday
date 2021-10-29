(function() {
  var load, submit;

  load = function() {
    var forms;
    forms = document.getElementsByTagName('form');
    if (forms.length === 1) {
      return forms[0].addEventListener('submit', submit);
    }
  };

  submit = function(event) {
    var data, form, value;
    event.preventDefault();
    form = event.target;
    data = new FormData(form);
    value = Object.fromEntries(data.entries());
    fetch(form.action, {
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: form.method,
      body: JSON.stringify(value)
    }).then(function(response) {
      var contentType;
      form.reset();
      contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(function(json) {
          if (!json.error) {
            alert(form.dataset.feedback);
          }
        });
      }
    });
  };

  document.addEventListener('DOMContentLoaded', load);

}).call(this);
