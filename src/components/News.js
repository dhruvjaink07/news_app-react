import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f7bd23aafae148ef948af6c8c2c2ef27&pagesize=20"
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }
    handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f7bd23aafae148ef948af6c8c2c2ef27&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    handleNextClick = async () => {
        console.log("Next Page"); 
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f7bd23aafae148ef948af6c8c2c2ef27&page=${this.state.page + 1}&pagesize=20`
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({
            page : this.state.page + 1,
            articles: parseData.articles
        })
    }
    }
    render() {
        console.log("render")
        return (
            <><div className="container my3">
                <h1>NewsMonkey - Top HeadLine</h1>
               
                <div className="row">
                {this.state.articles.map((element)=>{
                return (<div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>)
                 })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
            </>
        )
    }
}

export default News;