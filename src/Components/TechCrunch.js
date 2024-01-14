import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

export default function TechCrunch() {

    const [newsData, setNewsData] = useState(null);
    let apiKey = "9a5b88e493d44e5db9b6889d860b3043"

      useEffect( () => {
        const fetchData = async () => {
          let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9a5b88e493d44e5db9b6889d860b3043"
          let response = await fetch(url);
          let data = await response.json();
          setNewsData(data);
          //console.log(newsData.title)
      }
      fetchData();
      },[apiKey])

      return(
        <div className="container my-3">
          <h1 className="text-center"><b><u>Tech Crunch</u></b></h1>
          <div className="row">
          {newsData.articles.map((element) => {
            return (
              <div className="col-md-4 my-3">
                  <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            )
          })}
          </div>
        </div>
      )
}