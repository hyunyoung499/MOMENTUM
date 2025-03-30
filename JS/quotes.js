const quotes = [
{
  quote: "세상의 문제는 바보들과 광신도들은 자기 확신이 지나친데 비해 현명한 사람들은 의심이 너무 많다는 것이다",
  author: "버드런드 러셀",
},
{
  quote: "행복은 우리 자신에게 달려있다.",
  author: "아리스토텔레스",
},
{
  quote: "한 사람의 조국은 어디든 그가 번창하는 곳이다.",
  author: "아리스토파네스",
},
{
  quote: "자유와 정의 다음으로 중요한 것은 대중 교육인데, 대중 교육 없이는 자유도 정의도 영원히 유지될 수 없다.",
  author: "제임스 A. 가필드",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;