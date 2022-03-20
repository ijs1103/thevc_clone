import {memo} from "react";
import styled from "styled-components";
import { ICompany } from "../data";
import { FaSort } from "react-icons/fa";

const Container = styled.table`
  width: 100%;
  text-align: center;
  thead {
    tr {
      th {
        height: 36px;
        vertical-align: middle;
        padding: 0 16px;
        color: #96a8c5;
        background-image: linear-gradient(#364253, #161a21);
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  tbody {
    tr {
      &:nth-child(2n) {
        background-color: #262e3a;
      }
      &:nth-child(2n-1) {
        background-color: #1e242e;
      }
      td {
        vertical-align: middle;
        padding: 0 16px;
        height: 60px;
      }
      .image-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          box-shadow: 0 4px 8px rgb(0 0 0 / 30%);
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;
interface ITable{
  tableData: ICompany[]
}
function Table({tableData}: ITable) {
  return (
    <Container>
      <thead>
        <tr>
          <th>
            투자 날짜 <FaSort />
          </th>
          <th>
            총 투자 금액 <FaSort />
          </th>
          <th>
            투자 단계 <FaSort />
          </th>
          <th>
            투자 종류 <FaSort />
          </th>
          <th>
            투자 대상 <FaSort />
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((curr, idx) => (
          <tr key={idx}>
            <td>2022-03-18</td>
            <td>{curr.amount}억</td>
            <td>{curr.series}</td>
            <td>투자</td>
            <td>
              <div className="image-wrap">
                <div className="logo">
                  <img src={`Assets/icons/${idx + 1}.jpg`} alt="logo" />
                </div>
                <div className="name">{curr.name}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
export default memo(Table);
