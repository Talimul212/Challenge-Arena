/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { InputColor, primaryColor, secondaryColor } from "../Color/Color";

const QuoteBanner = () => {
  const quotedatas = [
    {
      id: 1,
      des: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      auth: "Malcolm X",
    },
    {
      id: 2,
      des: "The beautiful thing about learning is that no one can take it away from you.",
      auth: " B.B. King",
    },
    {
      id: 3,
      des: "The only way to learn mathematics is to do mathematics.",
      auth: "Paul Halmos",
    },
    {
      id: 4,
      des: "Learning is a treasure that will follow its owner everywhere.",
      auth: "Chinese Proverb",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === quotedatas.length - 1 ? 0 : prevSlide + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? quotedatas.length - 1 : prevSlide - 1
  //   );
  // };

  return (
    <SliderContainer>
      <SliderTrack
        onClick={nextSlide}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {quotedatas.map((quote, i) => (
          <Slide
            style={{
              background: `${i % 2 == 0 ? primaryColor : secondaryColor}`,
            }}
            key={quote.id}
          >
            "<span>{quote.des}</span>"{" "}
            <span style={{ color: `${InputColor}`, fontWeight: "800" }}>
              {quote.auth}
            </span>
          </Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default QuoteBanner;

const SliderContainer = styled.div`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: justify;
  background: ${secondaryColor};
  color: ${InputColor};
  padding: 5px;
`;
