import { useState } from "react"
import axios from "axios";

export default function Vote({votes, article_id}) {

console.log(article_id, "VOTE COMP");

    const request = axios.create({
        baseURL: "https://nc-news-3tbb.onrender.com/api",
    })

    const [voteCounter, setVoteCounter] = useState(0);

    const changeVote = (value) => {
        setVoteCounter((currentVotes) => {
            return currentVotes + value;
        });
        request.patch(`/articles/${article_id}`, {inc_votes: value})
        .catch(()=>{
            setVoteCounter(0);
        });
    };

  return (
    <>
    <button
        disabled={voteCounter === 1}
        onClick={()=>{changeVote(1)}}
    >
    ⬆
    </button>
    <div>Vote: {votes + voteCounter}</div>
    <button
        disabled={voteCounter === -1}
        onClick={()=>{changeVote(-1)}}
    >
    ⬇
    </button>
    </>
  )
}

// user clicks button onClick
// change state either up or down > free re-render - GET THIS WORKING b4 API CALL FUNCTIONALITY
// patch to the api (do in this file for now!)
// no then block (if successful)
// DO need a catch block - if we enter, change the state to what is was previously (back to 0)

// onclick={setVoteCounter(1)}