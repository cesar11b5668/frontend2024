import ListItem from "./ListItem"

const Links = [
  {
    name:'Google',
    url: 'https://www.google.com'
  },
  {
    name:'Facebook',
    url: 'https://www.Facebook.com'
  },
  {
    name:'Youtube',
    url: 'https://www.youtube.com'
  }

]
function App() {
  return (
   <div>
      <h1>Links</h1>
      <hr>
      <ul>
        {
          Links.map((link)=> (
            <ListItem
            key={link.name}
            name={link.name}
            url={link.url}
            />
            
          ))
        }
      </ul>
      </hr>
     </div>
  )
}

export default App
