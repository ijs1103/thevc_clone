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
const MOCKDATA = [
  {title: "π° ν¬μ μ μΉ λ­νΉ", subTitle: "ν¬μκΈμ‘ μ" },
  {title: "π° ν¬μ μ§ν λ­νΉ", subTitle: "ν¬μκ±΄μ μ" },
  {title: "π₯ μ€ννΈμ λ­νΉ", subTitle: "μ‘°νμ μ" },
  {title: "π₯ μ‘μλ¬λ μ΄ν° λ­νΉ", subTitle: "μ‘°νμ μ" },
  {title: "π₯ λ²€μ²μΊνΌν λ­νΉ", subTitle: "μ‘°νμ μ" },
]
export default function App() {
  const [target, setTarget] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tableData);

  useEffect(()=>{},[data]);
  const fetchMore = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // κΈ°μ‘΄ λ°°μ΄μ μΆκ° ν΄μ€
    setData(prevs => prevs.concat(tableData));
    setLoading(false);
  };
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(async (entry) => {
      // κ΅μ°¨κ° λ°μνμ λ 
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
  //console.log(data);
  return (
    <>
      <Header />
      <CardArea>
        {MOCKDATA.map((curr,idx)=><Card key={idx} titles={curr} cardData={cardData} />)}
      </CardArea>
      <TableArea>
        <Table tableData={data} />
      </TableArea>
      <TargetArea ref={setTarget}>{loading && <Loader />}</TargetArea>
    </>
  );
}
