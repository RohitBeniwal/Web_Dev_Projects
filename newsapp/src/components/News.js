import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        console.log("Hello I am Constructor component from news");
        this.state={
            articles:[],
            loading: false,
            page:1

        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec5e2d5878754304a92cc917e2183ad3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data=await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
    }

    async componentDidMount(){
        this.updateNews();

    }

    handleNextClick = async ()=>{
        this.setState({page: this.state.page +1});
        this.updateNews();
        
    }
    

    handlePrevClick = async ()=>{
        this.setState({page: this.state.page -1});
        this.updateNews();
    }

  render() {
    return (
      <div className="container my-3">
        <h1 className="mb-3 text-center">NewMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
        return <div key={element.url} className="col-md-4"><NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page +1 } type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>

    );
  }
}

export default News;
