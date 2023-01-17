import {bookData} from "./book-data.js";

const body = document.querySelector("body");

class Book {
  constructor(obj, string){

    //properties of the book-data used for Book instances
      this.book = obj;
      this.comments = string;

  }


  //renders instances of books 
  renderB(bookInfo) {

  //create pieces of html

   const bContainer = document.createElement('div');
   const bTitle = document.createElement('h3');
   const bAuthor = document.createElement('h4');
   const bLang = document.createElement('h4');
   const bSub = document.createElement('p');
   //fav button
   const favContainer = document.createElement("div");
   const favButton = document.createElement("button");
   const favImage = document.createElement('img');
   //comment button
   const commContainer = document.createElement("div");
   const commButton = document.createElement("button");
   const textBox = document.createElement('input');
   const cSubButton = document.createElement("button");
   const commTextContainer = document.createElement('div');
   const commMessage = document.createElement('h4');
  

   //add content to pieces 

   //setting classes to pieces
   bContainer.setAttribute('class', 'bookWrapper');
   bTitle.setAttribute('class', 'title');
   bAuthor.setAttribute('class', 'author');
   bLang.setAttribute('class', 'lang');
   bSub.setAttribute('class', 'subject');
   //fav button 
   favContainer.setAttribute('class', 'favWrapper');
   favButton.setAttribute('class', 'fButton');
   favImage.setAttribute('class', 'fImage');
   //comment button
   commContainer.setAttribute('class', 'commWrapper');
   commButton.setAttribute('class', 'commButton');
   textBox.setAttribute('class', 'textBox');
   cSubButton.setAttribute('class', 'cSubButton');
   commTextContainer.setAttribute('class', 'commTextWrapper');
   commMessage.setAttribute('class', 'commMessage');

   //adding text/data/style to pieces
   bTitle.textContent=`TITLE: ` + bookInfo.title;
   bAuthor.textContent=`AUTHOR: ` + bookInfo.author;
   bLang.textContent=`LANG: ` + bookInfo.language.toUpperCase();
   bSub.textContent=`SUBJECT: ` + bookInfo.subject;
   //fav button
   favButton.textContent='FAVORITE';
   //comment button
   commButton.textContent='ADD COMMENTS';
   textBox.setAttribute('placeholder', 'Comments must be only 280 characters max.');
   textBox.style.display='none';
   cSubButton.textContent='SUBMIIT';
   cSubButton.style.display='none';
   commTextContainer.style.display='none';
   commMessage.style.color='black'
   commMessage.textContent="";
   commMessage.style.display='none';


   //combine them

   favContainer.append(favButton, favImage);
   commTextContainer.append(commMessage);
   commContainer.append(commButton, textBox, cSubButton, commTextContainer);
   bContainer.append(favContainer, bTitle, bAuthor, bLang, bSub, commContainer);

   

   //return 

   return bContainer;

  }

}

const bookInst = new Book();

  
class BookShelf {
  constructor () {
    //array to store Book 's as an array of objects
      this.inventory = [];
 }

 //function that adds Book's into the array
 addToBookShelf(addBook) {
  for (let i = 0; i < addBook.length; i++) {
  this.inventory.push(new Book(addBook[i]));
  }
  return this.inventory
  }

  addB(author, language, subject, title) {
    const bsSelect = document.getElementById('bookshelf');

  //creates object in style of bookData from arguments
    let newBData = {
    author: [author],
    language: language,
    subject: [subject],
    title:  title,
    comments: ""
    }

   //clear current render
    bsSelect.textContent="";
  
   //pushes new object into bookData array
   bookData.push(newBData);
  
   //returns updated bookData and invoke render creation
   return bookData + createRender();
  }

