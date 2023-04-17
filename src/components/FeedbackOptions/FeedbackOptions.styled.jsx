import styled from '@emotion/styled';

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  font-weight: 600;
  width: 130px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${props => {
      switch (props.id) {
        case 'good':
          return 'green';
        case 'neutral':
          return 'orange';
        case 'bad':
          return 'red';
        default:
          return 'red';
      }
    }};
   
  }
`;