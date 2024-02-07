const submitButton = document.querySelector(".submit");
const quoteContainer = document.querySelector(".quote");

const apiUrl = "https://api.quotable.io/quotes/random";

async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data) {
      displayQuote(data);
    } else {
      alert("Error : " + error);
    }
  } catch (error) {
    console.error("Error: " + error);
  }
}

function displayQuote(quote) {
  console.log("Quote: ", quote);
  quoteContainer.innerHTML = `

        <h3>"${quote[0].content}"</h3>
        <p>-- ${quote[0].author}</p>
        
    
    `;
}

submitButton.addEventListener("click", getQuote);
