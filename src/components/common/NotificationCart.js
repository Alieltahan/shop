import styled from 'styled-components';

const NotificationStyles = styled.div`
  background-color: #ccc;
  font-size: 2rem;
  position: absolute;
  top: 10rem;
  right: 4rem;
  z-index: 10;
  padding: 2rem;
  border-radius: 10%;
`;

export const NotificationCart = () => {
  return <NotificationStyles>Product Added!</NotificationStyles>;
};
