import styled, { keyframes } from "styled-components";

const FeaturedContests = () => {
  const contests = [
    {
      id: 1,
      title: "Coding Challenge",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYex3Splxia4tUkqOH-0hTCMxAfdQCyokqCJAVKnJMogDHYiF6-Te5x3NnRlcTDwR7LHk&usqp=CAU", // Replace with actual image path
    },
    {
      id: 2,
      title: "Design Contest",
      image:
        "https://graphicsfamily.com/wp-content/uploads/2020/09/Aina-Victor-Best-Logo-Design-Award-Certificate-GraphicsFamily-scaled.jpg", // Replace with actual image path
    },
    // Add more contests as needed
  ];

  return (
    <FeaturedContestsContainer>
      {contests.map((contest) => (
        <ContestCard key={contest.id}>
          <ContestImage src={contest.image} alt={contest.title} />
          <ContestDetails>
            <h3>{contest.title}</h3>
            {/* Add additional details or links for each contest */}
          </ContestDetails>
        </ContestCard>
      ))}
    </FeaturedContestsContainer>
  );
};

export default FeaturedContests;
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

const FeaturedContestsContainer = styled.div`
  margin: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ContestCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContestImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ContestDetails = styled.div`
  padding: 10px;
`;
