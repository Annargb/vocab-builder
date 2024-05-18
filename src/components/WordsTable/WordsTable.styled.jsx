import styled from "styled-components";

export const TableContainer = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    padding: 18px;
    border-radius: 15px;
    background-color: ${(p) => p.theme.colors.white};
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(p) => p.theme.colors.white};

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1440px) {
    width: 1204px;
  }
`;

export const StyledThead = styled.thead`
  background-color: ${(p) => p.theme.colors.formBgColor};
`;

export const StyledTh = styled.th`
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  color: ${(p) => p.theme.colors.black};
  border-bottom: 1px solid ${(p) => p.theme.colors.tableBorder};

  &:not(:last-child) {
    border-right: 1px solid ${(p) => p.theme.colors.tableBorder};
  }

  &:first-child {
    border-radius: 8px 0 0 0;
  }

  &:last-child {
    padding: 0;
    border-radius: 0 8px 0 0;
  }

  @media screen and (min-width: 375px) {
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 22px 20px 22px 22px;
    font-size: 18px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const StyledTd = styled.td`
  padding: 16px 8px;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;

  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 375px) {
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const StyledTr = styled.tr`
  & > ${StyledTd}:not(:first-child) {
    border-left: 1px solid ${(p) => p.theme.colors.tableBorder};
  }

  & > ${StyledTd}:not(:last-child) {
    border-right: 1px solid ${(p) => p.theme.colors.tableBorder};
  }

  & > ${StyledTd} {
    border-bottom: 1px solid ${(p) => p.theme.colors.tableBorder};
  }

  /* &:not(:last-child) > ${StyledTd} {
    border-bottom: 1px solid ${(p) => p.theme.colors.tableBorder};
  } */

  @media screen and (min-width: 375px) {
    & > ${StyledTd}:last-child {
      padding: 14px 9px;
    }
  }

  @media screen and (max-width: 767px) {
    &:last-child > ${StyledTd} {
      border-bottom: none;
    }
  }

  @media screen and (min-width: 768px) {
    & > ${StyledTd}:last-child {
      padding: 14px;
    }
  }
`;

export const StyledThColumn = styled(StyledTh)`
  &:nth-child(1) {
    max-width: 90px;
  }

  &:nth-child(2) {
    max-width: 116px;
  }

  &:nth-child(3) {
    max-width: 99px;
  }

  &:nth-child(4) {
    max-width: 38px;
  }

  @media screen and (min-width: 375px) {
    /* &:nth-child(1) {
      width: 90px;
    }

    &:nth-child(2) {
      width: 116px;
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      width: 99px;
      padding: 16px 16px 12px 16px;
    }

    &:nth-child(4) {
      width: 38px;
    } */
    &:nth-child(2) {
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      padding: 16px 16px 12px 16px;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      max-width: 180px;
    }

    &:nth-child(2) {
      max-width: 180px;
    }

    &:nth-child(3) {
      max-width: 160px;
    }

    &:nth-child(4) {
      max-width: 148px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      width: 372px;
    }

    &:nth-child(2) {
      width: 364px;
    }

    &:nth-child(3) {
      width: 260px;
    }

    &:nth-child(4) {
      width: 208px;
    }
  }
`;

export const StyledTdColumn = styled(StyledTd)`
  &:nth-child(1) {
    max-width: 90px;
  }

  &:nth-child(2) {
    max-width: 116px;
  }

  &:nth-child(3) {
    max-width: 99px;
  }

  &:nth-child(4) {
    max-width: 38px;
  }

  @media screen and (min-width: 375px) {
    /* &:nth-child(1) {
      width: 90px;
    }

    &:nth-child(2) {
      width: 116px;
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      width: 99px;
      padding: 16px 16px 12px 16px;
    }

    &:nth-child(4) {
      width: 38px;
      padding: 14px 9px;
    } */
    &:nth-child(2) {
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      padding: 16px 16px 12px 16px;
    }
  }

  /* @media screen and (min-width: 375px) {
    &:nth-child(2) {
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      padding: 16px 16px 12px 16px;
    }

    &:nth-child(4) {
      padding: 14px 9px;
    }
  } */

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      max-width: 180px;
    }

    &:nth-child(2) {
      max-width: 180px;
    }

    &:nth-child(3) {
      max-width: 160px;
    }

    &:nth-child(4) {
      max-width: 148px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      width: 372px;
    }

    &:nth-child(2) {
      width: 364px;
    }

    &:nth-child(3) {
      width: 260px;
    }

    &:nth-child(4) {
      width: 208px;
    }
  }
`;
