import Navigation from "@/components/nav";
import Link from "next/link";
import './agentRAndR.css';
//import reviews from "./displayREAReviewAndRatings/form";

// display agent's reviews and ratings
export default function REAReviewandRatings() {
    return (
        <div className="flexContainer">
            <Navigation />
            <div className="firstElement">
                <div className="midTabs1">
                    <div className="tab1">
                        <Link className="left" href={"/agent-listing"}>Properties</Link>
                        <Link className="right" href={"/agent-review-and-rating"}>Reviews</Link>
                    </div>
                </div>
            </div>
            <h2>Review and Ratings</h2>
            <br></br>
            <div className="secondElement">
                <div className="review">
                    <div className="reviewContent">
                        <div className="username">Username: </div>
                        <div className="ratings">Ratings: </div>
                        <div className="comment-box"></div>
                    </div>
                </div>
                <div className="review">
                    <div className="reviewContent">
                        <div className="username">Username: </div>
                        <div className="ratings">Ratings: </div>
                        <div className="comment-box"></div>
                    </div>
                </div>
                <div className="review">
                    <div className="reviewContent">
                        <div className="username">Username: </div>
                        <div className="ratings">Ratings: </div>
                        <div className="comment-box"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}