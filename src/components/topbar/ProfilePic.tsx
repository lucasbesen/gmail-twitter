import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 43.5px;
  cursor: pointer;
  border-radius: 25px;

  :hover {
    background-color: #eee;
  }
`;

const Image = styled.img.attrs({
  src:
    'https://lh3.googleusercontent.com/-biDP4iMaG_A/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdNR-6OWw8tGnSp58jq9b4qx0FZVw.CMID/s64-c/photo.jpg',
})`
  border-radius: 15px;
  width: 32px;
  height: 33.5px;
`;

const ProfilePic: React.FC = () => (
  <Wrapper>
    <Image />
  </Wrapper>
);

export default ProfilePic;
