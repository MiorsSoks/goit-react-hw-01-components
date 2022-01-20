import styled from "styled-components";



export const OneFriend = styled.li`
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 16px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  margin-right: 20px;
  background-color: ${(props) => props.status};
`;

export const FriendImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-size: 30px;
  line-height: 1.2;
  margin: 0;
`;