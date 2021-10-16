import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://www.sinceindependence.com/wp-content/uploads/2019/09/Top-5-Tech-NEws.png"} className="card-img-top" alt="" style={{ height: "10rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
