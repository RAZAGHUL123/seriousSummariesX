const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const results = document.querySelector('main p');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value;
  getSummary(text);
});

input.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const text = input.value;
    getSummary(text);
  }
});

async function getSummary(text) {
  const API_KEY = 'YOUR_API_KEY_HERE';
  const API_URL = `https://api.openai.com/v1/engines/davinci-codex/completions?prompt=${text}&max_tokens=50`;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  const data = await response.json();
  const summary = data.choices[0].text;
  results.textContent = summary;
}
