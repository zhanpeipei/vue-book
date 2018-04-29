import {getTime} from "../common/js/js";

export function getSortDetail(page,id) {
  let url = "https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/librarysearch",
    data = new FormData;
  data.append("page", page);
  data.append("pageSize",18);
  data.append("timestamp", getTime());
  data.append("classId", id);
  data.append("sign", "db7170cc9eadcb10584b20983bce231a");
  return axios.post(url, data)
}
