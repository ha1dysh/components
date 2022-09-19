import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  text-align: center;
  color: rgba(0, 0, 0, 0.2);
`;

export const Statlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  background-color: #e7ecf2;
  padding-left: 0;
  border-radius: 0 0 4px 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  li + li {
    border-left: 1px solid rgb(0, 0, 0, 0.2);
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  padding: 0.5rem;
`;
