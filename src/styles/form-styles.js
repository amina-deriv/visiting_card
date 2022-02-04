import styled from "styled-components";
import palette from "./colors";

export const StyledForm = styled.form`
    .button-field {
        margin-left: 25px;
        margin-right: 25px;
        display: flex;
        justify-content: space-around;
    }
    button {
        outline: none;
        height: 40px;
        width: 6rem;
        font-size: 1rem;
        border-radius: 10px;
        background-color: transparent;
        margin-bottom: 25px;
        cursor: pointer;
    }
    .active {
        border: 2px solid ${palette.primary};
        color: ${palette.primary};
    }
    .inactive {
        border: 2px solid ${palette.secondary};
        color: ${palette.secondary};
    }
    .active:hover {
        cursor: pointer;
        filter: saturate(200%);
    }
`;

export const StyledField = styled.div`
  position: relative;
  margin-bottom: 20px;
  margin-left: 25px;
  margin-right: 25px
  font-weight: 300;
  color: ${palette.secondary};
  input{
    appearance: none;
    outline: none;
    background: transparent;
    color: #555;
    font-weight: inherit;
    border: 1px solid ${palette.secondary};
    border-radius: 4px;
    width: 329px;
    height: 44px;
    padding-left: 35px;
    padding-right: 25px;
    &:focus, &:valid{
      border-color: ${palette.primary};
    }
    &:invalid + label{
      top: calc(50% - 9px);
    }
    &:focus + label, &:valid + label{
      font-size: 14px;
      top: -8px;
      color: ${palette.primary};
    }
    &:invalid ~ .icon{
      top: calc(50% - 8px);
    }
    &:focus ~ .icon, &:valid ~ .icon{
      font-size: 20px;
      top: calc(50% - 11px);
      color: ${palette.primary};
    }
    &:invalid~.clear, &:invalid:focus~.clear, &:valid:not(:focus)~.clear{
      opacity: 0;
      cursor: initial;
    }
    &:valid:focus~.clear{
      opacity: 1;
    }
    
   
  }
  label{
    position: absolute;
    padding: 0 5px;
    left: 36px;
    background-color: ${palette.quinary};
  }
  .icon{
    font-family: 'Material Icons';
    position: absolute;
    left: 8px;
  }
  .clear{
    color: ${palette.quaternary};
    cursor: pointer;
    font-family: 'Material Icons';
    position: absolute;
    right: 8px;
    top: calc(50% - 10px);
    &:hover{
      font-size: 20px;
      top: calc(50% - 12px);
      right: 6px;
      filter: brightness(1.5);
    }
  }
  input, label, .icon, .clear{
    transition: all 200ms ease-in;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus{
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const Error = styled.div`
    align-self: start;
    color: red;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    margin-right: 25px;
    align-self: center;
`;
