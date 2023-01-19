import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
    <div className='my-3'>
            <div className="card" style={{width:"18rem"}}>
            <img src={imageUrl?imageUrl:"https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-primary btn-sm" target="_blank">Read more</a>
            </div>
            </div>
    </div>
    )
  }
}

export default NewsItem