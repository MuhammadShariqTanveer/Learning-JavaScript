const apiKey = "3ff99f0452c54632898703d2099e0b0c";
const newsContainer = document.getElementById('news-container');
const newsButton = document.getElementById('newsButton');
const buttonBorder = document.getElementById('button-border');
const body= document.getElementById('body');

async function fetchNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = articles.map(article => `
        <div class="news-article">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `).join('');
}

function clickButton() {
    newsButton.style.display = 'none';  // Hide the button
    buttonBorder.style.display= 'none';
    body.style.backgroundColor = 'wheat'

    fetchNews();
}

