import styled from 'styled-components';

export const ButtonSuccess = styled.button`
	max-width: 100px;
	border-radius: 6px;
  background-color: ${props => (props.color.length ? "green" : "#008CBA")};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: background-color 1s
`;
