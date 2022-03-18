import React from 'react';
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

  return (
    <Wrapper>
      {/* <StyledSearch placeholder="input search loading default" loading={false} /> */}
      <Downshift
        onChange={(selection) => {
          console.log(selection.value);
          setFilteredItems(selection.value);
        }}
        itemToString={(item) => (item ? item.value : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <SearchWrapper>
              <StyledSearch {...getInputProps()} spellCheck={false} />
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
  /* position: absolute;
  top: 0; */
  width: 100%;
`;

const Wrapper = styled.div`
  width: 30%;
  margin-left: auto;
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
