import React, { useState } from 'react'

export default function News() {

    const [newsData, setNewsData] = useState([]);

    const display = async () => {
        let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7e8f5c53d3a74ea4ace232887fc95760"
        let response = await fetch(url);
        let data = await response.json();
        setNewsData(data.articles)
    }
  return (
    <>
    <button onClick={display}>Get a news</button>
    
    </>
  )
}
