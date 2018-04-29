import axios from "axios";
import md5 from "js-md5";
import {getTime} from "../common/js/js";
import {pageKey,bookKey} from "./config";

export function getSliderList() {
  let url = "https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",
    data = new FormData,
    time=getTime();
  data.append("moduleIds", 1);
  data.append("timestamp", time);
  data.append("sign", md5(1+time+pageKey));
  return axios.post(url, data)
}

export function getModules() {
  let url = "https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",
    time=getTime(),
    data = new FormData;
  data.append("moduleIds", "3,5,4,2");
  data.append("timestamp",time );
  data.append("sign", md5("3,5,4,2"+time+pageKey));
  return axios.post(url, data)
}

export function getSort() {
  let url = "https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",
    time=getTime(),
    data = new FormData;
  data.append("moduleIds", "6");
  data.append("timestamp",time);
  data.append("sign",  md5("6"+time+pageKey));
  return axios.post(url, data)
}


// ? r = pcapi / pcbook / librarysearch
//
// !function (a) {
//   PV("书库页"), $(function () {
//     function t(a) {
//       console.log(1111), $.ajax({
//         type: "POST",
//         url: public.ajaxUrl + "?r=pcapi/pcbook/librarysearch",
//         data: a
//       }).done(function (i) {
//         var p = !1;
//         try {
//           p = JSON.parse(i)
//         } catch (i) {
//           var o = '<div class="loading"><img src="img/wait.gif"><span>内容错误,请<a    href="javascript:;">重试</a></span></div>';
//           return $(".loadingbox").html(o), void $(".loading a").on("click", function () {
//             t(a)
//           })
//         }
//         if (200 == p.state) {
//           moduData = p.data, moduData.page = e;
//           var c = Math.ceil(p.total / n);
//           if (l.txt) {
//             var m = _.template($("#bk_wz_tpl").html());
//             $("#shukubox").html(m({data: moduData}))
//           } else {
//             var m = _.template($("#bk_sk_tpl").html());
//             $("#shukubox").html(m({data: moduData}))
//           }
//           if (c > 1) {
//             var s = _.template($("#bk_fy_tpl").html());
//             $(".paging").html(s({data: {num: c, page: e}}))
//           } else $(".paging").remove();
//           public.defaulImg()
//         } else if (401 == p.state) $("#shukubox").html("<p style='text-align: center;padding: 40px;color: #f36f20;font-size: 18px;'>没有找到符合条件的小说，请尝试搜索其它关键字</p>"), $(".paging").remove(); else {
//           var o = '<div class="loading"><img src="img/wait.gif"><span>内容错误,请<a href="javascript:;">重试</a></span></div>';
//           $(".loadingbox").html(o), $(".loading a").on("click", function () {
//             t(a)
//           })
//         }
//       }).fail(function (i, l, e) {
//         var n = '<div class="loading"><img src="img/wait.gif"><span>网络不给力,请<a href="javascript:;">重试</a></span></div>';
//         $(".loadingbox").html(n), $(".loading a").on("click", function () {
//           t(a)
//         })
//       }).always(function () {
//         p++
//       })
//     }
//
//     function i(a) {
//       var t = 5;
//       $.ajax({
//         type: "POST",
//         url: public.ajaxUrl + "?r=pcapi/pcpage/pageinfo",
//         data: {pageId: t, timestamp: public.timestamp, sign: md5(t + public.timestamp + public.pageKey)}
//       }).done(function (t) {
//         var i = !1;
//         try {
//           i = JSON.parse(t)
//         } catch (a) {
//         }
//         200 == i.state && "function" == typeof a && a(i.data)
//       }).fail(function (a, t, i) {
//       }).always(function () {
//         p++
//       })
//     }
//
//     var l = public.queryString(), e = l.page || "1", n = 18, p = 0, o = {
//       page: e,
//       pageSize: n,
//       timestamp: public.timestamp,
//       gender: "all" == l.g ? "" : l.g,
//       classId: "all" == l.t ? "" : l.t,
//       sizeType: "all" == l.s ? "" : l.s,
//       timeType: "all" == l.d ? "" : l.d,
//       end: "all" == l.z ? "" : l.z,
//       chargeType: "all" == l.f ? "" : l.f,
//       sign: md5(e + n + public.timestamp + public.bookKey)
//     };
//     for (var c in o) o.hasOwnProperty(c) && (o[c] || delete o[c]);
//     t(o), i(function (t) {
//       var i = t[0].module_id, l = t[0].module_name,
//         e = {moduleIds: i, timestamp: public.timestamp, sign: md5(i + public.timestamp + public.pageKey)};
//       $.ajax({type: "POST", url: public.ajaxUrl + "?r=pcapi/pcpage/moduleinfo", data: e}).done(function (a) {
//         var t = !1;
//         try {
//           t = JSON.parse(a)
//         } catch (a) {
//         }
//         if (200 == t.state) {
//           moduData = t.data["module" + i], moduData.title = l;
//           var e = _.template($("#bk_bd_tpl").html());
//           $("#coverbd").html(e({data: moduData})), $("#coverbd").seamless({direction: "right", step: 6})
//         }
//         public.defaulImg()
//       }).fail(function (a, t, i) {
//       }).always(function () {
//         p++, console.log(p), 3 == p && "function" == typeof a.callPhantom && a.callPhantom()
//       })
//     })
//   })
// }(window);
