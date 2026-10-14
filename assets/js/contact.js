(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("contact-status");
  var button = form.querySelector('button[type="submit"]');
  var sendLabel = button ? button.textContent : "Send";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = new FormData(form);
    var name = String(data.get("name") || "").trim();
    var email = String(data.get("email") || "").trim();
    var question = String(data.get("question") || "").trim();
    var honey = String(data.get("_honey") || "");

    if (honey) {
      form.hidden = true;
      status.hidden = false;
      status.classList.add("is-success");
      status.textContent = form.dataset.thanks;
      return;
    }

    if (!name || !email || !question || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.hidden = false;
      status.classList.remove("is-success");
      status.textContent = form.dataset.invalid;
      return;
    }

    if (button) {
      button.disabled = true;
      button.textContent = form.dataset.sending;
    }
    status.hidden = true;

    fetch(form.dataset.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        question: question,
        _replyto: email,
        _subject: "New question from kathch33.github.io",
        _template: "table",
        _captcha: "false",
        _honey: ""
      })
    })
      .then(function (res) {
        if (!res.ok) throw new Error("bad status");
        return res.json();
      })
      .then(function (body) {
        if (body && String(body.success) === "false") throw new Error("not sent");
        form.hidden = true;
        status.hidden = false;
        status.classList.add("is-success");
        status.textContent = form.dataset.thanks;
      })
      .catch(function () {
        if (button) {
          button.disabled = false;
          button.textContent = sendLabel;
        }
        status.hidden = false;
        status.classList.remove("is-success");
        status.textContent = form.dataset.error;
      });
  });
})();
