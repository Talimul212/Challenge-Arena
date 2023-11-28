import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  margin: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const TestimonialCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  padding: 10px;
`;

const TestimonialAuthor = styled.h4`
  margin: 0;
`;

const TestimonialText = styled.p`
  margin: 10px 0;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      image: "https://buffer.com/library/content/images/2022/03/amina.png", // Replace with actual image path
      text: "ChallengeArena has been a great platform for enhancing my coding skills. The contests are challenging and well-organized.",
    },
    {
      id: 2,
      author: "Jane Smith",
      image: "https://buffer.com/library/content/images/2022/03/amina.png", // Replace with actual image path
      text: "I love the variety of contests available on ChallengeArena. It has helped me explore different domains and learn new things.",
    },
    // Add more testimonials as needed
  ];

  return (
    <TestimonialsContainer>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id}>
          <TestimonialImage
            src={testimonial.image}
            alt={`Testimonial by ${testimonial.author}`}
          />
          <TestimonialContent>
            <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            <TestimonialText>{testimonial.text}</TestimonialText>
          </TestimonialContent>
        </TestimonialCard>
      ))}
    </TestimonialsContainer>
  );
};

export default Testimonials;
