import { useEffect } from "react";
import "./Pagination.css";

export default function Pagination({ setId, id, allPosts, setRenderedPosts }) {

  let countOfPages = allPosts.length / 5;
  let massiveOfPageNumbers = [];

  let pageNumbers = function (massive) {
    for (let i = 1; i <= countOfPages; i++) {
      massive.push(i);
    }
    return massive;
  };

  useEffect(() => {
    let firstPost = (allPosts.length / 20) * (id - 1);
    let lastPost = (allPosts.length / 20) * id;
    setRenderedPosts(allPosts.slice(firstPost, lastPost));
  }, [id, allPosts, setRenderedPosts]);

  let changePage = function (pageNumber) {
    setId(pageNumber);
  };

  return (
    <div className="pagination">
      {pageNumbers(massiveOfPageNumbers).map((page, index) => (
        <input
          type="button"
          value={page}
          key={index}
          onClick={() => changePage(page)}
          className="buttonForPagination"
        />
      ))}
    </div>
  );
}