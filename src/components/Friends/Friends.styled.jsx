import styled from '@emotion/styled';

export const FriendList = styled.ul`
  margin: auto;
  padding: 0;
  width: 300px;
  list-style: none;
  margin-bottom: 25px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  padding-left: 30%;
  margin-bottom: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #fff;
`;

export const IsOnline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${status};
  margin-right: 5px;
`;

function status({ status }) {
  return status ? 'green' : 'red';
}

export const Name = styled.p`
  margin-left: 5px;
`;
