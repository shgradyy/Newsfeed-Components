// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(articleEl) {
    // assign this.domElement to the passed in domElement
    this.domElement = articleEl.querySelector('.article');
    // create a reference to the ".expandButton" class. 
    this.expandButton = articleEl.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this))
  }
  
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.expandButton.classList.toggle("hide-btn");
    this.colaspeButton.classList.toggle("hide-btn");
    this.articleEl.classList.toggle("toggle-on")
  }

}
 // Creates close button--------------------------
 closeButton = articles.createElement('span')

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');



articles.forEach( (articleEl) =>{
  return new Article(articleEl);
})