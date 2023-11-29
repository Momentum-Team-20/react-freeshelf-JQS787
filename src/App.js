import "./App.css";
import bookData from "./book-data.json";

function App() {
  return (
    
      
      <div className="App">
      
      {
        bookData.map( bookdata => {
          return(
            <div className="box">
             <h1>{ bookdata.title }</h1>
             { bookdata.author }
             <p></p>
             { bookdata.url }

            </div>
          )
        })
      }

      
      
      
      
      {/* Use bookData to show books on the page*/}
    </div>
  )
}
  
   

export default App;
