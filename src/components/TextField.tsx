import styled from 'styled-components';

const TextField = styled.input`
  background-color: #eee;
  font-size: 15px;
  padding: 15px;
  border-radius: 8px;
  width: 50%;
  border: 0;
  outline: 0;

  :focus {
    background-color: #ffffff;
    box-shadow: 0px 1px 3px 0px #d3d3d3;
  }
`;

export default TextField;
