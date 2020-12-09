import React from 'react';

const CommentIndex = props => {
    console.log('commentIndexprops:', props);
    return (
        <>
            <div class="comments">
                <div class="comment">
                    <div class="avatar">
                        <img src="https://i.pravatar.cc/300" alt="avatar" />
                    </div>
                    <div class="content">
                        <div class="author">Jenny Hess</div>
                        <div class="metadata">
                            <span class="date">Just now</span>
                        </div>
                        <div class="text">
                            Elliot you are always so right :)
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentIndex;