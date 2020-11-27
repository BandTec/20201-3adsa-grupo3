import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxsQuoteAltLeft from '@iconify/icons-bx/bxs-quote-alt-left';

import './comment-box.css';

function CommentBox() {
    return (
        <div className="commentBox">
            <div className="pd-v-32 flex alcont-center">
                <div>
                    <Icon icon={bxsQuoteAltLeft} className="pd-h-16" style={{fontSize: '39.552127838134766px'}} />
                </div>
                <div className="commentText txtal-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, est porro accusantium recusandae laborum eum quas voluptate enim facilis vel quis esse a corrupti placeat magni dolores. Praesentium, asperiores laboriosam.
                    <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, est porro accusantium recusandae laborum eum quas voluptate enim facilis vel quis esse a corrupti placeat magni dolores. Praesentium, asperiores laboriosam.
                </div>
                <div>
                    <Icon icon={bxsQuoteAltLeft} className="pd-h-16 iconRotate" style={{fontSize: '39.552127838134766px'}} />
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
