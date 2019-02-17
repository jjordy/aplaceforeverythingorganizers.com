import React from "react";
import { RouteComponentProps } from "@reach/router";
import posed from "react-pose";
import styled from 'styled-components'
export interface ContactProps extends RouteComponentProps {}

const ListContainer = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const Form = styled.form.attrs((props: any) => ({
  netlify: props.netlify
}))`
  & input, select, textarea {
    width: 100%;
    padding: .2rem;
    margin-bottom: 1rem;
    margin-top: .5rem;
  }

  & label {
    font-weight: bold;
  }

  & input {
    height: 48px;
  }

  & button {
    padding: 1rem 2rem 1rem 2rem;
    background-color: rebeccapurple;
    color: #fff;
    font-weight: 700;
    border: 0px;
    box-shadow: 1px 1px 1px #e7e7e7;
    @media(max-width: 768px) {
      width: 100% !important;
    }
  }
`

const ContactPage: React.SFC<ContactProps> = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <Form name='contact' action='/?submit-contact-form=success' netlify netlify-honeypot="bot-field" method='post'>
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <ListContainer>
          <Item>
            <label htmlFor='id_name'>NAME</label>
            <input type='text' name='name' id='id_name' placeholder='Your name' required />
          </Item>
          <Item>
            <label htmlFor='id_name'>EMAIL</label>
            <input type='email' name='email' placeholder='Your email' required/>
          </Item>
          <Item>
            <label htmlFor='id_name'>MESSAGE</label>
            <textarea name='message' rows={5} placeholder='Your message' required />
          </Item>
          <Item>
            <button>Submit</button>
          </Item>
        </ListContainer>
      </Form>
    </>
  );
};

export default ContactPage;
