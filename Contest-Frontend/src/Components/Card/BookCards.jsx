/* eslint-disable react/prop-types */
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../Color/Color";
import { Link } from "react-router-dom";

const BookCards = ({ department, books }) => {
  return (
    <DepartmentContainer>
      <DepartmentTitle>Department of {department}</DepartmentTitle>
      <BooksContainer>
        {books.map((book) => (
          <BookCard key={book.id}>
            <Link to={`/booksDetalis/${book.id}`}>
              <BookImage src={book.image_url} alt={book.title} />
              <BookAuthor>{book.author}</BookAuthor>
              <BookDetails>
                <BookTitle title={`${book.title}`}>
                  {book.title.slice(0, 15)}..
                </BookTitle>

                <div
                  style={{
                    marginBottom: "-8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <BookPrice>${book.price}</BookPrice>
                  <BookDate>{book.date}</BookDate>
                </div>
              </BookDetails>
            </Link>
          </BookCard>
        ))}
      </BooksContainer>
    </DepartmentContainer>
  );
};

export default BookCards;

const DepartmentContainer = styled.div`
  margin-bottom: 20px;
  width: 95%;
  margin: 0 auto;
`;

const DepartmentTitle = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  color: ${secondaryColor};
  font-weight: 600;
  margin-bottom: 5px;
`;

const BooksContainer = styled.div`
  display: flex;

  gap: 10px;
`;

const BookCard = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  height: 280px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const BookImage = styled.img`
  width: 100%;
  height: 170px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  object-fit: cover;
`;

const BookDetails = styled.div`
  width: 100%;
  padding: 5px;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  &:hover {
    color: ${primaryColor};
  }
`;

const BookAuthor = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: white;
  border-radius: 5px;
  margin-top: -25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
  text-align: center;
  padding: 2px 10px 2px 10px;
  background: ${primaryColor};
`;

const BookPrice = styled.p`
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin-bottom: 5px;
`;

const BookDate = styled.p`
  font-size: 14px;
  color: gray;
`;
