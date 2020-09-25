# 日期函數bsDate

利用javascript於HTML前端，依前端系統時間，取得欲設定之日期，將該欄位輸入預設值。


## 使用方式
```js
<script src="bsDate.js"></script>

var today=bsDate.Today();
var lastMonthBegin=bsDate.LastMonth_Begin();
var lastMonthEnd=bsDate.LastMonth_End();
```

## setDate(dateString)：自行輸入日期值，取得該日期對應之bsDate值
```js
var d=document.getElementById("today").value;
bsDate.setDate(d);
```

## Demo
* [日期函數bsDate](https://cubshuang.github.io/bsDate/)


### 相關參數
| 參數名稱  | 參數方法  |
| :-------- | :-------- |
| 當日 | Today() |
| 前一日 | LastDay() |
| 次日 | NextDay() |
| 上周一 | LastMonday() |
| 本周一 | ThisMonday() |
| 下周一 | NextMonday() |
| 上月月初 | LastMonth_Begin() |
| 上月月底 | LastMonth_End() |
| 上季季初 | LastQuater_Begin() |
| 上季季底 | LastQuater_End() |
| 去年年初 | LastYear_Begin() |
| 去年年底 | LastYear_End() |
| 本月月初 | ThisMonth_Begin() |
| 本月月底 | ThisMonth_End() |
| 本季季初 | ThisQuater_Begin() |
| 本季季底 | ThisQuater_End() |
| 本年年初 | ThisYear_Begin() |
| 本年年底 | ThisYear_End() |
| 下月月初 | NextMonth_Begin() |
| 下月月底 | NextMonth_End() |
| 次季季初 | NextQuater_Begin() |
| 次季季底 | NextQuater_End() |
| 次年年初 | NextYear_Begin() |
| 次年年底 | NextYear_End() |
