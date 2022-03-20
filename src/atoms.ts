import { atom } from "recoil";
interface ICompany {
  name: string;
  nickname: string;
  amount: number;
  series: string;
}
export interface ICard {
  tabData: ICompany[];
  tab: string;
  isBtnClicked: boolean;
}
export const cardState = atom<ICard>({
  key: "toDo",
  default: {
    tabData: [],
    tab: "",
    isBtnClicked: false
  }
});
