import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("hello i am a constructor from news component")
        this.state= {
            articles:[],
            loading: false,
            page:0,
        }
    }

   async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=08715ee7afb247a88e1a0460c261a142&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }
    handlePrevClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=08715ee7afb247a88e1a0460c261a142&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async() =>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/20))
        {

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=08715ee7afb247a88e1a0460c261a142&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
        page: this.state.page+1,
        articles: parsedData.articles
        })
        }
        
    }
  render() {
    return (
    <div className="container my-3" >
    <h2>Top HeadLines</h2>
    <div className="row">
    {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
    })}
    
    </div>
    <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} className="btn btn-primary my-2 mx-2 btn-dark" type="button" onClick={this.handlePrevClick}>&larr; Previous</button>
    <button  className="btn btn-primary my-2 mx-2 btn-dark" type="button" onClick={this.handleNextClick}>Next &rarr;</button>
    </div>
    </div>
    )
  }
}

export default News