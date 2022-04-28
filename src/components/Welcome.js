import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const Welcome = () => {
  const Section = styled.section`
    height: 100vh;
    width: 100%;
    background: #131313;

    h1 {
      margin: 0;
      font-size: 4rem;
      line-height: 1.1;
      color: white;
      text-align: center;
    }
  `;

  const VerticalCenter = styled.section`
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  `;

  return (
    <Section>
      <VerticalCenter>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0 }}
        >
          There, Hi There, Ho There
        </motion.h1>
      </VerticalCenter>
    </Section>
  );
};

export default Welcome;
