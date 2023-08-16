import { useEffect, useState, Suspense } from 'react'
import './App.css';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar';
import { createResource as fetchData } from './helper'


function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  const API_URL = "https://itunes.apple.com/search?term="

//   useEffect(() => {
//     if(search) {
//     const fetchData = async () => {
// document.title= `${search} Music`
// const response = await fetch(API_URL + search)
// const resData = await response.json()
// if (resData.results.length) {
//   setData(resData.results)
//   } else {
//     setMessage("Not found!")
//   }
// } 
//   fetchData()
//   }
// }, [search])

useEffect(() => {
  if (searchTerm) {
      setData(fetchData(searchTerm))
  }
}, [searchTerm])



const handleSearch = (e, term) => {
  e.preventDefault()
  setSearch(term)
}



const renderGallery = () => {
  if(data){
      return (
          <Suspense fallback={<h1>Loading...</h1>} />
              <Gallery data={data} />
          </Suspense>
      )
  }
}

return (
  <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
  </div>
)


export default App;
