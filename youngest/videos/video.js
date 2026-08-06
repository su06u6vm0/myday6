// 1. 影片資料庫
const videos = [

//{
//title:"DinDin's Music High",
//category:"電台/廣播",
//date:"2026.08.05",
//videoId:"",
//description:"DinDin's Music High"
//},

{
title:"[DAY6 VLOG] Kang Young Hyun VLOG | ＜YOUNGEST＞ Comeback",
category:"幕後花絮",
date:"2026.08.06",
videoId:"F8vjj-tlnnA",
description:"DAY6 VLOG"
},

{
title:"Young K \"Marionette\" LIVE CLIP",
category:"Live 演唱",
date:"2026.08.05",
videoId:"dSSyyO5pBtk",
description:"DAY6"
},

{
title:"15년 우정도 버티기 힘든 극한 알바 | 무한리필 알바 | 워크돌ㅣ프로미스나인 지원, 데이식스 영케이",
category:"訪談",
date:"2026.08.05",
videoId:"fGJi6NSm3jk",
description:"Workdol"
},


{
title:"Queen's Day with 영케이 full ver. / [가비의 슈퍼라디오] I KBS 260805 방송",
category:"電台/廣播",
date:"2026.08.05",
videoId:"YjgGV7kgbJA",
description:"Gabee's Super Radio"
},

//
{
title:"[ENG] 영케이 왔다 샤따 내려~! | 유인라디오 S3 EP.16",
category:"電台/廣播",
date:"2026.08.05",
videoId:"KS33XscazTk",
description:"You In Radio"
},

{
title:"Young K - Shut The Door | Show! MusicCore | aired on MBC260801 #YoungK",
category:"音樂節目",
date:"2026.08.05",
videoId:"BOIQ_cr9zOo",
description:"Show! MusicCore"
},

{
title:"Queen's Day w/ 영케이 Young K🚪🍀 [가비의 슈퍼라디오] | KBS 260805 (수) 방송",
category:"直播",
date:"2026.08.05",
videoId:"CeQH9at4Fxg",
description:"Gabee's Super Radio"
},

{
title:"[한해의 키스 더 라디오] 놀라운 초대석 with. 영케이 (Young K) | KBS 260804방송",
category:"電台/廣播",
date:"2026.08.05",
videoId:"NhhZ47g3jRk",
description:"韓海的 Kiss the Radio"
},

{
title:"쿨룩 LIVE ▷ 영케이 (Young K) ‘F World’ / [한해의 키스 더 라디오] | KBS 260804 방송",
category:"Live 演唱",
date:"2026.08.05",
videoId:"Cr8DLIR7_g0",
description:"韓海的 Kiss the Radio"
},

{
title:"[한해의 키스 더 라디오] 놀라운 초대석 with. 영케이 | KBS 260804 방송",
category:"直播",
date:"2026.08.04",
videoId:"cH4jAEjaZyo",
description:"韓海的 Kiss the Radio"
},

{
title:"[🔊8D Bank] Young K (DAY6) (영케이) - Shut The Door | KBS WORLD TV 260731",
category:"音樂節目",
date:"2026.08.04",
videoId:"U-oI4y2wyEA",
description:"Music Bank"
},

{
title:"문단속은 하고 폰단속은 안한 사건 | EP. 151 영케이 | 살롱드립",
category:"訪談",
date:"2026.08.04",
videoId:"SXSYm1g2C24",
description:"Salon Drip"
},

{
title:"Young K \"Shut The Door\" LIVE CLIP",
category:"Live 演唱",
date:"2026.08.03",
videoId:"Uxw1qWGTeaQ",
description:"DAY6"
},

{
title:"[#최애직캠] Young K (영케이) – Shut The Door | 쇼! 음악중심 | MBC260801",
category:"音樂節目",
date:"2026.08.03",
videoId:"lGKpwoCYxes",
description:"Show! Music Core"
},

{
title:"(Interview) Interview with Young K (DAY6) ヨンケイ 영케이 with PENGSOO [Music Bank] | KBS WORLD TV 260731",
category:"音樂節目",
date:"2026.08.03",
videoId:"XMJ6uB5tPEU",
description:"Music Bank"
},

{
title:"(Interview) MC Bad Challenge [Music Bank] | KBS WORLD TV 260731",
category:"音樂節目",
date:"2026.08.03",
videoId:"JsJ6WRboAU4",
description:"Music Bank"
},

{
title:"이걸 맞힌다고? Young K(영케이)가 플리상 보고 소름돋은 이유 🔮 | 스포티파이 플리상",
category:"訪談",
date:"2026.08.02",
videoId:"2g8nJniWJhY",
description:"Spotify"
},

{
title:"같이 시계 게임하고 싶은 남자 1위 영케이(YOUNG K of Day6) 'Shut The Door' #뮤직뱅크 | KBS 260731 방송",
category:"音樂節目",
date:"2026.08.02",
videoId:"bazmtRyVIWY",
description:"Music Bank"
},

{
title:"Young K(영케이) 'Shut The Door' Spotify Live | 스포티파이 K-Pop ON! LINE",
category:"Live 演唱",
date:"2026.08.02",
videoId:"Ku7j2Y7BI54",
description:"Spotify Live"
},

{
title:"Young K \"Shut The Door\" M/V Reaction Video",
category:"幕後花絮",
date:"2026.08.02",
videoId:"g8PKy5E75WQ",
description:"M/V Reaction"
},

{
title:"[#음중직캠] Young K (영케이) – Shut The Door FanCam | 쇼! 음악중심 | MBC260801",
category:"音樂節目",
date:"2026.08.01",
videoId:"6Ujxv4kEb20",
description:"Show! Music Core"
},

{
title:"[#음중풀캠] Young K (영케이) – Shut The Door FullCam | 쇼! 음악중심 | MBC260801",
category:"音樂節目",
date:"2026.08.01",
videoId:"EIC8Xq_zSkU",
description:"Show! Music Core"
},

{
title:"Young K (영케이) - Shut The Door | Show! MusicCore | MBC260801방송",
category:"音樂節目",
date:"2026.08.01",
videoId:"purJ2mlMDmw",
description:"Show! Music Core"
},

{
title:"(ENG)[MusicBank Interview Cam] 영케이 (Young K Interview) l @MusicBank KBS 260731",
category:"音樂節目",
date:"2026.08.01",
videoId:"mRI34tVN7co",
description:"Music Bank"
},

{
title:"Young K \"Shut The Door\" Recording Behind",
category:"幕後花絮",
date:"2026.08.01",
videoId:"jBEnruI2uiY",
description:"Behind"
},

{
title:"[세로] Young K (DAY6) - 다시 돌아온 계절 (드라마 〈멋진 신세계〉 OST) [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"Live 演唱",
date:"2026.08.01",
videoId:"DSbo76PPkVw",
description:"The Seasons"
},

{
title:"[가로] Young K (DAY6) - Shut The Door (Band VER.) [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"Live 演唱",
date:"2026.08.01",
videoId:"9QONe-G_XMk",
description:"The Seasons"
},

{
title:"Young K (DAY6) - 작업실에서 커피를 [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"Live 演唱",
date:"2026.08.01",
videoId:"Ay4f5DdZVaA",
description:"The Seasons"
},

{
title:"＂식비 걱정도 있고...＂먹짱 Young K가 열심히 활동하는 이유😂 [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"訪談",
date:"2026.08.01",
videoId:"Bpxyhv0MGTs",
description:"The Seasons"
},

{
title:"Young K (DAY6) - 다시 돌아온 계절 (드라마 ＜멋진 신세계＞ OST) [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"Live 演唱",
date:"2026.08.01",
videoId:"FEc9GR5v0fU",
description:"The Seasons"
},

{
title:"Young K (DAY6) - Shut The Door (Band VER.) [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"Live 演唱",
date:"2026.08.01",
videoId:"ZsMTjOYF2FI",
description:"The Seasons"
},

{
title:"＂아직 식사를 제대로 못해가지고＂성시경 회식에 같이 가기로 약속한 Young K [더 시즌즈-성시경의 고막남친] | KBS 260731 방송",
category:"訪談",
date:"2026.08.01",
videoId:"CVviYvgR-2k",
description:"The Seasons"
},

{
title:"Young K \"Shut The Door\" M/V Making Film",
category:"幕後花絮",
date:"2026.07.31",
videoId:"sWevSgYuCpE",
description:"Making Film"
},

{
title:"[얼빡직캠 4K] 영케이 'Shut The Door' (Young K Facecam) @뮤직뱅크(Music Bank) 260731",
category:"音樂節目",
date:"2026.07.31",
videoId:"kqKt0CJXbxI",
description:"Music Bank"
},

{
title:"[K-Fancam] 영케이 'Shut The Door' (Young K Fancam) @뮤직뱅크(Music Bank) 260731",
category:"音樂節目",
date:"2026.07.31",
videoId:"bIb7IGI8Nsk",
description:"Music Bank"
},

{
title:"[K-Fancam 8K] 영케이 직캠 'Shut The Door' (Young K Fancam)🎧공간음향.Ver @MusicBank 260731",
category:"音樂節目",
date:"2026.07.31",
videoId:"jLkCtt3pLNI",
description:"Music Bank"
},

{
title:"문 닫고 들어오세요 🚪 Young K(영케이)가 LINE으로 전하는 가장 솔직한 이야기 ㅣ스포티파이 K-Pop ON! LINE",
category:"訪談",
date:"2026.07.31",
videoId:"hjvqYIrWxaY",
description:"Spotify K-Pop ON! LINE"
},

{
title:"Shut The Door - Young K (DAY6) [뮤직뱅크/Music Bank] | KBS 260731 방송",
category:"音樂節目",
date:"2026.07.31",
videoId:"biuA0-JeRJ8",
description:"Music Bank"
},

{
title:"‘Shut The Door로 컴백한’ Young K🦊 은행장과 빵행장🐱의 완벽한 댄스 챌린지 [뮤직뱅크/Music Bank] | KBS 260731 방송",
category:"音樂節目",
date:"2026.07.31",
videoId:"8ag-eEAKxK8",
description:"Music Bank"
},

{
title:"[입덕직캠] 영케이 직캠 4K 'Shut The Door' (Young K FanCam) | @MCOUNTDOWN_2026.7.30",
category:"音樂節目",
date:"2026.07.30",
videoId:"D63YFA68v-8",
description:"M Countdown"
},

{
title:"'컴백 인터뷰' Young K (DAY6), 후이 (HUI) #엠카운트다운 EP.939 | Mnet 260730 방송",
category:"音樂節目",
date:"2026.07.30",
videoId:"VWsUIdCt7-M",
description:"M Countdown"
},

{
title:"[FULL] Yonge St. 부르려고 영스 나옴~!🎤 Young K (영케이) 보는 라디오 | 웬디의 영스트리트 | 260729",
category:"電台/廣播",
date:"2026.07.30",
videoId:"WhhbeXrVf0o",
description:"Wendy's Young Street"
},

{
title:"[MPD직캠] 영케이 직캠 4K 'Shut The Door' (Young K FanCam) | @MCOUNTDOWN_2026.7.30",
category:"音樂節目",
date:"2026.07.30",
videoId:"y3bVxtqt8mU",
description:"M Countdown"
},

{
title:"[집방캠][4K] Young K(DAY6) - Yonge St. | 웬디의 영스트리트 | 260729",
category:"Live 演唱",
date:"2026.07.29",
videoId:"_FqDC74p-yE",
description:"Wendy's Young Street"
},

{
title:"회사에서 전화 받은 썰 푼다. \/ 나의 스테이 답사기 \\",
category:"訪談",
date:"2026.07.29",
videoId:"wEHOhtvZGfI",
description:"스테이폴리오"
},

{
title:"캐나다 영어 VS 미국 영어 (영케이 선생님)",
category:"訪談",
date:"2026.07.29",
videoId:"FAhShBO_Sa4",
description:"빠더너스 BDNS"
},

{
title:"Young K \"Shut The Door\" Singalong Guide Video",
category:"幕後花絮",
date:"2026.07.29",
videoId:"fQI52C2bj6w",
description:"Singalong Guide Video"
},

{
title:"DAY6(데이식스) 영케이 님에게 동국대 말고 다른 학교도 붙었었는지 묻다",
category:"訪談",
date:"2026.07.28",
videoId:"dPreReo3jOA",
description:"Mimiminu"
},

{
title:"Young K | Beginning of the YOUNGEST",
category:"幕後花絮",
date:"2026.07.28",
videoId:"onEf1dYJFg0",
description:"DAY6"
},

{
title:"가광 초대석, 너를 만나 with 영케이 full ver. / [폴킴의 가요광장] I KBS 260728 방송",
category:"電台/廣播",
date:"2026.07.28",
videoId:"uhdmiavUafc",
description:"Paul Kim的歌謠廣場"
},

{
title:"필터 없는 남자 영케이! 혓바닥 자제령🚨 광희랑 딱 30분만! EP.04",
category:"訪談",
date:"2026.07.28",
videoId:"HIYOQI1Xo5Y",
description:"和光熙的30分鐘！"
},

{
title:"So I shut the door 🚪 뛰어들어 내 침대 속으로 🛏️ l Young K \"Shut The Door\" M/V Behind",
category:"幕後花絮",
date:"2026.07.28",
videoId:"eEVnho1qCn4",
description:"M/V Behind"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ COMEBACK LIVE",
category:"直播",
date:"2026.07.27",
videoId:"D2QlQxSQbUY",
description:"回歸直播"
},

{
title:"Young K - Ordinary Days (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"UI5nw2tVRWs",
description:"DAY6"
},

{
title:"Young K - Gypsophila (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"e0GkaG5uQzk",
description:"DAY6"
},

{
title:"Young K - Heading Home (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"EmVpJcbC55c",
description:"DAY6"
},

{
title:"Young K - Goodbye, Love (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"mat_XO06M4w",
description:"DAY6"
},

{
title:"Young K - whatever (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"m6jzNA1-PVE",
description:"DAY6"
},

{
title:"Young K - Drivin′ into Hell (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"fKsdcHe2sWw",
description:"DAY6"
},

{
title:"Young K - A Hundred Whys for Goodbye (with JINJOO of DNCE) (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"9rWvNCKpubI",
description:"DAY6"
},

{
title:"Young K - million reasons (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"sWUwfjSU1o0",
description:"DAY6"
},

{
title:"Young K - Yonge St. (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"TV0ZSPJzE4Q",
description:"DAY6"
},

{
title:"Young K - SPIKE (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"BkvwNZWXCg8",
description:"DAY6"
},

{
title:"Young K - Anthem (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"t6cdz9m9wfI",
description:"DAY6"
},

{
title:"Young K - Hey Honey (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"ICllfYfKFxY",
description:"DAY6"
},

{
title:"Young K - F world (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"onJkeUe5Svs",
description:"DAY6"
},

{
title:"Young K - Shut The Door (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"SNyvnJ5-Vz8",
description:"DAY6"
},

{
title:"Young K - Marionette (Official Audio)",
category:"專輯相關",
date:"2026.07.27",
videoId:"2ONJ1CJLxMw",
description:"DAY6"
},

{
title:"Young K \"Shut The Door\" M/V",
category:"M/V",
date:"2026.07.27",
videoId:"W9SBhNLTDVw",
description:"Official M/V"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ Concept Film Making Film",
category:"幕後花絮",
date:"2026.07.27",
videoId:"XywcFtGhvlA",
description:"Making Film"
},

{
title:"[#놀라운토요일] 난 〈Shut The Door〉를 이미 좋아해💕 믿고 듣는 영케이의 솔로 컴백 무대 최초 공개🎤",
category:"綜藝節目",
date:"2026.07.27",
videoId:"p-ylwkjbD6E",
description:"驚人的星期六"
},

{
title:"Young K \"Shut The Door\" M/V Teaser 2",
category:"M/V",
date:"2026.07.26",
videoId:"HTYe6Kq2D-c",
description:"M/V Teaser 2"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ Jacket Making Film",
category:"幕後花絮",
date:"2026.07.26",
videoId:"IaAdWJ9_kiE",
description:"Making Film"
},

{
title:"Young K \"Shut The Door\" M/V Teaser 1",
category:"M/V",
date:"2026.07.25",
videoId:"indzGCaFMwo",
description:"M/V Teaser 1"
},

{
title:"떼창을 부르는 영케이의 신곡 〈셧 더 도어〉🎤 영케이를 향한 내 맘은 오픈 더 도어🚪#놀라운토요일 | amazingsaturday EP.427 | tvN 260725 방송",
category:"綜藝節目",
date:"2026.07.25",
videoId:"ZNhQiClHXKY",
description:"驚人的星期六"
},

{
title:"[밥묵자] 데이식스 영케이와 대희식스티포 올드케이의 초밥 한 끼",
category:"訪談",
date:"2026.07.25",
videoId:"amQq7wdMCXg",
description:"꼰대희"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ Live Album Sampler EP.03 ABOVE",
category:"專輯相關",
date:"2026.07.23",
videoId:"uMSAWKaIhrY",
description:"專輯試聽 EP.03"
},

{
title:"Young K ＜YOUNGEST＞ Track 2. \"Shut The Door\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.23",
videoId:"Qkn6oCdewBo",
description:"Track 2 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 13. \"집으로 향한다\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.23",
videoId:"Yw73xAH_1C8",
description:"Track 13 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 12. \"Goodbye, Love\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.23",
videoId:"U2x-RJEhWG8",
description:"Track 12 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 6. \"SPIKE\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.22",
videoId:"LvUj-5oyUHQ",
description:"Track 6 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 5. \"응원가\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.22",
videoId:"9dmWPeA_KNA",
description:"Track 5 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 3. \"F world\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.22",
videoId:"E1ayJyONHpE",
description:"Track 3 歌詞預告"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ Live Album Sampler EP.02 THROUGH",
category:"專輯相關",
date:"2026.07.21",
videoId:"ZpwI935D9uo",
description:"專輯試聽 EP.02"
},

{
title:"Young K ＜YOUNGEST＞ Track 15. \"작업실에서 커피를\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.21",
videoId:"ZpmPTznAZM4",
description:"Track 15 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 8. \"million reasons\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.21",
videoId:"-GehcUKsaJA",
description:"Track 8 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 4. \"Hey Honey\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.21",
videoId:"_lXY19m4R40",
description:"Track 4 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 11. \"whatever\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.20",
videoId:"uwCs4EWz_SU",
description:"Track 11 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 7. \"Yonge St.\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.20",
videoId:"5rrz0eQDM0c",
description:"Track 7 歌詞預告"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ Live Album Sampler EP.01 UNDER",
category:"專輯相關",
date:"2026.07.19",
videoId:"elppWyUyyt4",
description:"專輯試聽 EP.01"
},

{
title:"Young K ＜YOUNGEST＞ Track 14. \"안개꽃\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.19",
videoId:"ZQ6wDki0cXA",
description:"Track 14 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 9. \"우리가 헤어질 100가지 이유 (with JINJOO of DNCE)\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.19",
videoId:"Xrsfjfyocnc",
description:"Track 9 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 10. \"Drivin' into Hell\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.18",
videoId:"FkCEIDfcgyY",
description:"Track 10 歌詞預告"
},

{
title:"Young K ＜YOUNGEST＞ Track 1. \"Marionette\" Lyrics Spoiler",
category:"專輯相關",
date:"2026.07.18",
videoId:"5cU53Cd6aBs",
description:"Track 1 歌詞預告"
},

{
title:"데이식스(DAY6) 영케이 님 초대석 (2026.07.17)",
category:"直播",
date:"2026.07.17",
videoId:"SpJItanYJKw",
description:"Mimiminu YouTube Live"
},

{
title:"같은 밴쿠버, 다른 느낌.. l [그르르갉 : 진대 토크] EP8. DAY6 영케이",
category:"訪談",
date:"2026.07.17",
videoId:"VM7YQMvUxXE",
description:"딘딘은 딘딘"
},

{
title:"Young K 2nd Full Album ＜YOUNGEST＞ Concept Film",
category:"專輯相關",
date:"2026.07.07",
videoId:"JgPuGZ99an0",
description:"概念影片"
}

];

