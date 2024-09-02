
import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    } finally {
      // Clear the form fields after submission
      setFormData({
        fname: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">For more information, please contact us.</p>
          </HeaderInfo>
          <FormWrapper>
            <Form>
              <label className="font13">First name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="font20 extraBold"
                value={formData.fname}
                onChange={handleChange}
              />
              <label className="font13">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="font20 extraBold"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="font13">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="font20 extraBold"
                value={formData.subject}
                onChange={handleChange}
              />
              <label className="font13">Message:</label>
              <textarea
                rows="4"
                cols="50"
                id="message"
                name="message"
                className="font20 extraBold"
                value={formData.message}
                onChange={handleChange}
              />
            </Form>
            <SubmitWrapper>
              {/* Move the button outside the form and handle the submit with onClick */}
              <ButtonInput type="button" value="Send Message" onClick={handleSubmit} />
            </SubmitWrapper>
          </FormWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

// Your styled-components definitions (Wrapper, HeaderInfo, FormWrapper, Form, ButtonInput, SubmitWrapper) remain unchanged.


const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px); /* Adjust based on header/footer height */
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px; /* Adjust based on desired form width */
  padding: 30px;
  border-radius: 8px;
  
  margin-bottom: 20px;

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 20px;
  }

  textarea {
    min-height: 100px;
  }

  @media (max-width: 860px) {
    padding: 20px;
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #CCA000;
  background-color: #CCA000;
  width: 100%;
  padding: 15px;
  outline: none;
  
  font-size: 20px;
  font-weight: bolder;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  max-width: 600px; /* Ensure it matches the Form width */
`;
