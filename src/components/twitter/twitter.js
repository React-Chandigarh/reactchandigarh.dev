import React from 'react'
import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed';

const Twitter = () => {
    return (
        <React.Fragment>             
                <TwitterTweetEmbed options={{height: 400, width:300}} 
                tweetId={'933354946111705097'}
                />
                <TwitterFollowButton
                    screenName={'saurabhnemade'}
                />
        </React.Fragment>
    )
}

export default Twitter;