let apiurl = "https://quotes-api-self.vercel.app/quote";

async function quote() {
  let response = await fetch(apiurl);
  let data = await response.json();
  console.log(data);

  document.querySelector(".quoteapi").innerHTML = data.quote;
  document.querySelector(".author-name").innerHTML = "Author -- " + data.author;
}

quote();
