import React, { useState } from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';
import { Input } from 'antd';
import { filteredItemAtom } from 'src/Atoms/atom';
import { useRecoilState } from 'recoil';
const { Search } = Input;

interface Props {
  items: { value: string }[];
}

const SearchInput = ({ items }: Props) => {
  const [filteredItems, setFilteredItems] = useRecoilState(filteredItemAtom);
  const [searchValue, setSearchValue] = useState('');
  const handleSeachValue = (e: { target: any }) => {
    setSearchValue(e.target.inputValue);
  };

  const onSearchHandler = (inputValue: string | null) => {
    const temp = items.filter((item) => inputValue && item.value.includes(inputValue)).map((el) => el.value);
    // setFilteredItems(temp[0]);
    inputValue && setFilteredItems(inputValue);
  };
  return (
    <Wrapper>
      {/* <StyledSearch placeholder="input search loading default" loading={false} /> */}
      <Downshift
        onChange={(selection) => {
          setFilteredItems(selection.value);
        }}
        itemToString={(item) => {
          return item ? item.value : '';
        }}
      >
        {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, highlightedIndex, selectedItem }) => (
          <div>
            <SearchWrapper>
              <StyledSearch
                {...getInputProps()}
                spellCheck={false}
                onSearch={() => {
                  onSearchHandler(inputValue);
                }}
              />
              <StyledUl {...getMenuProps()}>
                {isOpen
                  ? items
                      .filter((item) => !inputValue || item.value.includes(inputValue))
                      .map((item, index) => (
                        <li
                          {...getItemProps({
                            key: item.value,
                            index,
                            item,
                            style: {
                              backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                          })}
                        >
                          {item.value}
                        </li>
                      ))
                  : null}
              </StyledUl>
            </SearchWrapper>
          </div>
        )}
      </Downshift>
    </Wrapper>
  );
};

export default SearchInput;

const StyledSearch = styled(Search)`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 50%;
  min-width: 160px;
  margin-bottom: 30px;
  position: relative;
`;

const StyledUl = styled.ul`
  /* position: absolute; */
  width: 100%;
  z-index: 500;
  padding-left: 0px;
  font-size: 0.8rem;
  li {
    list-style: none;
    width: 100%;
    padding: 10px;
  }
`;

const SearchWrapper = styled.div`
  top: -0.8rem;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;
