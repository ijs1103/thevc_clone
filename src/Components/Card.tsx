import {memo} from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { IData } from "../data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Container = styled.div<{ isBtnClicked: boolean }>`
  padding: 10px;
  min-width: 300px;
  width: 300px;
  background-color: #262e3a;
  border-radius: 10px;
  height: ${(props) => (props.isBtnClicked ? "720px" : "450px")};
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 1.3rem;
  span {
    font-size: 0.7rem;
    margin-left: 4px;
    font-weight: 400;
    color: #a1a1a4;
  }
`;
const Tabs = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  will-change: transform;
`;
const Tab = styled.div<{ isClicked: boolean }>`
  background-image: ${(props) =>
    props.isClicked
      ? "linear-gradient(#080808,#1f1f1f)"
      : "linear-gradient(180deg,#3e4b5f,#242c37)"};
  cursor: pointer;
  padding: 5px 10px;
  text-align: center;
  width: 100px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 50%);
  &:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }
  &:nth-child(3) {
    border-radius: 0 10px 10px 0;
  }
`;
const List = styled.ul`
  margin-top: 20px;
  li {
    .wrapper {
      display: flex;
      align-items: center;
      position: relative;
      > p {
        flex: none;
        width: 20px;
      }
      .company {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-start;
        padding: 5px 10px;
        cursor: pointer;
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
            &:nth-child(1) {
              font-weight: bold;
            }
            &:nth-child(2) {
              color: #aaa;
            }
          }
        }
      }
      .amount-series {
        text-align: right;
        flex: none;
      }
    }
  }
`;
const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;
const LoadMoreBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: inherit;
`;
interface ICard {
  titles: { title: string; subTitle: string };
  cardData: IData;
}
function Card({ titles, cardData }: ICard) {
  // 주간, 월간, 연간 중 선택한 탭과 그 탭의 데이터, 더보기 버튼 클릭여부
  const [data, setData] = useState({
    tabData: cardData["week"].slice(0, 5),
    tab: "week",
    isBtnClicked: false
  });
  const tabClick = (tag: string) => {
    if (data.isBtnClicked) {
      setData((prevs) => {
        return { ...prevs, tabData: cardData[tag], tab: tag };
      });
    } else {
      setData((prevs) => {
        return { ...prevs, tabData: cardData[tag].slice(0, 5), tab: tag };
      });
    }
  };
  const btnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!data.isBtnClicked) {
      setData((prevs) => {
        return {
          ...prevs,
          tabData: cardData[prevs.tab],
          isBtnClicked: !prevs.isBtnClicked
        };
      });
    } else {
      setData((prevs) => {
        return {
          ...prevs,
          tabData: prevs.tabData.slice(0, 5),
          isBtnClicked: !prevs.isBtnClicked
        };
      });
    }
  };
  const imgSrc = (index: number) => {
    return data.tab==='year' ? `Assets/icons/${index + 1}.jpg` : (data.tab==='month' ? `Assets/icons/m${index + 1}.jpeg`: `Assets/icons/w${index + 1}.jpeg`) 
  };
  //console.log(data);
  useEffect(() => {}, [data]);
  return (
    <Container isBtnClicked={data.isBtnClicked}>
      <Title>
        {titles.title}
        <span>{titles.subTitle}</span>
      </Title>
      <Tabs>
        <Tab onClick={() => tabClick("week")} isClicked={data.tab === "week"}>
          주간
        </Tab>
        <Tab onClick={() => tabClick("month")} isClicked={data.tab === "month"}>
          월간
        </Tab>
        <Tab onClick={() => tabClick("year")} isClicked={data.tab === "year"}>
          연간
        </Tab>
      </Tabs>
      <List>
        {data?.tabData.map((curr, idx) => (
          <li key={idx}>
            <div className="wrapper">
              <p>{idx + 1}</p>
              <div className="company">
                <div className="image-wrap">
                  <img src={imgSrc(idx)} alt="logo" />
                </div>
                <div className="text-wrap">
                  <p>{curr.name}</p>
                  <p>{curr.nickname}</p>
                </div>
              </div>
              <div className="amount-series">
                <p>
                  <strong>{curr.amount}억</strong>
                </p>
                <p>{curr.series}</p>
              </div>
            </div>
          </li>
        ))}
      </List>
      <BtnArea>
        {data.isBtnClicked ? (
          <LoadMoreBtn onClick={btnClick}>
            <IoIosArrowUp /> 접기
          </LoadMoreBtn>
        ) : (
          <LoadMoreBtn onClick={btnClick}>
            <IoIosArrowDown /> 펼치기
          </LoadMoreBtn>
        )}
      </BtnArea>
    </Container>
  );
}
export default memo(Card);
