import { useState, useEffect } from "react";
import "./Pagination.css";

export default function Pagination({ setId, id, allPosts, setRenderedPosts }) {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [firstPageNumber, setFirstPageNumber] = useState(0);
  const [lastPageNumber, setLastPageNumber] = useState(3);

  useEffect(() => {
    const countOfPages = Math.ceil(allPosts.length / 5); // Используем то же деление, что и в slice
    const massiveOfPageNumbers = [];
    for (let i = 1; i <= countOfPages; i++) {
      massiveOfPageNumbers.push(i);
    }
    setPageNumbers(massiveOfPageNumbers);
  }, [allPosts.length]);

  useEffect(() => {
    let firstPost = (allPosts.length / 20) * (id - 1);
    let lastPost = (allPosts.length / 20) * id;
    setRenderedPosts(allPosts.slice(firstPost, lastPost));
  }, [id, allPosts, setRenderedPosts]);

  let changePage = function (pageNumber) {
    setId(pageNumber);
  };

  let getPreviousPage = () => {
    setFirstPageNumber((firstPageNumber) => firstPageNumber - 1);
    setLastPageNumber((lastPageNumber) => lastPageNumber - 1);
  };

  let getNextPage = () => {
    setFirstPageNumber((firstPageNumber) => firstPageNumber + 1);
    setLastPageNumber((lastPageNumber) => lastPageNumber + 1);
  };

  return (
    <div className="pagination">
      <button
        value="Назад"
        disabled={firstPageNumber === 0}
        onClick={getPreviousPage}
        className="buttonForPagination prevButton"
      >
        Назад
      </button>
      {pageNumbers.slice(firstPageNumber, lastPageNumber).map((page, index) => (
        <input
          type="button"
          value={page}
          key={index}
          onClick={() => changePage(page)}
          className="buttonForPagination"
        />
      ))}
      <button
        value="Вперед"
        disabled={lastPageNumber === pageNumbers.length}
        onClick={getNextPage}
        className="buttonForPagination nextButton"
      >
        Вперед
      </button>
    </div>
  );
}
