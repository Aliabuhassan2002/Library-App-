import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون ",
      author: "ابن خلدون ",
      isbn: "1289499030"
    },
    {
      id: 2,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "893847239479"
    },
    {
      id: 3,
      title: "ثلاثية القاهرة ",
      author: " نجيب محفوظ",
      isbn: "893847239479"
    },
    {
      id: 4,
      title: "نظرية الفستق",
      author: " فهد عامر الأحمدي",
      isbn: "893847239479"
    },
    {
      id: 5,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "893847239479"
    }
  ]


}



class Home extends React.Component {

}

class Header extends React.Component {

}
class Main extends React.Component {

  constructor() {
    super();
    this.state = [

      {
        id: 1,
        title: "مقدمة ابن خلدون ",
        author: "ابن خلدون ",
        isbn: "1289499030"
      },
      {
        id: 2,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479"
      },
      {
        id: 3,
        title: "ثلاثية القاهرة ",
        author: " نجيب محفوظ",
        isbn: "893847239479"
      },
      {
        id: 4,
        title: "نظرية الفستق",
        author: " فهد عامر الأحمدي",
        isbn: "893847239479"
      },
      {
        id: 5,
        title: "الحاوي في الطب ",
        author: "ابو بكر الرازي ",
        isbn: "893847239479"
      }

    ];
  }

  render() {
    return (
      <>
        {this.state.map(book =>
          <div class="book-card">
            <div class="book-info">
              <h2 class="book-title">{book.title}</h2>
              <p class="book-author">{book.author}</p>
              <p class="book-description">
                {book.isbn}
              </p>
            </div>
          </div>
        )}
      </>
    )
  }

}
class Footer extends React.Component {

}
export default Main
// const listItems = initState.map(book =>
//   <li key={book.id}>
//     {book.title}
//     {book.author}

//   </li>
// )
// export default function Profile() {
//   return (
//     <ul>
//       {listItems}
//     </ul>


//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
