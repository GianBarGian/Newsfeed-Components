// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
// assign this.domElement to the passed in domElement
// create a reference to the ".expandButton" class. 
// Using your expandButton reference, update the text on your expandButton to say "expand"
// Set a click handler on the expandButton reference, calling the expandArticle method.

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
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }

  closeArticle() {
    this.domElement.classList.add('article-close');
  }
}

/* START HERE: 
- Select all classes named ".article" and assign that value to the articles variable.  
- With your selection in place, now chain .forEach() on to the articles variable 
  to iterate over the articles NodeList and create a new instance of Article by 
  passing in each article as a parameter to the constructor.
*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));