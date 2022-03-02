import styled from "styled-components";
import { darken, lighten } from "polished";

const ButtonStyled = styled.button`
  /* 공통 스타일 */
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, "#228be6")};
  }
  &:active {
    background: ${darken(0.1, "#228be6")};
  }

  /* 기 타 */
  & + & {
    margin-left: 1rem;
  }
`;

function StyledButton({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

export default StyledButton;
