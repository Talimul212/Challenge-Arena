import styled, { keyframes } from "styled-components";

const ContestCategories = () => {
  const categories = [
    "Programming",
    "Design",
    "Mathematics",
    "General Knowledge",
  ];

  return (
    <CategoriesContainer>
      {categories.map((category, index) => (
        <CategoryCard key={index}>
          <h3>{category}</h3>
          {/* Add additional details or links for each category */}
        </CategoryCard>
      ))}
    </CategoriesContainer>
  );
};

export default ContestCategories;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const CategoryCard = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
