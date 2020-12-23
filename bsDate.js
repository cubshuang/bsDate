/*
    日期函數bsDate
    https://github.com/cubshuang/bsDate
*/
var bsDate = {
    Now: new Date(),
    Year: function() {return this.Now.getFullYear();},
    Month: function() {return this.Now.getMonth();},
    Day: function() {return this.Now.getDate();},
    setDate: function(d) { this.Now = new Date(d);},
    LastYear_Begin: function() { return this.getYearDate(-1,0);},
    LastYear_End: function() { return this.getYearDate(-1,1);},
    LastQuater_Begin: function() { return this.getQuaterDate(-1,0);},
    LastQuater_End: function() { return this.getQuaterDate(-1,1);},
    LastMonth_Begin: function() { return this.getMonthDate(-1,0);},
    LastMonth_End: function() { return this.getMonthDate(-1,1);},
    LastMonday:function() { return this.getWeekDate(1,-1);},
    LastDay: function() { return this.getDayDate(-1);},
    Today: function() {return this.DateToString(this.Now);},
    ThisMonday:function() { return this.getWeekDate(1,0);},
    ThisMonth_Begin: function() { return this.getMonthDate(0,0);},
    ThisMonth_End: function() { return this.getMonthDate(0,1);},
    ThisQuater_Begin: function() { return this.getQuaterDate(0,0);},
    ThisQuater_End: function() { return this.getQuaterDate(0,1);},
    ThisYear_Begin: function() { return this.getYearDate(0,0);},
    ThisYear_End: function() { return this.getYearDate(0,1);},
    NextDay: function() { return this.getDayDate(1);},
    NextMonday:function() { return this.getWeekDate(1,1);},
    NextMonth_Begin: function() { return this.getMonthDate(1,0);},
    NextMonth_End: function() { return this.getMonthDate(1,1);},
    NextQuater_Begin: function() { return this.getQuaterDate(1,0);},
    NextQuater_End: function() { return this.getQuaterDate(1,1);},
    NextYear_Begin: function() { return this.getYearDate(1,0);},
    NextYear_End: function() { return this.getYearDate(1,1);},
    getDayDate:function(addday){ var d = new Date(this.Now); return this.DateToString(d.setDate(d.getDate()+addday));},
    getWeekDate:function(wkday,addwk){ var d = new Date(this.Now); return this.DateToString(d.setDate(d.getDate()-(((d.getDay()==0)?7:d.getDay())-wkday)+addwk*7));},
    getMonthDate:function(addmth,pos){ var d = new Date(this.Year(),this.Month()+addmth+((pos)?1:0),1); return (pos)?this.DateToString(d.setDate(d.getDate()-1)):this.DateToString(d);},
    getQuaterDate:function(addqrt,pos){ var d = new Date(this.Year(),this.Month()-1+(addqrt+((pos)?1:0))*3,1); return (pos)?this.DateToString(d.setDate(d.getDate()-1)):this.DateToString(d);},
    getYearDate:function(addyear,pos){ var d = new Date(this.Year()+addyear+((pos)?1:0),0,1); return (pos)?this.DateToString(d.setDate(d.getDate()-1)):this.DateToString(d);},
    DateToString: function (showDate) { var d = new Date(showDate); return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();},
    DateToCH: function (showDate) { var d = new Date(showDate); return (d.getFullYear() - 1911) + "/" + (d.getMonth() + 1) + "/" + d.getDate(); },
    DateToCHStr: function (showDate) { var s = this.DateToCH(showDate).split("/"); return (s[0].length > 2 ? "" : "0") + s[0] + (s[1].length > 1 ? "" : "0") + s[1] + (s[2].length > 1 ? "" : "0") + s[2]; },
    RndNum: function () { var d = new Date(); return d.getFullYear().toString() + d.getMonth().toString() + d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString() + d.getMilliseconds().toString(); },
    //OtherDateCompute
    isLeapYear: function (year) { return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); },
    getDaysInMonth: function (year, month) { return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]; },
    qryMonthDate:function (addmth) {
        var now = this.Now, y = this.Year(), m = this.Month(), d = this.Day();
        now.setDate(1);  now.setMonth(m + addmth); now.setDate(Math.min(d, this.getDaysInMonth(y,m)));
        return this.DateToString(now);
    }
}
