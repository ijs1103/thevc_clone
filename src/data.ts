export const searchData = [
  { name: "업라이즈", nickname: "헤드비트" },
  { name: "정육각", nickname: "정육각" },
  { name: "베어로보틱스", nickname: "페니" },
  { name: "원스피리츠", nickname: "원소주" }
];
export const cardData = {
  week: [
    {
      name: "브이에이코퍼레이션",
      nickname: "영화그래픽",
      amount: 1000,
      series: "Series A"
    },
    {
      name: "더블유컨셉코리아",
      nickname: "더블유컨셉",
      amount: 1000,
      series: "Series B"
    },
    {
      name: "베어로보틱스",
      nickname: "페니",
      amount: 1000,
      series: "Series B"
    },
    { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
    {
      name: "비엔에이치리서치",
      nickname: "뇌질환 치료제",
      amount: 130,
      series: "Series B"
    },
    {
      name: "브이에이코퍼레이션",
      nickname: "영화그래픽",
      amount: 1000,
      series: "Series A"
    },
    {
      name: "더블유컨셉코리아",
      nickname: "더블유컨셉",
      amount: 1000,
      series: "Series B"
    },
    {
      name: "베어로보틱스",
      nickname: "페니",
      amount: 1000,
      series: "Series B"
    },
    { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
    {
      name: "비엔에이치리서치",
      nickname: "뇌질환 치료제",
      amount: 130,
      series: "Series B"
    }
  ],
  month: [
    {
      name: "베어로보틱스",
      nickname: "페니",
      amount: 1000,
      series: "Series B"
    },
    { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
    {
      name: "비엔에이치리서치",
      nickname: "뇌질환 치료제",
      amount: 130,
      series: "Series B"
    },
    {
      name: "브이에이코퍼레이션",
      nickname: "영화그래픽",
      amount: 1000,
      series: "Series A"
    },
    {
      name: "더블유컨셉코리아",
      nickname: "더블유컨셉",
      amount: 1000,
      series: "Series B"
    },
    {
      name: "베어로보틱스",
      nickname: "페니",
      amount: 1000,
      series: "Series B"
    },
    { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
    {
      name: "비엔에이치리서치",
      nickname: "뇌질환 치료제",
      amount: 130,
      series: "Series B"
    },
    {
      name: "브이에이코퍼레이션",
      nickname: "영화그래픽",
      amount: 1000,
      series: "Series A"
    },
    {
      name: "더블유컨셉코리아",
      nickname: "더블유컨셉",
      amount: 1000,
      series: "Series B"
    }
  ],
  year: [
    { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
    {
      name: "비엔에이치리서치",
      nickname: "뇌질환 치료제",
      amount: 130,
      series: "Series B"
    },
    {
      name: "브이에이코퍼레이션",
      nickname: "영화그래픽",
      amount: 1000,
      series: "Series A"
    },
    {
      name: "더블유컨셉코리아",
      nickname: "더블유컨셉",
      amount: 1000,
      series: "Series B"
    },
    {
      name: "베어로보틱스",
      nickname: "페니",
      amount: 1000,
      series: "Series B"
    },
    { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
    {
      name: "비엔에이치리서치",
      nickname: "뇌질환 치료제",
      amount: 130,
      series: "Series B"
    },
    {
      name: "브이에이코퍼레이션",
      nickname: "영화그래픽",
      amount: 1000,
      series: "Series A"
    },
    {
      name: "더블유컨셉코리아",
      nickname: "더블유컨셉",
      amount: 1000,
      series: "Series B"
    },
    { name: "베어로보틱스", nickname: "페니", amount: 1000, series: "Series B" }
  ]
};
export const tableData = [
  { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
  {
    name: "비엔에이치리서치",
    nickname: "뇌질환 치료제",
    amount: 130,
    series: "Series B"
  },
  {
    name: "브이에이코퍼레이션",
    nickname: "영화그래픽",
    amount: 1000,
    series: "Series A"
  },
  {
    name: "더블유컨셉코리아",
    nickname: "더블유컨셉",
    amount: 1000,
    series: "Series B"
  },
  {
    name: "베어로보틱스",
    nickname: "페니",
    amount: 1000,
    series: "Series B"
  },
  { name: "에프앤씨", nickname: "투자조합", amount: 470, series: "M&A" },
  {
    name: "비엔에이치리서치",
    nickname: "뇌질환 치료제",
    amount: 130,
    series: "Series B"
  },
  {
    name: "브이에이코퍼레이션",
    nickname: "영화그래픽",
    amount: 1000,
    series: "Series A"
  },
  {
    name: "더블유컨셉코리아",
    nickname: "더블유컨셉",
    amount: 1000,
    series: "Series B"
  },
  { name: "베어로보틱스", nickname: "페니", amount: 1000, series: "Series B" }
];
export interface ICompany {
  name: string;
  nickname: string;
  amount: number;
  series: string;
}
export interface IData {
  [key: string]: ICompany[];
}
