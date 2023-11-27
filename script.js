document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('madLibForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Read values from each input field
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
    const pluralNoun = document.getElementById('pluralNoun').value;

    // Create a URL-encoded string manually
    const formData = `noun=${encodeURIComponent(noun)}&adjective=${encodeURIComponent(adjective)}&verb=${encodeURIComponent(verb)}&adverb=${encodeURIComponent(adverb)}&pluralNoun=${encodeURIComponent(pluralNoun)}`;

    // Send a POST request to the server
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
      .then(response => response.text())
      .then(madLib => {
        displayMadLib(madLib);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

  function displayMadLib(madLib) {
    const madLibResult = document.getElementById('madLibResult');
    madLibResult.innerHTML = `<p>${madLib}</p>`;
  }
});
