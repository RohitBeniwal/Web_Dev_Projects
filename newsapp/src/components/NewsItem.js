import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title , description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div     className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:"90%"}}>
    {source}
  </span>
  <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2023-02/7d8qh5o_buenos-aires-generic-getty_120x90_18_February_23.jpg?im=FaceCrop,algorithm=dnn,width=650,height=400"}     className="card-img-top" alt="..."/>
  <div     className="card-body">
    <h5     className="card-title">{title}...</h5>
    <p     className="card-text">{description}...</p>
    <p classname="card-text"><small classname="text-muted">By {author?author:"unknown"} on {new Date(date).toDateString()}</small></p>
    <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        </div>
    )
  }
}

export default NewsItem