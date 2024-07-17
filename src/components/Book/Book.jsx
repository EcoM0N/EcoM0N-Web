import React from "react";
import Bookback from "../../assets/image/Bookback.png";
import { Link, useNavigate } from "react-router-dom";
import Onefish from "../../assets/image/1.png";
import Twofish from "../../assets/image/2.png";
import Threefish from "../../assets/image/3.png";
import Fourfish from "../../assets/image/4.png";
import Fivefish from "../../assets/image/5.png";
import Sixfish from "../../assets/image/6.png";
import Sevenfish from "../../assets/image/7.png";
import Eightfish from "../../assets/image/8.png";
import Ninefish from "../../assets/image/9.png";
import ReactPaginate from "react-paginate";
import "./Book.css";

const Book = () => {
  const imageData = [
    Onefish,
    Twofish,
    Threefish,
    Fourfish,
    Fivefish,
    Sixfish,
    Sevenfish,
    Eightfish,
    Ninefish,
  ];

  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 6;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = imageData.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/Book/view`);
  };
  ///${index}

  return (
    <div>
      <img className="bookBackImg" src={Bookback} alt="도감 배경" />
      <div className="Bookbook">
        {currentItems.map((image, index) => (
          <img
            className="BookbtnImg"
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="Paging">
        {imageData.length > itemsPerPage && (
          <ReactPaginate
            className="PagingBtn"
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(imageData.length / itemsPerPage)}
            previousLabel="<"
            nextLabel=">"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
          />
        )}
      </div>

      <div className="bottomBtn">
        <Link to={`/Main`}>
          <button className="backBtn">뒤로가기</button>
        </Link>
      </div>
    </div>
  );
};
export default Book;
