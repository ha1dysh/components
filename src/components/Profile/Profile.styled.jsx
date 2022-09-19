import styled from '@emotion/styled';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 25px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  margin: 25px 0;
  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

export const Username = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;

export const Location = styled.p`
  margin-bottom: 25px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;

export const Stats = styled.ul`
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
  padding: 1rem;
`;

export const Label = styled.span`
  padding-bottom: 5px;
  color: rgb(0, 0, 0, 0.5);
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
