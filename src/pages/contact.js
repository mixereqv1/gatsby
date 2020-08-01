import React, { useEffect, useRef } from 'react';
import PageInfo from '../components/PageInfo/PageInfo';
import { pageData } from '../data/PageData';
import styled from 'styled-components';
import Button from '../components/Button/Button';

const ContactWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding-bottom: 25px;

  li {
    padding: 0 5px;
    cursor: pointer;

    &.featured {
      font-weight: 700;
    }
  }
`;

const StyledLabel = styled.label`
  font-size: 13px;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 700;
    margin: 15px 0;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #000;
  width: 50%;
  padding: 10px;
`;

const StyledTextArea = styled(StyledInput)`
  width: 100%;
  height: 150px;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const Contact = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const children = [...listRef.current.children];

    children.map((item) => item.addEventListener('click', handleTopicChange));
  }, []);

  const handleTopicChange = (e) => {
    const children = [...listRef.current.children];

    children.map((item) => item.classList.remove('featured'));
    e.target.classList.add('featured');
  };

  return (
    <>
      <PageInfo title='contact' paragraph={pageData.paragraph} />
      <ContactWrapper>
        <h4>Contact reason</h4>
        <StyledList ref={listRef}>
          <li className='featured'>project</li> | <li>cooperation</li> |
          <li>other</li>
        </StyledList>
        <form>
          <StyledLabel htmlFor='name'>
            <span>Name</span>
            <StyledInput id='name' type='text' />
          </StyledLabel>
          <StyledLabel htmlFor='email'>
            <span>E-mail</span>
            <StyledInput id='email' type='email' />
          </StyledLabel>
          <StyledLabel htmlFor='textarea'>
            <span>Message</span>
            <StyledTextArea id='textarea'></StyledTextArea>
          </StyledLabel>
          <StyledButton type='submit'>Send message</StyledButton>
        </form>
      </ContactWrapper>
    </>
  );
};

export default Contact;