  //renders bookshelf and title
  renderBS () {

    //create pieces of html
    //navbar
    const navbar = document.createElement('div');
    const home = document.createElement('a');
    const about = document.createElement('a');
    const contact = document.createElement('a');
    const fav = document.createElement('a');
    //title 
    const tContainer = document.createElement('div');
    const title = document.createElement('h1');
    // ip box
    const ipBoxContainer = document.createElement('div');
    const addIPContainer = document.createElement('div');
    const expText = document.createElement('h3');
    const titleIP = document.createElement('input');
    const authorIP = document.createElement('input');
    const langIP = document.createElement('input');
    const subIP =  document.createElement('input');
    const textContainer = document.createElement('div');
    const reactText = document.createElement('h4');
    const addButton = document.createElement('button');
  
    //bookshelf
    const bsContainer = document.createElement('div');
    const bookshelf = document.createElement("div");
  
    //add content

    //adding text visual elements etc
    //navbar
    home.textContent='Home';
    about.textContent='About';
    fav.textContent='Favorites';
    contact.textContent='Contact';
    home.setAttribute('href','index.html');
    about.setAttribute('href','about.html');
    fav.setAttribute('href','favorites.html');
    contact.setAttribute('href','contact.html');
    //title
    title.textContent='The Bookshelf';
    //inputs
    expText.textContent="Add a book to The Bookshelf's index:";
    reactText.style.color='black'
    reactText.textContent='    ';
    addButton.textContent='ADD';
    titleIP.setAttribute('placeholder', 'Title');
    authorIP.setAttribute('placeholder', 'Author');
    langIP.setAttribute('placeholder', 'Language');
    subIP.setAttribute('placeholder', 'Subect');
    //giving pieces id's
    //navbar 
    navbar.setAttribute('id', 'navbar');
    home.setAttribute('id', 'nHome');
    about.setAttribute('id', 'nAbout');
    fav.setAttribute('id', 'nFav');
    contact.setAttribute('id', 'nContact');
    //title
    tContainer.setAttribute('id', 'titleWrapper');
    title.setAttribute('id', 'title');
    //ip box
    ipBoxContainer.setAttribute('id', 'ipBoxWrapper');
    addIPContainer.setAttribute('id', 'addIPWrapper');
    expText.setAttribute('id', 'expText');
    titleIP.setAttribute('id', 'titleIP');
    authorIP.setAttribute('id', 'authorIP');
    langIP.setAttribute('id', 'langIP');
    subIP.setAttribute('id', 'subIP');
    textContainer.setAttribute('id', 'textWrapper');
    reactText.setAttribute('id', 'reactText')
    addButton.setAttribute('id', 'addButton');
    //bookshelf
    bookshelf.setAttribute('id', 'bookshelf');
    bsContainer.setAttribute('id', 'bookshelfContainer');

    

    //combine to html
    //navbar
    navbar.append(home, about, fav, contact);
    //title
    tContainer.append(title);
    //ip box
    textContainer.append(reactText);
    addIPContainer.append(expText, titleIP, authorIP, langIP, subIP, textContainer, addButton);
    ipBoxContainer.append(addIPContainer);
    //bookshelf 
    bsContainer.append(bookshelf);
    
    

    //return 
    return body.append(navbar) + body.append(tContainer) + body.append(ipBoxContainer) 
    + body.append(bsContainer) +  console.log("created BS");
    
   
  }

}

const addBooks =  new BookShelf();


//map function for creating renders

const createRender = () => { 
  
  // clears BookShelf inventory array
  addBooks.inventory.length = 0;

  console.log(addBooks.inventory);
  
  //build's bookshelf inventory
  addBooks.addToBookShelf(bookData);
  
    addBooks.inventory.map((element) => {
    //if statement with conditional to build render bookshelf if not already created 
     if (!document.getElementById('bookshelf')) { 
      return addBooks.renderBS() 
     } 
  
    const bsSelect = document.getElementById('bookshelf')
    const bookRender = bookInst.renderB(element.book);


    return bsSelect.append(bookRender); 
     
    })
  };
  
  //fires initial rendering
  createRender();

  const sBookButton = document.getElementById('addButton');

  //add book button
  sBookButton.addEventListener('click', function () {
  
  //create selectors
  const author = document.getElementById('authorIP');
  const lang = document.getElementById('langIP');
  const sub = document.getElementById('subIP');
  const title = document.getElementById('titleIP');
  const message = document.getElementById('reactText');
   
   //reset input box message content
   message.textContent="";

   //makes sure text goes back to original color if needed
   message.style.color='black';

   //conditional that gives error msg if any of the input fields are empty 
   if (author.value =="" || lang.value =="" || sub.value ==""|| title.value ==""){
     message.style.color='red';
     return message.textContent="ERROR: Please fill out all text fields to add a book to the index."
   }

     //runs the add book function with values of the text inputs as args
     addBooks.addB(author.value, lang.value, sub.value, title.value);


      return message.textContent="Book successfully added too The Bookshelf index!";
      //}
  });



const commentB = document.querySelectorAll('.commButton');
const commSub = document.querySelector('.cSubButton');



// comment button 

//foreach loop to go through the various buttons
commentB.forEach(element => {

element.addEventListener('click', function (event) {
       
// commB().addEventListener('click', function () {
    
  //need to figure out how to get the selectors working in a foreach loop to targer current area
    //create selectors 
  const  textIP = document.querySelector('.textBox');
  const  submit = document.querySelector('.cSubButton');
  const  cTContainter = document.querySelector('.commTextWrapper');
  const  commText = document.querySelector('.commMessage');

 console.log(element);

    textIP.style.display='block';
    submit.style.display='block';
    cTContainter.style.display='block';
    commText.style.display='block';
  });

});


// submit comment button

commSub.addEventListener('click', function (event) {
    
  //create selectors 
  const  textIP = document.querySelector('.textBox');
  const  submit = document.querySelector('.cSubButton');
  // const  cTContainter = document.querySelector('.commTextWrapper');
  const  commText =document.querySelector('.commMessage');
  
  //clears input box message content and textbox
  commText.textContent="";
  textIP.textContent="";

    //makes sure text is back to original color if needed
  commText.style.color='black';

  //executes if comment is the correct length
   if (textIP.value.length <= 280 && textIP.value.length != 0){
     textIP.style.display='none';
     submit.style.display='none';
     //return comment to HTML
     return commText.textContent="COMMENTS: " + textIP.value;

  //sends error message if comment is too long
  }else if (textIP.value.length > 280){
     commText.style.color='red';

     return commText.textContent="ERROR: cannot submit, comment goes over 280 character limit."

  //sends error message if submitted with no comment
  }else if (textIP.value.length === 0) {
     commText.style.color='red';
     return commText.textContent="ERROR: comment field is empty. There is nothing to submit"
  }

});