import styled from 'styled-components'

export const UserCard = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding-bottom: 20px;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5)
`;

export const Profile = styled.div`
`;

export const Description = styled.div`
margin: 15px;
`;

export const Avatar = styled.img`
position: relative;
top: 50%;
left: 33%;
margin-right: -50%;
transform: translate(-50%, -50%)
width 100px;
height: 100px;
border-radius: 100px
`;

export const Name = styled.p`
font-size: 23px;
text-align: center;
`;

export const TagAndLocation = styled.p`
font-size: 16px;
text-align: center;
color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: space-between;
  align-content: space-around;
  padding: 10px;
  border-top: 1px solid grey;
  list-style: none;
  background-color: #d7d7d7
`;

export const Label = styled.span`
  display: block;
  font-weight: bold;
`;
export const Quantity = styled.span`
  display: block;
  color: gray;
`;

export const StatItems = styled.li`  
flex-direction: column;
  text-align: center;
  :not(:last-child) {
    margin-right: 50px`;
