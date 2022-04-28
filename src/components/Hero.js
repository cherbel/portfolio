import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #131313;
`;

const AnimationTop = styled(motion.div)`
  height: 20vh;
  width: 60%;
  background-color: white;
`;

const AnimationBottom = styled(motion.div)`
  height: 20vh;
  width: 80%;
  background-color: white;
`;

const AnimationCenter = styled(motion.div)`
  height: 20vh;
  width: 100%;
  background-color: white;
  align-self: center;
  justify-content: center;
`;

const MiddleContainer = styled.section`
  display: flex;
  height: 40vh;
  padding: 3rem calc((80vw - 1300px) / 2);
  width: 100%;
`;

const LeftColumn = styled.div`
  color: #fff;
  padding: 2rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }

  @media screen and (max-width: 600px) {
    h1 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p {
      margin: 2rem 0;
      font-size: 2rem;
      line-height: 1.1;
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Button = styled(motion.div)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  justify-items: center;
  text-align: start;
  color: white;

  @media screen and (max-width: 600px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.5rem;
    border: 2px solid #fff;
    border-radius: 4px;
  }
`;

const Hero = () => {
  const fadeLeftTop = {
    hidden: { opacity: 0, x: -400, y: 50 },
    visible: { opacity: 1, x: 0, y: 50 },
  };

  const fadeLeftBottom = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 40 },
  };

  return (
    <Section>
      <AnimationTop
        variants={fadeLeftTop}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, x: -400, y: 50 }}
      />
      <MiddleContainer>
        <LeftColumn>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0 }}
          >
            Welcome to
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, x: -100 }}
          >
            Caleb Herbel's Portfolio
          </motion.p>
          <Link to="/welcome" style={{ textDecoration: "none" }}>
            <Button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              exit={{ opacity: 0 }}
            >
              Learn More
            </Button>
          </Link>
        </LeftColumn>
        <RightColumn>
          <AnimationCenter
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, x: 300 }}
          />
        </RightColumn>
      </MiddleContainer>
      <AnimationBottom
        variants={fadeLeftBottom}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: -200 }}
      />
    </Section>
  );
};

export default Hero;
