import {bookKey} from "./config";
import {getTime} from "../common/js/js";
import axios from "axios"
import md5 from "js-md5";

export function getBookList(page,pageSize,classId,gender,end,chargeType) {
  let url="https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/librarysearch",
    data=new FormData,
    time=getTime();
  data.append("page",page);
    data.append("pageSize",pageSize);
    data.append("timestamp",time);
    data.append("classId",classId);
  data.append("end",1);
  data.append("gender",gender);
  data.append("end",end);
  data.append("chargeType",chargeType);
  data.append("sign",md5(page+""+pageSize+time+bookKey));
    return axios.post(url,data);
}
