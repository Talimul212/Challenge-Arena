import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ResultContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const ResultCard = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: ${fadeInLeft} 1s ease-in-out;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ResultImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const ResultContent = styled.div`
  padding: 10px;
`;

const ResultTitle = styled.h4`
  margin: 0;
`;

const ResultDate = styled.p`
  margin: 5px 0;
  font-size: 12px;
  color: #666;
`;

const LatestResults = () => {
  const results = [
    {
      id: 1,
      title: "Coding Challenge",
      image: "result-1.jpg", // Replace with actual image path
      date: "2023-03-15",
    },
    {
      id: 2,
      title: "Design Contest",
      image: "result-2.jpg", // Replace with actual image path
      date: "2023-03-10",
    },
    // Add more results as needed
  ];

  return (
    <ResultContainer>
      {results.map((result) => (
        <ResultCard key={result.id}>
          <ResultImage src={result.image} alt={`Result for ${result.title}`} />
          <ResultContent>
            <ResultTitle>{result.title}</ResultTitle>
            <ResultDate>{result.date}</ResultDate>
          </ResultContent>
        </ResultCard>
      ))}
    </ResultContainer>
  );
};

export default LatestResults;
