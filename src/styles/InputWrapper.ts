import styled from "styled-components";

interface InputProps {
  width?: number;
  maxWidth?: number;
  height?: number;
  maxHeight?: number;
  marginLeft?: number;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
`;

export const Label = styled.label`
  align-self: start;
  color: #99999;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 25px;
  align-self: center;
`;

export const Input = styled.input<InputProps>`
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height || 50}px;
  background-color: rgba(246, 246, 246, 0.3);
  border: 1px solid #d8dde6;
  border-radius: 5px;
  text-indent: 20px;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  margin-left: ${(props) => props.marginLeft};

  ::-webkit-input-placeholder {
    opacity: 0.4;
    font-size: inherit;
    color: inherit;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover {
    border: 1px solid #a3afc4;
  }

  &:focus {
    border: 1px solid #d8dde6;
    background-color: rgba(246, 246, 246, 0.2);
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
    transform: translateX(10px);
  }
`;

export const Error = styled.label`
  align-self: start;
  color: red;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 25px;
  align-self: center;
`;
