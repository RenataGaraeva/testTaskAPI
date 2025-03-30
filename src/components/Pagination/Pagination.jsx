import {useEffect} from "react";
import "./Pagination.css";

export default function Pagination ({setId, id, allPosts, setChosedPosts}) {

    let countOfPages = allPosts.length / 5;
    let massive = []
    let getMassive = function (massive) {
        for (let i = 1; i <= countOfPages; i++) {
            massive.push(i)
        }
        return massive
    }
    useEffect(() => {
        let firstElement = (allPosts.length / 20) * (id - 1)
        let lastElement = (allPosts.length / 20) * id
        setChosedPosts(allPosts.slice(firstElement, lastElement))

    }, [id, allPosts, setChosedPosts])
    let changePage = function (pageNumber) {
        setId(pageNumber) //вот это я могу передать вниз, а тот useState должен остаться наверху
    }
    return (
        <div className="pagination">
            {getMassive(massive).map((page, index) => (
                <input type="button" value={page} key={index} onClick={() => changePage(page)} className="buttonForPagination"/>
            ))}
        </div>
    )
}