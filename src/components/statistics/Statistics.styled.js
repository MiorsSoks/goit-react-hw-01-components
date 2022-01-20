import styled from 'styled-components'

export const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 50px;
  font-style: normal;
  font-size: 30px;
  line-height: 0.6;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 1px;
`;

export const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  padding: 5px;
  background-color: gray;
  color: white;
  font-style: normal;
  font-size: 16px;
  line-height: 0.84;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  margin-top: 3px;
`;