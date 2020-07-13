import React, {useRef} from 'react';
import styled from '@emotion/styled';
import {SearchIcon} from '@primer/octicons-react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px 0 19px 0;
`;

const SearchBarContainer = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  width: 87.2%;
  border-radius: 10px;
  background: rgba(118, 118, 128, 0.12);
`;

const StyledInput = styled.input`
  padding: 7px 0px 7px 0px;
  width: 91%;
  border: 0;
  background-color: transparent;
  outline: none;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: rgba(60, 60, 67, 0.6);
`;

const IconContainer = styled.div`
  padding: 5px 8px 5px 8px;
  margin: 0px 2px 0px 4px;
`;

const SearchBar = props => {
  const input = useRef(null);
  const {handleSearchBarFilter} = props;
  return (
    <Container>
      <SearchBarContainer>
        <IconContainer>
          <SearchIcon verticalAlign="middle" />
        </IconContainer>
        <StyledInput
          ref={input}
          type="text"
          placeholder="搜尋"
          onChange={() => handleSearchBarFilter(input.current.value)}
        />
      </SearchBarContainer>
    </Container>
  );
};

export default SearchBar;
