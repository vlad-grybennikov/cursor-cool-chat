import React, {Component} from "react";
import moment from "moment";
import {
    NewsContent,
    NewsDate,
    NewsImage, NewsInnerWrapper,
    NewsTitle,
    NewsWrapper,
    SingleNewsWrapper
} from "./news.view";
import {Heading} from "../common/heading";


export default class News extends Component {
    state = {
        news: [{
            title: "Test News",
            date: "2020-04-25 15:43",
            image: "https://www.dw.com/image/47715732_303.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, in quos. Ab ad atque dicta dolorem ea enim eveniet iusto quia ut! Culpa distinctio eaque error est, facilis repellat sed?"
        }, {
            title: "Test News",
            date: "2020-04-19 15:43",
            image: "https://www.dw.com/image/47715732_303.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, in quos. Ab ad atque dicta dolorem ea enim eveniet iusto quia ut! Culpa distinctio eaque error est, facilis repellat sed?"
        }, {
            title: "Test News",
            date: "2020-02-19 15:43",
            image: "https://www.dw.com/image/47715732_303.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, in quos. Ab ad atque dicta dolorem ea enim eveniet iusto quia ut! Culpa distinctio eaque error est, facilis repellat sed?"
        }, {
            title: "Test News",
            date: "2020-01-19 15:43",
            image: "https://www.dw.com/image/47715732_303.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, in quos. Ab ad atque dicta dolorem ea enim eveniet iusto quia ut! Culpa distinctio eaque error est, facilis repellat sed?"
        }, {
            title: "Test News",
            date: "2019-02-19 15:43",
            image: "https://www.dw.com/image/47715732_303.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, in quos. Ab ad atque dicta dolorem ea enim eveniet iusto quia ut! Culpa distinctio eaque error est, facilis repellat sed?"
        }]
    }

    render() {
        return (
            <NewsWrapper>
                <Heading>News</Heading>
                <NewsInnerWrapper>
                    {this.state.news.map((news) => (
                        <SingleNewsWrapper>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsDate>{moment(news.date).toNow()}</NewsDate>
                            <NewsImage image={news.image}/>
                            <NewsContent>{news.content}</NewsContent>
                        </SingleNewsWrapper>
                    ))}
                </NewsInnerWrapper>
            </NewsWrapper>
        )
    }
}