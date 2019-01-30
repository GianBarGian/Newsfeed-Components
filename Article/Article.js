

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.closeButton = this.domElement.querySelector('.close');
    
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.closeButton.addEventListener('click', () => this.closeArticle());
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }

  closeArticle() {
    this.domElement.classList.add('article-close');
  }
}


const button = document.querySelector('button');
const articlesClass = document.querySelector('.articles')
let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));

//New article functionality

function addArticle() {    // I create the new DOM Object with the new values
  const userTitle = document.querySelector('#title').value;
  const userContent = document.querySelector('#content').value;
  this.date = new Date();

  const newArticle = document.createElement('div');
  const newh2 = document.createElement('h2');
  const newClose = document.createElement('span');
  const newdate = document.createElement('p');
  const newContent = document.createElement('p');
  const newExpand = document.createElement('span');

  newArticle.classList.add('article');
  newh2.textContent = userTitle;
  newClose.classList.add('close');
  newClose.textContent = 'close';
  newdate.classList.add('date')
  newdate.textContent = this.date;
  newContent.textContent = userContent;
  newExpand.classList.add('expandButton');

  newArticle.appendChild(newh2);
  newArticle.appendChild(newClose);
  newArticle.appendChild(newdate);
  newArticle.appendChild(newContent);
  newArticle.appendChild(newExpand);

  return newArticle;
}

button.addEventListener('click', (event) => { // The user trigger the data input and the new render with just one click
  event.preventDefault();
  articlesClass.appendChild(addArticle()); // Here it appendes the new DOM Object as the last element of .articles
  new Article(articlesClass.lastChild); // and here it construct the new Article
})

