import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import ContactForm from "../components/ContactForm";

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 40px;
`;

const StyledContainer = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 100%;
`;

const StyledDiv = styled.div`
  padding: 0.5rem 0;
  font-size: 16px;
  color: #9a9a9a;
  line-height: 130%;
`;

const Row = styled(Grid)`
  height: 100%;
`;

const Contact = () => (
  <StyledContainer>
    <Row container item direction="row" xs={12} alignItems="center">
      <Grid container item direction="column" xs={12}>
        <StyledH1>Contact</StyledH1>
        <StyledDiv>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          fringilla erat, et laoreet nunc rutrum sed. Aliquam eget metus blandit
          arcu euismod aliquet. Donec tincidunt nec ipsum eu ultrices. Nulla
          ullamcorper nulla eu facilisis auctor.
        </StyledDiv>
        <ContactForm />
      </Grid>
    </Row>
  </StyledContainer>
);

export default Contact;
