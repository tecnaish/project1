import React from "react";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import {
  Container,
  Card,
  Col,
  Row,
  Form,
  FormGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { Image } from "react-bootstrap"; // Import Image from react-bootstrap

function App() {
  const [value, setValue] = useState(null);
  const options = [
    { value: "Grade 12th", label: "Grade 12th" },
    { value: "Diploma", label: "Diploma" },
    { value: "Bachelors Degree", label: "Bachelors Degree" },
    { value: "Masters Degree", label: "Masters Degree" },
    { value: "PhD", label: "PhD" },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5hpw4u",
        "template_fhqoe0n",
        form.current,
        "4oe2QLyjf-JrKjUB7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container
      style={{ position: "relative", left: "18rem", top: "-4rem" }}
      className="mt-5"
    >
      <Row className="px-5 my-7">
        <Col xl={6}>
          <Card.Header className="p-3">
            <Card.Header className="p-3">
              <Col sm={6}>
                <Image
                  src="logo.png"
                  fluid
                  width="900px"
                  style={{
                    position: "relative",
                    bottom: "-0rem",
                    left: "7rem",
                  }}
                />
              </Col>
            </Card.Header>
          </Card.Header>
          <Card.Body>
            <Form ref={form} onSubmit={sendEmail}>
              <FormGroup className="mb-3">
                <FormControl
                  name="email"
                  type="email"
                  placeholder="Email"
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Full name"
                  required
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                />
              </FormGroup>

              <FormGroup className="mb-3">
                <FormControl
                  name="number"
                  type="number"
                  placeholder="Age"
                  required
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                />
              </FormGroup>

              <div
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: "#E6E6FA",
                    backgroundColor: "#E6E6FA",
                  }),
                }}
              >
                <Select
                  options={options}
                  defaultValue={value}
                  placeholder={"Highest Level of Education"}
                  name="education"
                  onChange={setValue}
                  styles={{
                    valueContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#E6E6FA",
                      backgroundColor: "#E6E6FA",
                    }),
                  }}
                />
              </div>
              <br />
              <FormGroup className="mb-3">
                <Form.Control
                  name="institute"
                  type="text"
                  placeholder="Institute where you completed your highest level of education
                   "
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  name="study"
                  type="text"
                  placeholder="What did you study"
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3" size="lg">
                <FormControl
                  name="experience"
                  as="textarea"
                  rows="5"
                  placeholder="Do you have any relevant work experience? 
                   *
                   Write None if no work experience. Provide the following details if yes:
                   Job Title 
                   Company Name 
                   Job duties
                   Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets."
                  required
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  name="text"
                  type="text"
                  placeholder="What institute did you get admitted to in Canada?
                   "
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  name="text"
                  type="text"
                  placeholder="What is your program of study in Canada?"
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  name="text"
                  type="text"
                  placeholder="Which country are you applying from?"
                  style={{
                    color: "black",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
                <br />
                <FormGroup className="mb-3">
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="What are your future goals?
                   "
                    style={{
                      color: "black",
                      backgroundColor: "#E6E6FA",
                      borderColor: "white",
                      borderStyle: "solid",
                    }}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="English Scores - Listening
                   "
                    style={{
                      color: "black",
                      backgroundColor: "#E6E6FA",
                      borderColor: "white",
                      borderStyle: "solid",
                    }}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="English Scores - Reading"
                    style={{
                      color: "black",
                      backgroundColor: "#E6E6FA",
                      borderColor: "white",
                      borderStyle: "solid",
                    }}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="English Scores - Speaking"
                    style={{
                      color: "black",
                      backgroundColor: "#E6E6FA",
                      borderColor: "white",
                      borderStyle: "solid",
                    }}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="English Scores - Writing
                   "
                    style={{
                      color: "black",
                      backgroundColor: "#E6E6FA",
                      borderColor: "white",
                      borderStyle: "solid",
                    }}
                    required
                  />
                  <br />
                  
                   
                </FormGroup>

                <FormGroup
                   
                  style={{ position: "relative", top: "-0.8rem" }}
                >
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="How much tuition fee did you pay?
                    
                   "
                    style={{
                      color: "black",
                      backgroundColor: "#E6E6FA",
                      borderColor: "white",
                      borderStyle: "solid",
                      top: "3rem",
                    }}
                    required
                  />
                  <br />
                  
                  <br />
                </FormGroup>
              </FormGroup>
              <FormGroup
                className="mb-3"
                style={{ position: "relative", top: "-1.4rem" }}
              >
                <Form.Control
                  name="text"
                  type="text"
               
                  placeholder="How much did you pay towards GIC?
                   "
                  style={{
                    color: "rgba(54, 50, 54, 0.993)",
                    backgroundColor: "#E6E6FA",
                    borderColor: "white",
                    borderStyle: "solid",
                  }}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
