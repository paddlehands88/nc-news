import { Routes, Route } from 'react-router-dom'
import ListArticles from './ListArticles';

function Content() {

    return(
        <div>
        <h3>Content component placeholder</h3>
        <Routes>
            <Route path="/" element={<ListArticles />}/>
            
        </Routes>
        </div>
    )
};

export default Content;