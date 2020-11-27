import React from 'react';
import CommentBox from '../CommentBox/comment-box';
import './rating.css';

function Rating() {
    return (
        <div className="ratingContainer">

            <div className="ratingComment">
                <div className="commentImg">
                </div>
                <div className="ratingCommentContent">
                    <div><span>Estrelas</span></div>
                    <CommentBox />
                </div>
            </div>
        </div>
    );
}

export default Rating;
