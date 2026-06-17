// Mock Data for EcoCatch Application
// Seed data for the KD-Tree (Recycle stations) and Graph (Road network)

// 1. Recycle Stations (iTrash and Public bins in Taipei Area)
const recycleStations = [
  {
    "id": "s1",
    "name": "iTrash 羅斯福路站",
    "lat": 25.0195,
    "lng": 121.5301,
    "type": "iTrash",
    "accepted": [
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "42% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s2",
    "name": "iTrash 公館水源站",
    "lat": 25.0172,
    "lng": 121.5342,
    "type": "iTrash",
    "accepted": [
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "78% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s3",
    "name": "汀州路分類垃圾桶",
    "lat": 25.0145,
    "lng": 121.5365,
    "type": "PublicBin",
    "accepted": [
      "pet_bottle",
      "paper_box",
      "general_waste"
    ],
    "capacity": "15% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "s4",
    "name": "台大校門口回收點",
    "lat": 25.0175,
    "lng": 121.5398,
    "type": "PublicBin",
    "accepted": [
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "90% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s5",
    "name": "公館捷運站出口一",
    "lat": 25.017,
    "lng": 121.533,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "50% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s6",
    "name": "台大綜合體育館站",
    "lat": 25.021,
    "lng": 121.5352,
    "type": "iTrash",
    "accepted": [
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "60% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s7",
    "name": "汀州路三段公共垃圾桶",
    "lat": 25.0152,
    "lng": 121.5318,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "30% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s8",
    "name": "溫州街回收點",
    "lat": 25.0205,
    "lng": 121.5312,
    "type": "PublicBin",
    "accepted": [
      "pet_bottle",
      "paper_box"
    ],
    "capacity": "85% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s9",
    "name": "台大圖書館回收站",
    "lat": 25.0178,
    "lng": 121.5405,
    "type": "iTrash",
    "accepted": [
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "20% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "s10",
    "name": "公館商圈人行道垃圾桶",
    "lat": 25.0158,
    "lng": 121.5345,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle"
    ],
    "capacity": "95% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s11",
    "name": "基隆路長興街口回收站",
    "lat": 25.0162,
    "lng": 121.5435,
    "type": "iTrash",
    "accepted": [
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "55% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "s12",
    "name": "台大第二學生活動中心",
    "lat": 25.0138,
    "lng": 121.5412,
    "type": "PublicBin",
    "accepted": [
      "pet_bottle",
      "aluminum_can",
      "general_waste"
    ],
    "capacity": "40% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_1",
    "name": "[大安區] 敦化南路1段225號 垃圾桶",
    "lat": 25.04062,
    "lng": 121.54914,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "71% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_2",
    "name": "[大安區] 仁愛路4段403號(站) 垃圾桶",
    "lat": 25.037846,
    "lng": 121.555656,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "77% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_3",
    "name": "[大安區] 仁愛路4段325號 垃圾桶",
    "lat": 25.03802,
    "lng": 121.553102,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "59% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_4",
    "name": "[大安區] 仁愛路4段151號(站) 垃圾桶",
    "lat": 25.037942,
    "lng": 121.551633,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "25% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_5",
    "name": "[大安區] 仁愛路4段137號 垃圾桶",
    "lat": 25.038067,
    "lng": 121.550887,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "44% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_6",
    "name": "[大安區] 仁愛路4段79號(站) 垃圾桶",
    "lat": 25.038009,
    "lng": 121.547507,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "29% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_7",
    "name": "[大安區] 仁愛路4段37號 垃圾桶",
    "lat": 25.038164,
    "lng": 121.546244,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "31% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_8",
    "name": "[大安區] 仁愛路4段3號(站) 垃圾桶",
    "lat": 25.038073,
    "lng": 121.543921,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "23% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_9",
    "name": "[大安區] 仁愛路4段1號 垃圾桶",
    "lat": 25.038204,
    "lng": 121.543998,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "81% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_10",
    "name": "[大安區] 忠孝東路4段124號 垃圾桶",
    "lat": 25.041285,
    "lng": 121.54732,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "56% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_11",
    "name": "[大安區] 忠孝東路4段128號(公車)(狗便袋盒) 垃圾桶",
    "lat": 25.041386,
    "lng": 121.547824,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "78% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_12",
    "name": "[大安區] 忠孝東路4段4號 垃圾桶",
    "lat": 25.041345,
    "lng": 121.550338,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "14% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_13",
    "name": "[大安區] 忠孝東路4段122號(公車) 垃圾桶",
    "lat": 25.041314,
    "lng": 121.552802,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "17% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_14",
    "name": "[大安區] 忠孝東路4段71號(公車) 垃圾桶",
    "lat": 25.041501,
    "lng": 121.556227,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "74% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_15",
    "name": "[大安區] 忠孝東路4段59號 垃圾桶",
    "lat": 25.041748,
    "lng": 121.546501,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "53% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_16",
    "name": "[大安區] 忠孝東路4段167號(公車) 垃圾桶",
    "lat": 25.042854,
    "lng": 121.549146,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "70% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_17",
    "name": "[大安區] 忠孝東路4段71號(公車) 垃圾桶",
    "lat": 25.039254,
    "lng": 121.549132,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "53% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_18",
    "name": "[大安區] 敦化南路1段245號(公車) 垃圾桶",
    "lat": 25.040943,
    "lng": 121.548503,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "83% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_19",
    "name": "[大安區] 敦化南路1段198號(站) 垃圾桶",
    "lat": 25.039079,
    "lng": 121.548544,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "46% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_20",
    "name": "[大安區] 敦化南路1段226號(狗便袋盒) 垃圾桶",
    "lat": 25.041382,
    "lng": 121.547569,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "65% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_21",
    "name": "[大安區] 敦化南路1段270號(站) 垃圾桶",
    "lat": 25.041419,
    "lng": 121.546509,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "49% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_22",
    "name": "[大安區] 仁愛路4段325號(站) 垃圾桶",
    "lat": 25.037909,
    "lng": 121.553135,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "31% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_23",
    "name": "[大安區] 仁愛路3段1號 垃圾桶",
    "lat": 25.03839,
    "lng": 121.533023,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "25% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_24",
    "name": "[大安區] 仁愛路3段160號對面公車道 垃圾桶",
    "lat": 25.037847,
    "lng": 121.543488,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "78% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_25",
    "name": "[大安區] 仁愛路3段22號(二) 垃圾桶",
    "lat": 25.03800831,
    "lng": 121.5344728,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "73% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_26",
    "name": "[大安區] 仁愛路3段32號對面公車道(一) 垃圾桶",
    "lat": 25.038001,
    "lng": 121.536925,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "59% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_27",
    "name": "[大安區] 仁愛路3段160號 垃圾桶",
    "lat": 25.03774521,
    "lng": 121.5434511,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "63% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_28",
    "name": "[大安區] 仁愛路3段55號對面公車道(一) 垃圾桶",
    "lat": 25.03816844,
    "lng": 121.5397038,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "56% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_29",
    "name": "[大安區] 仁愛路3段55號對面公車道(二) 垃圾桶",
    "lat": 25.03815264,
    "lng": 121.5394825,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "89% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_30",
    "name": "[大安區] 信義路3段147巷口 垃圾桶",
    "lat": 25.03360478,
    "lng": 121.5417636,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "55% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_31",
    "name": "[大安區] 新生北路1段7號 垃圾桶",
    "lat": 25.04515341,
    "lng": 121.532961,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "89% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_32",
    "name": "[大安區] 新生南路1段85號 垃圾桶",
    "lat": 25.04211585,
    "lng": 121.532961,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "54% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_33",
    "name": "[大安區] 仁愛路3段136號對面公車道 垃圾桶",
    "lat": 25.03788722,
    "lng": 121.5408729,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "55% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_34",
    "name": "[大安區] 新生南路1段131號對面公車道 垃圾桶",
    "lat": 25.03788255,
    "lng": 121.5328913,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "74% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_35",
    "name": "[大安區] 仁愛路3段2號 垃圾桶",
    "lat": 25.0378867,
    "lng": 121.533094,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "31% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_36",
    "name": "[大安區] 仁愛路4段130號公車站牌 垃圾桶",
    "lat": 25.0376584,
    "lng": 121.550684,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "56% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_37",
    "name": "[大安區] 仁愛路4段266巷口公車站牌 垃圾桶",
    "lat": 25.0376012,
    "lng": 121.5524225,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "37% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_38",
    "name": "[大安區] 仁愛路4段314號公車站牌 垃圾桶",
    "lat": 25.037608,
    "lng": 121.554981,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "52% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_39",
    "name": "[大安區] 仁愛路4段416號(公車站牌前) 垃圾桶",
    "lat": 25.0375245,
    "lng": 121.5572633,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "87% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_40",
    "name": "[大安區] 杭州南路2段37號 垃圾桶",
    "lat": 25.0335042,
    "lng": 121.5233804,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "80% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_41",
    "name": "[大安區] 愛國東路35之1號(公車站牌) 垃圾桶",
    "lat": 25.031913,
    "lng": 121.526135,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "67% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_42",
    "name": "[大安區] 杭州南路2段55號(公車站) 垃圾桶",
    "lat": 25.0325548,
    "lng": 121.522821,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "74% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_43",
    "name": "[大安區] 愛國東路31號(大門右) 垃圾桶",
    "lat": 25.032049,
    "lng": 121.524693,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "24% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_44",
    "name": "[大安區] 辛亥路1段與溫州街交叉口高架下 垃圾桶",
    "lat": 25.022375,
    "lng": 121.53317,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "16% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_45",
    "name": "[大安區] 新生南路2段32號(公車專用道)1 垃圾桶",
    "lat": 25.030745,
    "lng": 121.533516,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "72% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_46",
    "name": "[大安區] 新生南路3段與辛亥路交叉口建高下 垃圾桶",
    "lat": 25.022522,
    "lng": 121.534323,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "51% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_47",
    "name": "[大安區] 愛國東路31號(大門左) 垃圾桶",
    "lat": 25.032041,
    "lng": 121.524744,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "34% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_48",
    "name": "[大安區] 愛國東路244號 垃圾桶",
    "lat": 25.032032,
    "lng": 121.52534,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "73% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_49",
    "name": "[大安區] 新生南路2段32號(公車專用道)2 垃圾桶",
    "lat": 25.030674,
    "lng": 121.533532,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "41% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_50",
    "name": "[大安區] 新生南路2段86號(公車專用道)1 垃圾桶",
    "lat": 25.0264,
    "lng": 121.534805,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "63% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_51",
    "name": "[大安區] 愛國東路南門市場中繼站旁 垃圾桶",
    "lat": 25.032333,
    "lng": 121.523006,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "21% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_52",
    "name": "[大安區] 愛國東路21巷口旁 垃圾桶",
    "lat": 25.032199,
    "lng": 121.523946,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "73% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_53",
    "name": "[大安區] 新生南路2段86號(公車專用道)2 垃圾桶",
    "lat": 25.026449,
    "lng": 121.534777,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "68% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_54",
    "name": "[大安區] 和平東路2段134-29號 垃圾桶",
    "lat": 25.024627,
    "lng": 121.54567,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "84% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_55",
    "name": "[大安區] 和平東路2段134號 垃圾桶",
    "lat": 25.024679,
    "lng": 121.544806,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "79% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_56",
    "name": "[大安區] 和平東路3段46號 垃圾桶",
    "lat": 25.024517,
    "lng": 121.547802,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "49% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_57",
    "name": "[大安區] 敦化南路2段196號 垃圾桶",
    "lat": 25.023335,
    "lng": 121.548389,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "27% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_58",
    "name": "[大安區] 敦化南路2段234號 垃圾桶",
    "lat": 25.021205,
    "lng": 121.548396,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "41% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_59",
    "name": "[大安區] 基隆路3段16號旁 垃圾桶",
    "lat": 25.020153,
    "lng": 121.547595,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "56% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_60",
    "name": "[大安區] 基隆路3段8號 垃圾桶",
    "lat": 25.020502,
    "lng": 121.547911,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "59% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_61",
    "name": "[大安區] 敦化南路2段293巷口-北 垃圾桶",
    "lat": 25.023846,
    "lng": 121.549001,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "46% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_62",
    "name": "[大安區] 和平東路3段60號 垃圾桶",
    "lat": 25.024387,
    "lng": 121.549196,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "14% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_63",
    "name": "[大安區] 和平東路3段76號 垃圾桶",
    "lat": 25.024362,
    "lng": 121.550732,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "89% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_64",
    "name": "[大安區] 辛亥路3段55號 垃圾桶",
    "lat": 25.02017,
    "lng": 121.545999,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "28% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_65",
    "name": "[大安區] 基隆路2段224號 垃圾桶",
    "lat": 25.023471,
    "lng": 121.551397,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "88% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_66",
    "name": "[大安區] 辛亥路2段29號(1) 垃圾桶",
    "lat": 25.022194,
    "lng": 121.53582,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "39% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_67",
    "name": "[大安區] 和平東路2段42-1號 垃圾桶",
    "lat": 25.025553,
    "lng": 121.537434,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "52% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_68",
    "name": "[大安區] 羅斯福路4段46號對面(公館捷運站三號出口) 垃圾桶",
    "lat": 25.015447,
    "lng": 121.533852,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "72% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_69",
    "name": "[大安區] 辛亥路2段29號(2) 垃圾桶",
    "lat": 25.022176,
    "lng": 121.535925,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "83% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_70",
    "name": "[大安區] 辛亥路2段109號對面(台大思亮館側) 垃圾桶",
    "lat": 25.021391,
    "lng": 121.538578,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "34% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_71",
    "name": "[大安區] 基隆路4段43號對面(台灣大學側) 垃圾桶",
    "lat": 25.014269,
    "lng": 121.540608,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "61% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_72",
    "name": "[大安區] 羅斯福4段21號(銘傳國小附設幼兒園前) 垃圾桶",
    "lat": 25.013531,
    "lng": 121.535856,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "10% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_73",
    "name": "[大安區] 基隆路3段85號對面(台灣大學側) 垃圾桶",
    "lat": 25.017528,
    "lng": 121.544424,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "67% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_74",
    "name": "[大安區] 羅斯福路4段68號對面(公館捷運站二號出口) 垃圾桶",
    "lat": 25.014714,
    "lng": 121.534383,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "73% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_75",
    "name": "[大安區] 羅斯福路4段107號(台大進修推廣部) 垃圾桶",
    "lat": 25.012058,
    "lng": 121.536833,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "88% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_76",
    "name": "[大安區] 新生南路3段19號 垃圾桶",
    "lat": 25.025049,
    "lng": 121.534894,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "89% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_77",
    "name": "[大安區] 和平東路2段20號 垃圾桶",
    "lat": 25.025722,
    "lng": 121.536181,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "55% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_78",
    "name": "[大安區] 和平東路2段12號 垃圾桶",
    "lat": 25.025803,
    "lng": 121.53572,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "78% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_79",
    "name": "[大安區] 新生南路3段54之3號對面(台大棒球場側) 垃圾桶",
    "lat": 25.020565,
    "lng": 121.53424,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "12% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_80",
    "name": "[大安區] 和平東路2段110號 垃圾桶",
    "lat": 25.024938,
    "lng": 121.542447,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "20% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_81",
    "name": "[大安區] 建國南路2段306號 垃圾桶",
    "lat": 25.024084,
    "lng": 121.537389,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "42% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_82",
    "name": "[大安區] 辛亥路2段169號對面(台灣大學側) 垃圾桶",
    "lat": 25.021049,
    "lng": 121.540962,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "53% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_83",
    "name": "[大安區] 羅斯福路4段83號(捷運公館站公車站)面 垃圾桶",
    "lat": 25.013161,
    "lng": 121.536063,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "56% 空間可用",
    "status": "即將滿載"
  },
  {
    "id": "t_84",
    "name": "[大安區] 新生南路3段66號對面(台大操場側) 垃圾桶",
    "lat": 25.019655,
    "lng": 121.534018,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "54% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_85",
    "name": "[大安區] 辛亥路3段30號(台大國青萊爾富前) 垃圾桶",
    "lat": 25.020597,
    "lng": 121.544711,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "49% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_86",
    "name": "[大安區] 和平東路2段108號 垃圾桶",
    "lat": 25.024875,
    "lng": 121.542188,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "15% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_87",
    "name": "[大安區] 辛亥路2段臨136號(建國高架橋下)(1) 垃圾桶",
    "lat": 25.022804,
    "lng": 121.534648,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can",
      "paper_box"
    ],
    "capacity": "56% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_88",
    "name": "[大安區] 辛亥路2段111號對面(台大思亮館側) 垃圾桶",
    "lat": 25.021069,
    "lng": 121.53903,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "58% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_89",
    "name": "[大安區] 辛亥路2段臨136號(建國高架橋下)(2) 垃圾桶",
    "lat": 25.022575,
    "lng": 121.534708,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "11% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_90",
    "name": "[大安區] 羅斯福路4段76號對面(公館捷運站二號出口) 垃圾桶",
    "lat": 25.014528,
    "lng": 121.534724,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "42% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_91",
    "name": "[大安區] 新生南路3段52號對面(台大棒球場側) 垃圾桶",
    "lat": 25.021146,
    "lng": 121.534289,
    "type": "PublicBin",
    "accepted": [
      "general_waste",
      "pet_bottle",
      "aluminum_can"
    ],
    "capacity": "66% 空間可用",
    "status": "正常營運"
  },
  {
    "id": "t_92",
    "name": "[大安區] 基隆路4段148號前(台大建築與城鄉發展大樓側) 垃圾桶",
    "lat": 25.011887,
    "lng": 121.537783,
    "type": "PublicBin",
    "accepted": [
      "general_waste"
    ],
    "capacity": "77% 空間可用",
    "status": "即將滿載"
  }
];

// 2. Road Network Graph around Gongguan Area
// Nodes (Intersections & Stations)
const graphNodes = {
  "n0": { id: "n0", name: "使用者當前位置", lat: 25.0160, lng: 121.5320, isUser: true },
  "n1": { id: "n1", name: "羅斯福汀州路口", lat: 25.0180, lng: 121.5310 },
  "n2": { id: "n2", name: "水源市場側門", lat: 25.0171, lng: 121.5335 },
  "n3": { id: "n3", name: "舟山路口", lat: 25.0174, lng: 121.5380 },
  "n4": { id: "n4", name: "新生南路路口", lat: 25.0190, lng: 121.5350 },
  
  // Connect to Recycle Stations
  "s1": { id: "s1", name: "iTrash 羅斯福路站", lat: 25.0195, lng: 121.5301, isStation: true },
  "s2": { id: "s2", name: "iTrash 公館水源站", lat: 25.0172, lng: 121.5342, isStation: true },
  "s3": { id: "s3", name: "汀州路分類垃圾桶", lat: 25.0145, lng: 121.5365, isStation: true },
  "s4": { id: "s4", name: "台大校門口回收點", lat: 25.0175, lng: 121.5398, isStation: true },
  "s5": { id: "s5", name: "公館捷運站出口一", lat: 25.0170, lng: 121.5330, isStation: true },
  "s6": { id: "s6", name: "台大綜合體育館站", lat: 25.0210, lng: 121.5352, isStation: true },
  "s7": { id: "s7", name: "汀州路三段公共垃圾桶", lat: 25.0152, lng: 121.5318, isStation: true },
  "s8": { id: "s8", name: "溫州街回收點", lat: 25.0205, lng: 121.5312, isStation: true },
  "s9": { id: "s9", name: "台大圖書館回收站", lat: 25.0178, lng: 121.5405, isStation: true },
  "s10": { id: "s10", name: "公館商圈人行道垃圾桶", lat: 25.0158, lng: 121.5345, isStation: true },
  "s11": { id: "s11", name: "基隆路長興街口回收站", lat: 25.0162, lng: 121.5435, isStation: true },
  "s12": { id: "s12", name: "台大第二學生活動中心", lat: 25.0138, lng: 121.5412, isStation: true }
};

// Edges (Roads connecting nodes)
// Distance represents edge weight in meters (approx calculated from lat/lng)
const graphEdges = [
  { u: "n0", v: "n1", weight: 240 },
  { u: "n0", v: "n2", weight: 200 },
  { u: "n0", v: "s5", weight: 150 },
  
  { u: "n1", v: "s1", weight: 180 },
  { u: "n1", v: "n4", weight: 380 },
  
  { u: "n2", v: "s2", weight: 80 },
  { u: "n2", v: "s5", weight: 60 },
  { u: "n2", v: "n3", weight: 450 },
  
  { u: "s5", v: "s3", weight: 400 },
  
  { u: "n3", v: "s4", weight: 210 },
  { u: "n3", v: "n4", weight: 350 },
  { u: "n3", v: "s2", weight: 380 },
  
  { u: "n4", v: "s1", weight: 480 },
  { u: "s3", v: "s2", weight: 360 },

  // New connected edges for new stations
  { u: "s6", v: "n4", weight: 220 },
  { u: "s6", v: "s2", weight: 430 },
  
  { u: "s7", v: "s5", weight: 230 },
  { u: "s7", v: "s3", weight: 460 },
  
  { u: "s8", v: "n1", weight: 280 },
  { u: "s8", v: "s1", weight: 150 },
  
  { u: "s9", v: "n3", weight: 250 },
  { u: "s9", v: "s4", weight: 80 },
  
  { u: "s10", v: "n2", weight: 170 },
  { u: "s10", v: "s2", weight: 160 },
  
  { u: "s11", v: "s4", weight: 420 },
  { u: "s11", v: "s12", weight: 340 },
  
  { u: "s12", v: "s3", weight: 450 }
];

// 3. Seed Users for Leaderboard (Max-Heap)
const seedUsers = [
  { id: "u1", name: "Alex", points: 1200, level: "環保先鋒", avatarIdx: 1 },
  { id: "u2", name: "Bella", points: 1050, level: "減碳達人", avatarIdx: 2 },
  { id: "u3", name: "Chris", points: 980, level: "回收戰士", avatarIdx: 3 },
  { id: "u4", name: "David", points: 720, level: "綠生活新星", avatarIdx: 4 },
  { id: "u5", name: "Emma", points: 850, level: "減碳好手", avatarIdx: 5 },
  { id: "u6", name: "Fiona", points: 610, level: "綠色實踐者", avatarIdx: 6 }
];

// 4. Coupons in Reward Shop
const coupons = [
  { id: "c1", merchant: "7-Eleven", title: "中杯熱美式咖啡", points: 150, description: "用咖啡開啟你的綠色活力一天", icon: "coffee" },
  { id: "c2", merchant: "全家便利商店", title: "50元折價券", points: 400, description: "全店消費折抵，環保好行", icon: "confirmation_number" },
  { id: "c3", merchant: "Eco-Store", title: "有機再生環保袋", points: 100, description: "耐用 100% 回收纖維製成", icon: "shopping_bag" },
  { id: "c4", merchant: "星巴克", title: "好友分享券 (買一送一)", points: 300, description: "自備環保杯再折抵 10 元", icon: "local_cafe" }
];

// Expose variables globally
window.recycleStations = recycleStations;
window.graphNodes = graphNodes;
window.graphEdges = graphEdges;
window.seedUsers = seedUsers;
window.coupons = coupons;
