import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 28px;
    padding-top: 80px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`;

export const StatsBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;
