import styled, { css } from "styled-components";
import { useState } from "react";
import { searchData } from "../data";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;
const Inner = styled.div`
  background-image: linear-gradient(#303a49, #12161b);
  height: 60px;
`;
const Head = styled.header`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
`;
const H1 = styled.h1`
  font-weight: bold;
  margin-left: 10px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 30vw;
`;
const DropDown = styled.div<{ isFocus: boolean }>`
  display: none;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 8px 16px rgb(0 0 0 / 50%);
  overflow: hidden;
  z-index: 1;
  min-width: 100%;
  position: absolute;
  white-space: nowrap;
  margin-top: 8px;
  display: ${(props) => (props.isFocus ? "block" : "none")};
  > p {
    color: #7171ef;
    font-size: 12px;
    font-weight: bold;
    padding: 8px 16px 4px 16px;
  }
  ul {
    color: #000;
    li {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
      .image-wrap {
        img {
          box-shadow: 0 4px 8px rgb(0 0 0 / 30%);
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
      }
      .text-wrap {
        margin-left: 10px;
        p {
          padding: 3px;
        }
        p:nth-child(1) {
          font-weight: bold;
        }
        p:nth-child(2) {
          color: #aaa;
        }
      }
    }
  }
`;
const InputContainer = styled.div`
  position: relative;
`;
const InputCss = css`
  background-color: #000;
  color: inherit;
  font-size: 16px;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  &:focus {
    outline: 2px solid #7171ef;
  }
`;
const Input = styled.input.attrs({ placeholder: "회사, 제품, 서비스 검색" })`
  ${InputCss};
`;

const Button = styled.button`
  margin-left: 10px;
  border-radius: 6px;
  height: 40px;
  color: inherit;
  line-height: 40px;
  padding: 0 12px;
  text-align: center;
  background-image: linear-gradient(180deg, #7171ef, #5a5aec);
`;
const Nav = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
`;
const NavInner = styled.div`
  height: 30px;
  background-color: #12161b;
`;
const SubTitles = styled.div`
  width: 400px;
  padding-left: 10px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubTitle = styled.div<{ current: boolean }>`
  color: ${(props) => (props.current ? "inherit" : "#bbb")};
  border-bottom: 2px solid
    ${(props) => (props.current ? "#fff" : "transparent")};
  height: 100%;
`;

export default function Header() {
  const [inputFocus, setInputFocus] = useState(false);
  const Switch = () => {
    setInputFocus((focus) => !focus);
  };
  return (
    <Container>
      <Inner>
        <Head>
          <Left>
            <Logo>
              <img src="Assets/thevc_logo_square.png" alt="logo" />
            </Logo>
            <H1>데이터베이스</H1>
          </Left>
          <Form>
            <InputContainer>
              <Input onFocus={Switch} onBlur={Switch} />
              <DropDown isFocus={inputFocus}>
                <p>실시간 인기</p>
                <ul>
                  {searchData.map((data, idx) => (
                    <li key={idx}>
                      <div className="image-wrap">
                        <img src={`Assets/icons/${idx + 1}.jpg`} alt="logo" />
                      </div>
                      <div className="text-wrap">
                        <p>{data.name}</p>
                        <p>{data.nickname}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </DropDown>
            </InputContainer>
            <Button>
              <a href="#none">로그인/가입</a>
            </Button>
          </Form>
        </Head>
        <Nav>
          <NavInner>
            <SubTitles>
              <SubTitle current={true}>
                <a href="#none">투자/M&A</a>
              </SubTitle>
              <SubTitle current={false}>
                <a href="#none">투자자</a>
              </SubTitle>
              <SubTitle current={false}>
                <a href="#none">스타트업</a>
              </SubTitle>
              <SubTitle current={false}>
                <a href="#none">펀드</a>
              </SubTitle>
              <SubTitle current={false}>
                <a href="#none">뉴스</a>
              </SubTitle>
            </SubTitles>
          </NavInner>
        </Nav>
      </Inner>
    </Container>
  );
}
