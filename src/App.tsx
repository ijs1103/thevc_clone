import "./styles.css";
import { useState, useEffect, useCallback } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Card from "./Components/Card";
import Table from "./Components/Table";
import Loader from "./Components/Loader";
import { cardData, tableData } from "./data";

const CardArea = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  overflow-x: auto;
`;
const TableArea = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;
const TargetArea = styled.div`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function App() {
  const [target, setTarget] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tableData);

  useEffect(()=>{},[data]);
  const fetchMore = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // 기존 배열을 추가 해줌
    setData(prevs => prevs.concat(tableData));
    setLoading(false);
  };
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(async (entry) => {
      // 교차가 발생했을 떄 
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);
        await fetchMore();
        observer.observe(entry.target);
      }
    });
  };
  useEffect(()=>{
    let observer: IntersectionObserver;
    if(target){
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  },[target]);
  console.log(data);
  return (
    <>
      <Header />
      <CardArea>
        {[1,2,3,4,5].map((_,idx)=><Card key={idx} titles={{title: "💰 투자 유치 랭킹", subTitle: "투자금액 순" }} cardData={cardData} />)}
      </CardArea>
      <TableArea>
        <Table tableData={data} />
      </TableArea>
      <TargetArea ref={setTarget}>{loading && <Loader />}</TargetArea>
    </>
  );
}