// 2. 核心變數設定
const container = document.getElementById("video-container");
const paginationContainer = document.getElementById("pagination-container");

let currentPage = 1;          // 當前頁碼
const itemsPerPage = 12;      // 💡 一頁要顯示幾張卡片（你可以自由修改，建議 6 或 9）
let currentFilteredVideos = [...videos]; // 記錄目前被篩選出來的影片清單，預設為全部影片

// 重新整理頁面時，回到最上方
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// 3. 渲染卡片 (加上 Slice 分頁切割)
function displayVideos(list) {
  container.innerHTML = "";

  // 計算目前頁面要拿取的資料範圍
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = list.slice(startIndex, endIndex);

  // 如果這頁剛好沒有任何影片，顯示提示文字
  if (paginatedList.length === 0) {
    container.innerHTML = "<p style='text-align:center; grid-column: 1/-1; padding: 40px;'>沒有找到相關影片。</p>";
    return;
  }

  paginatedList.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
		<a href="https://www.youtube.com/watch?v=${video.videoId}"
		target="_blank">

		<img src="https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg">
        <div class="info">
          <h3>${video.title}</h3>
          <p>${video.date}</p>
          <p>${video.description}</p>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
}

// 4. 渲染分頁按鈕（固定 5 個數字，當前頁保持在中間）
function renderPagination(totalItems) {
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 如果總頁數只有 1 頁或 0 頁，不顯示分頁
  if (totalPages <= 1) return;

  // 1.)上一頁按鈕
  const prevBtn = document.createElement("button");
  prevBtn.innerText = "‹";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateView();
    }
  });
  paginationContainer.appendChild(prevBtn);

  // 2.)計算 5 個數字按鈕的起始（startPage）與結束（endPage）
  const maxButtons = 5; // 畫面上最多顯示 5 個數字按鈕
  let startPage, endPage;

  if (totalPages <= maxButtons) {
    // 如果總頁數小於等於 5 頁，全顯示
    startPage = 1;
    endPage = totalPages;
  } else {
    // 總頁數大於 5 頁時，將目前頁碼（currentPage）放在最中間
    startPage = currentPage - 2;
    endPage = currentPage + 2;

    // 邊界處理：如果算出來小於 1 頁（例如在第 1 或 2 頁時）
    if (startPage < 1) {
      startPage = 1;
      endPage = maxButtons;
    }

    // 邊界處理：如果算出來超過總頁數（例如在最後幾頁時）
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - maxButtons + 1;
    }
  }

  // 3.)渲染數字按鈕
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = i;
    if (i === currentPage) {
      pageBtn.classList.add("active");
    }
    pageBtn.addEventListener("click", () => {
      currentPage = i;
      updateView();
    });
    paginationContainer.appendChild(pageBtn);
  }

  // 4.)下一頁按鈕
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "›";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateView();
    }
  });
  paginationContainer.appendChild(nextBtn);
}

// 5. 統一更新畫面
function updateView() {
  displayVideos(currentFilteredVideos);
  renderPagination(currentFilteredVideos.length);
  
  // 按下一頁時，畫面捲到影片列表開頭
  document.getElementById("section-filter").scrollIntoView({
  behavior: "smooth",
  block: "start"
  });
  
}

// 6. 整合分類篩選功能
function filterVideos(category) {
  currentPage = 1; // 💡 每次點選分類，自動切回第 1 頁！

  if (category === "All") {
    currentFilteredVideos = videos;
  } else {
    currentFilteredVideos = videos.filter(video => video.category === category);
  }

  updateView();
}

// 初次啟動網頁
updateView();
