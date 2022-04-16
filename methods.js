// <----------------------------------------------------------------String--------------------------------------------------------------------->
String(); // chuyển thành chuỗi
string.split(); // Tách chuỗi dựa vào điểm chung và trả về dưới dạng mảng (array)
string.toLowerCase(); // chuyển tất cả chữ cái trong chuỗi sang in thường
string.toUpperCase(); // chuyển tất cả chữ cái trong chuỗi sang in hoa
string.startsWith(""); // kiểm tra xem value truyền vào có phải là bắt đầu trong chuỗi đó không (trả về kiểu boolean)
string.endsWith(""); // kiểm tra xem value truyền vào có phải là kết thúc trong chuỗi đó không (trả về kiểu boolean)
string.includes(""); // kiểm tra xem value truyền vào có trong chuỗi đó không (trả về kiểu boolean)
string.indexOf(""); // Trả về vị trí value truyền vào đầu tiên trong chuỗi đó nếu không tìm thấy thì trả về -1
string.lastIndeOf(""); // Trả về vị trí value truyền vào cuối cùng trong chuỗi đó
string.replace("searchValue", "replaceValue"); // Thay thế value trong chuỗi
string.repeat(""); // Lặp
string.trim(); // Loại bỏ khoảng trắng ở 2 đầu chuỗi
string.trimStart(); // Loại bỏ khoảng trắng ở  đầu chuỗi
string.trimEnd(); // Loại bỏ khoảng trắng ở cuối chuỗi
string.charAt(); // Lấy ra kí tự dựa vào vị trí index truyền vào

//---string.slice
string.slice(); // Coppy thành một chuỗi mới y hệt chuỗi ban đầu
string.slice("start"); // Coppy thành một chuỗi mới bắt đầu từ vị trí index được truyền vào
string.slice("start", "end"); // Coppy thành một chuỗi mới bắt đầu từ vị trí index được truyền vào đến tị trí kết thúc -1

// ---string.substr
string.substr(from, length); // Coppy thành một chuỗi mới bắt đầu từ vị trí index được truyền vào và só kí tự muốn lấy ra
//---string.substring
string.substring(start, end); // Coppy thành một chuỗi mới bắt đầu từ vị trí index được truyền vào đến vị trí kết thúc -1

// <---------------------------------------------------------------------Number---------------------------------------------------------------->
Number.parseInt(); // -> Số nguyên
+"123"; // convers sang number
Number.parseFloat(); // -> Kiểu số thực
Math.abs(); // -> Kiểu giá trị tuyệt đối
Math.floor(); // -> Làm tròn xuống
Math.ceil(); // -> làm tròn lên
Math.round(); // Làm tròn gần nhất
toFixed(); // -> Số value truyền vào là số phần tử được lấy sau dấu chấm (TRẢ VỀ KIỂU STRING)
Math.random(); // -> Random từ 0 -> 1
Math.max(); // -> Trả ra số lớn nhất
Math.min(); // -> Trả ra số nhỏ nhất
Math.pow(x, y); // -> Trả sa số mũ -> x^y
Math.sign(); // -> giá trị tuyền vào là số dương thì trả về 1, còn nếu là số âm thì trả về -1

// <---------------------------------------------------------------------Date------------------------------------------------------------------>
new Date(); // -> Thời gian hiện tại
date.getTime(); // -> Timestamp: tính ra kết quả là miliseconds bắt đầu từ Epoch time 01/01/1970
date.getFullYear(); // -> Trả về năm
date.getMonth(); // -> Trả về tháng (0 -> 11): 0: tháng 1, 11: tháng 12
date.getDate(); // -> Trả về ngày (1 -> 31)
date.getDay(); // -> Trả về thứ (0 -> 6) 0: chủ nhật, 6: thứ 7
date.getHours(); // -> Trả về giờ
date.getMinutes(); // -> Trả về phút
date.getSeconds(); // -> Trả về giây
date.getMilliseconds(); // -> Trả về mili giây

// các hàm set trong Date (thiết lập) truyền vào tham số muốn sửa
date.setFullYear(); // -> Năm (Trả về timestamp)
date.setMonth(); // ->  Tháng (0 -> 11): 0: tháng 1, 11: tháng 12 (Trả về timestamp)
date.setDate(); // ->  Ngày (1 -> 31) (Trả về timestamp)
date.setHours(); // ->  Giờ (Trả về timestamp)
date.setMinutes(); // ->  Phút (Trả về timestamp)
date.setSeconds(); // ->  Giây (Trả về timestamp)
date.setMilliseconds(); // -> Mili giây (Trả về timestamp)

// UTC Giờ quốc tế
date.setUTCFullYear(); // -> Năm (Trả về timestamp)
date.setUTCMonth(); // ->  Tháng (0 -> 11): 0: tháng 1, 11: tháng 12 (Trả về timestamp)
date.setUTCDate(); // ->  Ngày (1 -> 31) (Trả về timestamp)
date.setUTCHours(); // ->  Giờ (Trả về timestamp)
date.setUTCMinutes(); // ->  Phút (Trả về timestamp)
date.setUTCSeconds(); // ->  Giây (Trả về timestamp)
date.setUTCMilliseconds(); // -> Mili giây (Trả về timestamp)

date.toDateString(); // fri May 14 2021
date.toTimeString(); // 00:22:00 GMT+0700 (Indochina Time)
date.toLocaleDateString("vi-VI"); // 14/5/2021
date.toISOString(); // 2021-05-13T17:24:04.286z

// setTimeout: sau bao lâu thực hiện 1 chức năng nào đó trong function
setTimeout(function () {}, miliSeconds); // 1 giây = 1000 mlgiay
clearTimeout(); // Dừng hàm setTimeout

//setInterval: Thực hiện LIÊN TỤC chức năng nòa đó trong function sau mỗi miliSeconde truyền vào
setInterval(function () {}, miliSeconds);
clearInterval(); // Dừng hàm setInterval

//<---------------------------------------------------------------------Aray------------------------------------------------------------------->
// array.method
Array(number); // -> là 1 empty Array, có lenght === number truyền vào
array.length; // ->  Trả về độ dài của mảng
array.reverse(); // ->  Đảo ngược giá trị trong mảng
array.join(); // ->  Nối các phẩn tử trong mảng thành chuỗi(STRING)
array.includes(); // -> Kiểm tra xem mảng đó có chứa phần tử nào đó hay không -> True / False
array.indexOf(); // -> Trả về vị trí của phần tử tìm thấy đầu tiên, nếu không tìm thấy thì trả về -1
array.lastIndexOf(); // -> Trả về vị trí của phần tử tìm thấy cuối cùng
array.push(); // -> Thêm phần tử vào cuối mảng và (trả về độ dài mới của mảng)
array.unshift(); // -> Thêm phần tử vào đầu mảng và (trả về độ dài mới của mảng)
array.pop(); // -> Xóa phần tử cuối cùng của mảng và (trả về phần tử đã xóa)
array.shift(); // -> Xóa đi phần tử đầu tiên trong mảng và (trả về phần tử đã xóa)
array.flat(); // làm phẳng mảng phức tạp
aray.fill();

// --- array.slice -> Tạo ra một mảng mới coppy của mảng ban đầu
array.slice(); // -> Tạo ra mảng mới y hệt mảng ban đầu
array.slice(/*start*/); // -> Vị trí index bắt đầu coppy trong mảng
array.slice(/*start, end*/); // -> start: Vị trí index bắt đầu coppy trong mảng, end: vị trí kết thúc - 1
array.concat(); // gộp 2 mảng với giá trị truyền vào và trả vè mảng mới gồm các mảng đã gộp

// --- array.splice -> (Cắt mảng) Thêm, xóa, thay thế phần tử trong mảng
array.splice(); // -> Xóa hết tất cả phần tử trong mảng -> []: empty array
array.splice(/*start*/); // -> Vị trí index bắt đầu lấy ra trong mảng
array.splice(/*start, deleteCount*/); // -> Start: vị trí index bắt đầu của mảng, deleteCount: số lượng phần tử muốn xóa hoặc thay thế (và trả về phần tử đã xóa)
array.splice(/*start, deleteCount, item*/); // -> Start: vị trí index bắt đầu của mảng, deleteCount: số lượng phần tử muốn xóa hoặc thay thế, item: thêm phần tử vào mảng (và trả về phần tử đã xóa)

// --- array.sort -> Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
// vd: [1, 99, 1000, 5, 09, 'quan', true] -> [1, 1000, 5, 9, 99, 'quan', true]
array.sort(); // -> Sắp xếp các phần tử trong mảng theo chuẩn unicode-16 và trả (về mảng được sắp xếp)
array.sort(fn(a, b)); // fn(a, b): function(callback)

// --- array.find -> Trả về phần tử (element) 'TÌM THẤY ĐẦU TIÊN' trong mảng thỏa điều kiện nào đó  nếu k tìm thấy thì trả về (undefined)
// ví dụ: tìm phần tử đầu tiên trong mảng lớn hơn 10: [1, 99, 102, 5, 09]
array.find((element, index) => element > 10); // trả về phần tử thỏa mãn điều kiện => (99)

// ---array.findIndex -> Trả về vị trí (index) 'TÌM THẤY ĐẦU TIÊN' trong mảng thỏa mãn điều kện, nếu k tìm thấy thì trả về (-1)
// ví dụ: tìm vị trí của phần tử đầu tiên trong mảng lớn hơn 10: [1, 99, 102, 5, 09]
array.findIndex((element, index) => element > 10); // trả về vị trí (index) của phần tử thỏa mãn điều kiện => (1)

//---array.map -> Duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
array.map((value, index, aray));

// ---array.forEach -> Duyệt dua từng phần tử trong mảng nhưng không return (không trả về già cả và không return nên vòng lặp forEach sẽ không bao giờ dừng)
array.forEach((value, index, aray));

// ---array.finter -> Sàng lọc ra 'TẤT CẢ' phần tử trong mãng thỏa điều kiện và trả về mảng mới gồm các phần tử đó, nếu k tìm thấy thì trả về mảng rỗng []
array.filter((value, index, array));

array.some((value, index, array)); // Trả về true nếu thỏa mãn ít nhất 1 điều kiện
array.every((value, index, array)); // trả về true nếu thỏa mãn tất cả các điều kiện, nhưng chỉ càn 1 điều kiện sai thì trả về false

// ---array.reduce -> Nhận về một giá trị duy nhất sau khi tính toán và xử lý trong mảng
array.reduce(fn(accumulator, curentValue, curentIndex, array), initialValue); // -> accumulator: biến lưu trữ, curentValue: giá trị hiện tại, curentIndex: vị trí của giá trị hiện tại, initialValue: giá trị khởi tạo

// <--------------------------------------------------------------Spread operator-------------------------------------------------------------->
// Dùng để sao chép mảng hoặc object sang 1 mảng hoặc object mới
[...array]; // sao chép mảng
//{...object}; // sao chép object
[...array1, ...array2, ...array3]; // gộp các mảng lại thành 1

// <----------------------------------------------------------------LOOP----------------------------------------------------------------------->
// forLoop : Lặp với điều kiện đúng (lặp qua index)
for (let i = 0; i < loop.length; i++) {
  i; // Index;
  loop[i]; // Value
  continue; // Bỏ qua giá trị đó
  break; // Dừng vòng lặp
}

// forOfLoop: lặp qua value
for (let value of loop) {
}

//forIn : (DÙNG CHO OBJ)
for (let key in obj) {
  key; // key trong obj
  obj.key; // value trong obj
  obj[key]; // value trong obj
}

// whiteLoop
// let whiteLoop = [];
// while () {

//   whiteLoop++;
// };

// // do white
// do {

// } while();

// <----------------------------------------------------------------JSON----------------------------------------------------------------------->
JSON.stringify(value); // -> converst giá trị sang dưới dạng JSON string
JSON.parse(); // -> converst gias trij tuwf JSON sang javascript

// <----------------------------------------------------------------Object--------------------------------------------------------------------->
Object.keys(); // Trả về 1 mảng chứa tất cả các keys của obj
Object.values(); // Trả về 1 mảng chứa các giá trị (value) của obj
Object.entries(); // Trả về một mảng nested gồm có key và value vd: [["key", "value"], ["key", "value"]]
Object.assign(); // Gộp 2 hoặc nhiều obj lại với nhau và trả về mảng đã gộp
Object.freeze(); // Đóng băng (ngăn chặn) chỉnh sửa obj
Object.seal(); // Cho phép chỉnh sửa key , value nhưng không được thêm key, value mới
Object.hasOwnProperty(key); // kiểm tra trong obj có chứa key đó không, nếu có thì trả về true, ngược lại trả về false

// optional chaining "?" kiểm tra điều kiện: nếu có thì thực hiện vế sau
Object.fullName?.name; // kiểm tra nếu có key là fullName trong obj thì mới chạy đến name

// destructuring obj

/*const student = {
  name: quan,
  age: 20
}

const {name, age} = student; 
=> student.name, student.age
*/

// <----------------------------------------------------------------Dom----------------------------------------------------------------------->
// document.querySelector("selectort") -> trả về 1 node nếu tồn tại selector đó, còn không thì sẽ trả về null.
document.documentElement; // lấy ra thẻ html
document.body; // lấy ra thẻ body
document.title; // lấy ra thẻ title
document.header; // lấy ra thẻ header
document.querySelector(); // selectors: .header, div, #heading
document.querySelectorAll("selector"); // -> trả về một NodeList chứa danh sách các node, nếu không có thì trả về empty
document.getElementsByClassName("class"); // -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
document.getElementsByTagName("tagName"); // -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
document.getElementsById("id"); // -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []

// NodeList: dùng được forEach có thể dùng index để truy xuất giá trị trong NodeList
// HTMLCollection: không sử dụng được forEach

// Attribute -> thuộc tính : href, id, class, src
selector.getAttribute(""); // selector.getAttribure("attribute") -> lấy ra giá trị attriblute của node đó
selector.setAttribute("", ""); // selector.setAttribute("attribute", "value") -> set (thêm) giá trị cho attributte nào đó của node đó
selector.removeAttribute(""); // selector.removeAttribute("attribute") -> xóa đi giá trị attribute của node đó
selector.hasAttribute(""); // selector.hasAttribute("attribute"),: kiểm tra selector có attribute đó hay không nếu có  -> true còn không thì trả ra false

// TEXT
selector.textContent; // lấy ra tất cả giá trị trong selector đó y hệt như trong code bao gồm cả khoảng trắng, và có thể thay thế giá trị bằng cách gán vào 1 giá trị khác
selector.innerText; // lấy ra các giá trị trong selector và loại bỏ khoẳng trắng không cần thiết, và có thể thay thế giá trị bằng cách gán vào 1 giá trị khác.Nhưng không thể lấy ra các selector có thuộc tính ẩn (ví dụ: display: none)
selector.innerHTML; // lấy ra tất cả giá trị trong selector đó y hệt như trong code bao gồm cả khoảng trắng, và thẻ html có trong đó và có thể thay thế giá trị bằng cách gán vào 1 giá trị khác hoặc hẻ html khác

// CLASS
selector.classList.add(""); // thêm class đó vào selector
selector.classList.remove(""); // xóa đi class trong đó trong selector
selector.classList.contains(""); // kiểm tra xem có class đó trong selector không, trả về true, false
selector.classList.toggle(""); // kiểm tra xem có class đó trong selector không, nếu có thì xóa đi, còn không có thì thêm vào
selector.className; // trả về 1 chuỗi các class của selector đó, có thể thêm, sửa xóa bằng cách gán lại class mới

// CRUD: thêm sửa xóa node trong javascript
document.createElement(""); // Tạo ra 1 Element trong javascript: document.createElement('tag')
/*vd*/ const div = document.createElement("div"); // thẻ div đã được khởi tạo nhưng chưa dược thêm vào body html

//
/*vd*/ const getbody = document.body; // lấy ra node body;
selector.append(); // thêm nhiều element con
selector.appendChild(); // thêm element đó vào body (vidu: getBody.appendChild(div) -> thêm thẻ div vào body html)
document.createTextNode(""); // -> Tạo ra một nội dung (text) trong html
element.cloneNode(true); // -> coppy lại cái selector (node) đó
element.hasChildNodes(); // -> kiểm tra element có phần tử (nội dung) con hay không, có -> true, không thì -> false
element.insertAdjacentText("position", "string"); // Position: (beforebegin, afterbegin, beforeend, afterend)  ->chèn text (nội dung) vào vị trí (position) được truyền
// beforebegin: text được chèn vào trước element đó
// afterbegin: text được chèn vào sau khi mở element đó
// beforeend: text được chèn vào trước khi đóng element đó
// afterend: text được chèn vào sau element đó
element.insertAdjacentElement("position", "node"); // chèn một element(node) vào vị trí (position) được truyền
element.insertAdjacentHTML("position", `html:string`); //chèn một `element(node)` vào vị trí (position) được truyền
parent.insertBefore("note1", "note2"); // di chuyển vị trí của note2 lên trước note1 (note1 và note2 phải cùng cấp và cùng nằm trong 1 thẻ cha(parent))
parent.replaceChild("newChild", "oldChild"); // thay thế oldChild thành newCHild (xóa đi oldChild và thay vào thị trí đó là newChild)

// TRAVERSING: truy suất đến các phần tử trong dom (trước, sau, phần tử cha, phần tử con...)
element.parentNode; // truy suất đến thẻ cha gầm nhất
element.parentElement; // truy suất đến thẻ cha gần nhất
//---removeChild
element.parentNode, /** hoặc */ element.parentElement.removeChild(selector); // xóa element
//---
element.nextElementSibling; // lấy ra thẻ đứng sau nó
element.previousElementSibling; // lấy ra thẻ đứng trước nó
element.nextSibling; // lấy ra node đầu tiên đứng sau nó (nếu có khoảng trắng sẽ lấy khoảng trắng)
element.previousSibling; // lấy ra các node đứng trước nó lấy cả textNode
element.childNodes; // lấy ra tất cả các node(p,div,a...) dưới dạng (mảng) NodeList bên trong nó, bao gồm textNode (khoảng trắng)
element.children; // lấy ra tất cả các node con của nó dưới dạng HTMLCollection (KHÔNG LẤY KHOẢNG TRẮNG)
element.firstChild; // lấy ra phần tử đầy tiên trong element đó bao gồm (textNode)
element.firstElementChild; // lấy ra element con  đầu tiên trong element đó
element.lastChild; // lấy ra phần tử cuối cùng trong element đó
element.lastElementChild; // lấy ra element con cuối cùng trong element đó
selector.contains(); // kiểm tra xem element có chứa element khác không
selector.matches("selector"); // kiểm tra xem elemeny đó có khớp với class được truyền vào hay không(trả về kiểu boolen)

// offset
element.offsetWidth; // trả ra độ rộng của phần tử đó (kiểu number)
elemrnt.offsetHeight; // trả ra chiều cao của phần tử đó (kiểu number)
element.offsetLeft; // trả ra vị trí của element đó so với bên trái trình duyệt ( kiểu number)
element.offsetTop; // trả ra vị trí của element đó so với phía trên trình duyệt (kiểu nunmber)
element.offsetParent; // trả về body

// client : khác offset ở border
element.clientWidth; // trả ra độ rộng của phần tử đó - BORDER - độ rộng thanh scroll nếu có (kiểu number)
element.clientHeight; // trả ra chiều cao của phần tử đó - BORDER - độ rộng thanh scroll nếu có (kiểu number)
element.clientLeft; // trả ra độ rộng của BORDER bên trái (kiểu number)
element.clientTop; // trả ra độ rộng của BORDER phía trên (kiểu nunmber)

// scroll
element.scrollHeight; // trả ra chiều cao thật của phần tử, bao gồm bao gồm nội dung không hiển thị (nhưng không lấy boder)
element.scrollWidth; // trả ra chiều rộng thật của phần tử, bao gồm bao gồm nội dung không hiển thị (nhưng không lấy boder)
element.scrollTop; // trả về khoảng cách của scroll dọc tính từ top
element.scrollLeft; // trả về khoảng cách của scroll ngang tính từ left
element.scroll(x, y); // di chuyển scroll đến vị trí truyền vào
element.scrollIntoView(); // scrool tới phạm vi mà có thể thấy element đó (dùng khi mà scrool qua, không thấy element đó)

// window
window.innerWidth; //  trả ra chiều rộng của cửa sổ viewportX(hiển thị trình duyệt)
window.outerWidth; // trả ra chiều rộng của cả trình duyệt
window.innerHeight; // trả ra chiều cao của cửa sổ viewportY(hiển thị trình duyệt)
window.outerHeight; // trả ra chiều cao của cả trình duyệt
window.pageXOffset; // khoảng cách của scroll ngang tính từ left
window.pageYOffset; // khoảng cách của scroll dọc tính từ top
windown.scroll(x, y); // di chuyển scroll đến vị trí truyền vào

// getBoundingClientRect()
element.getBoundingClientRect(); // trả về 1 object DOMRect {bottom: , height: , left: , right: , top: , width: , x: , y: ,}
// bottom: chiều cao của khối element đó + border + khoảng cách từ khối đó đến top window;
// height: chiều cao của khối element đó;
// wisth: chiều rộng của khối element đó;
// top, y: vị trí của khối element đó so với phía trên window
// left, x: vị trí của khối element đó so với bên trái window
// right: độ rộng của khối element đó + khoảng cách bên trái (left) window

// <----------------------------------------------------------------Even----------------------------------------------------------------------->
element.addEventListener("eventName", handler, { options });
element.removeEventListener("eventName", handler);
// eventName: tên sự kiện
// options: capture : false (mặc định là false(bubbling từ trong ra ngoài))
// options: once : false (mặc định là false) : true (chỉ chạy 1 lần)
// handler: function (even){}

// click: lắng nghe sự kiện click
element.addEventListener("click", function (e) {}); // lắng nghe sự kiện click

//
e.stopPropagation(); // ngăn chặn sự nổi bọt (bubbling) của các sự kiện đến các thẻ khác
e.stopImmediatePropagation(); // ngăn chặn những listenes cũng đang nghe cùng event được gọi
e.target; // target vào chính xác element đang lắng nghe sự kiện
e.currentTarget; // target vào cả phần tử chứa của element đang lắng nghe sự kiện
e.preventDefault(); // ngăn chặn hành vi mặc định của 1 thẻ nào đó (vd: <a href=""></a>)
selector.style.property = value; // thêm thuộc tính style inline vào selector đó
selector.dataset.dataName; // lấy ra data customAttribute,

// load, DOMContentLoaded
window.addEventListener("load", function () {}); // tất cả dòng code được thực thi khi website load xong
document.addEventListener("DOMConntentLoaded", function () {}); // tất cả dòng code được thực thi khi file HTML load xong

// mouse
element.addEventListener("mousemove", function (e) {}); // active Khi di chuyển chuột bên trong element đó
element.addEventListener("mouseover", function (e) {}); // active khi di chuyển chuột vào element hoặc các phần tử con của nó
element.addEventListener("mouseenter", function (e) {}); // active khi di chuyển chuộn vào element đó
element.addEventListener("mousesleave", function (e) {}); // active khi di chuyển chuột ra khỏi element đó

// wheel
element.addEventListener("wheel", function (e) {}); // lắng nghe sự kiện trên con lăn chuột
e.deltaY; // lấy ra giá trị khi lăn con chuột, khi lăn lên là giá trị âm; lăn xuống là giá  trị dương

// Audio
element.addEventListener("ended"); //kích hoạt khi danh sách phát kết thúc
element.addEventListener("volumechange"); // thay đổi âm lượng
element.addEventListener("timeupdate"); // thay đổi khi curentTime thay đổi(trả ra seconds)
element.play(); // bắt đầu phát
element.pause(); // tạm dùng phát
element.load(); // load lại audio
// Audio Prototype
element.duration; // fulltime audio(tổng thời gian của video hoặc đoạn nhạc tính bằng giây)
element.currentTime; // thời gian còn lại của audio

// pageX, pageY, clientX, clientY
e.pageX; // lấy ra vị trí tọa độ chiều ngang của document (có cả scroll)
e.pageY; // lấy ra vị trí tọa độ chiều dọc của document (có cả scroll)
e.clientX; // lấy ra vị trí tọa độ chiều ngang của viewport ( không tính scroll)
e.clientY; // lấy ra vị trí tọa độ chiều dọc của viewport ( không tính scroll)

// key : keydow -> keyprest -> keyup
//(ngoại trừ hàng phím f)
element.addEventListener("keydown", function (e) {}); // active khi nhấn phím xuống hoặc giữ phím
element.addEventListener("keyup", function (e) {}); // active khi vừa kết thúc nhấn phím(khi nhấc tay khỏi phím)
element.addEventListener("keypress", function (e) {}); // active khi nhấn phím xuống giống keydown nhưng sẽ bỏ qua 1 số nút chức năng như (backspace, mũi tên, delete, home, end, ctrl, shift, esc...)
element.addEventListener("change", function (e) {}); // active khi thay đổi input (nhấn enter hoặc nhấp chuột ra ngoài). change chỉ thực hiện duy nhất 1 lần nếu không có sự thay đổi trong input
element.addEventListener("focus", function (e) {}); // active khi focus vào input
element.addEventListener("blur", function (e) {}); // active khi blur ra ngoài input

e.key; // trả ra của tên key vừa được nhấn
e.keyCode; // trả ra số thứ tự của key vừa được nhấn
e.Width; // trả ra số thứ tự của key vừa được nhấn

// submit
// sử dụng cho form
submit; //
this.elements; // trả ra 1 danh sách HTMLFromCtrolsCollection[] gồm các giá trị trong nó khi nhấn submit
e.target.elements; // tương tự như this.elements
this.value; // lấy ra giá trị của của thẻ input
e.target.value; // lấy ra chính xác giá trị của thẻ mà ta target vào

// input: nó sẽ lấy value(Giá trị) mỗi khi chúng ta gõ
element.addEventListener("input", function (e) {});

// debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// <----------------------------------------------------------------LocalStorage----------------------------------------------------------------------->
//localStorage: tương tự cookie, LocalStorage gúp lưu trữ dữ liệu trên trang web đó kể cả khi load lại trang web hay đóng trong web, localStorage chỉ bị mất đi khi bị xóa history của trình duyệt, hoặc dùng localStorage API , xóa trực tiếp trong localStorage
localStorage.setItem("key", "value"); // khởi tạo 1 localStorage gồm có key và value
localStorage.getItem("key"); // lấu ra value của localStorage dựa theo key truyền vào
localStorage.removeItem("key"); // xóa đi 1 localStorage dựa theo key được truyền vào
localStorage.clear(); // xóa đi tất cả localStorage

// <----------------------------------------------------------RegulareExpressiom----------------------------------------------------------------------->
regex.test(""); // kiểm tra value có khớp với
regex.toString(); //
regex.exec(); //
regex.compile(); //

// 2 cách khai báo với regex
const re1 = /value/;
const re2 = new RegExp("value");

// .test(): (trả về true or false)
regex.test(value); // trả về true or false
re1.test("hello word hello value"); // -> true vì có chữ value khớp với const re1 đã khai báo ở trên

// Anchort     ^ and $
// /^value/ : bắt đầu;
// /value$/ : kết thúc;
/value$/; // (kiểm tra VALUE có phải từ cuối cùng trong string đó không)
/^value/; // (kiểm tra VALUE có phải từ đầu tiên trong string đó không)

// Ranges []
/[a-z]/; // tìm ít nhất 1 kí tự nằm trong khoảng từ a->z (in thường)
/[A-Z]/; // tìm ít nhất 1 kí tự nằm trong khoảng từ A->Z (in HOA)
/[0-9]/; // tìm ít nhất 1 KÍ TỰ nằm trong khoảng từ 0->9
/[^0-9]/; // value truyền vào KHÔNG được có KÍ TỰ nằm trong khoảng từ 0->9 (PHỦ ĐỊNH)

// Meta characters /\d/, /\w/, ....
/\d/; // tìm 1 kí tự là số;
/\D/; // tìm 1 kí tự KHÔNG PHẢI SỐ;
/\w/; // tìm 1 kí tự  hoặc dấu (_), hoặc số (không lấy kí tự đặc biệt)
/\W/; //  tương đương [^w]
/\s/; // tìm 1 kí tự là KHOẢNG TRẮNG: spaces, tab, newline
/\S/; // tương đương [^s]
/\n/; // tìm 1 kí tự là newline: (xuống dòng)
/\t/; // tìm 1 kí tự là tab
/./; // tìm bất kí tự nhập vào TRỪ newline:(\n)
/[^]/; // tìm bất kì kí tự nào nhập vào, bao gồm cả newline: (\n)

// Quantifiers: {n}; {n, m}; +; ?; *
/{n}/; // n số lượng nhát định
/{n, m}/; // số lượng trong khoảng từ n -> m
/n+/; // lấy 1 hoặc nhiều kí tự thỏa mãn điều kiện (nếu không có giá trị thì trả về null)
/n*/; // lấy không hoặc nhiều kí tự thỏa mand điều kiện (nếu không có giá trị thì trả về "")
/n?/; // 1 kí tự trước dấu "?" có thể có HOẶC không

// flag
//g: global (lấy ra tất cả các kí tự khớp với value truyền vào)
//i: case insensitive (không phân biệt chữ hoa chữ thường)
//m: multipe lines ( thích hợp khi dùng nhiều hàng)

// groups ()
/()/; //nhóm methods lại với nhau

// vd:
/(\d{3})?(\w+)/.test("123"); // -> true
// (\d{3}: kiểm tra có 3 số)
// ?: vế trước: (\d{3}) có thể có hoặc không ( nếu vế trước sai hoặc không có thì lấy vế sau)
// ((\w+): kiểm tra có 1 hoặc nhiều kí tự phía sau nữa))

// Escaping \ /; [ ]; ( ); { }; ?; +; *; |; .;  ^; $
/\?/.test("?");
/\*/.test("*");

// Boundaries
// \b : lấy ra value đứng 1 mình độc lập
"my name is quan".match(/\bquan/); // -> ["quan"]
// \B : lấy ra value đứng liền với kí tụ khác( trù spack)
"my name isquan".match(/\Bquan/); // -> ["quan"]

// <----------------------------------------------------------Attribute:DeferAndAsync----------------------------------------------------------------------->
<script defer src=""></script>; // defer: non-blocking page (tạm dừng load file js, chờ file khác hoặc lile html load xong mới load)
<script async src=""></script>; // async: non-blocking page (chạy độc lập, load bất đồng bộ, không quan tâm các file khác đã load xong hay chưa</q>)

// <------------------------------------------------------------------------<obj-set>----------------------------------------------------------------------->
const mySet = new Set(); // là một obj lưu trữ những giá trị DUY NHẤT (unique)
mySet.add(""); // thêm 1 value vào obj-set
mySet.has(""); // kiểm tra trong obj-set có chứa giá trị tryền vào không ( trả về kiểu boolean)
mySet.delete(""); // xóa đi value truyền vào trong obj-set đó
mySet.clear(); // xóa toàn bộ giá trị trong obj-set đó
// <------------------------------------------------------------------------<BOM>----------------------------------------------------------------------->
// location
window.location; // trả ra 1 obj gồm các phương thức và địa chỉ của trang web
new URLSearchParams("");

// history
history.back(); // quay lại trang trước đó
history.forward(); // tới trang kế tiếp
history.go(); // truyền vào value number, nếu number là (+) thì tới số trang mà number truyền vào , nếu number là (-) quay lại số trang mà number truyền vào

// navigator : dùng để check xem người dùng vào trang web bằng trình duyệt nào, thiết bị nào,..

//
bind(this);
call(this);
apply(this);

// <------------------------------------------------------------------------<Class>----------------------------------------------------------------------->
class ClassName {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get getter() {
    // lấy ra giá trị
  }

  set setter(a) {
    // set lại giá trị
    this.a = c;
  }

  static staticProperty = staticProperty;

  static staticMethod() {}
}

class NewClassName extends ClassName {
  constructor(a, b, c) {
    super();
  }
}

const className = new ClassName(a, b);

// <----------------------------------------------------------------promise----------------------------------------------------------------------->

//eventLoop :

pending; // đang chờ
resolve; // thành công
reject; // thất bại

// .then:  truyền vào 2 tham số là callback, tham số thứ nhất là onFullfilled , tham số thứ 2 là onRejected
then(onFullfilled(), onRejected()); // onFullfilled -> resolve, onRejected -> rejecter

// nên tách onFullfilled và onRejected thành then và catch để dễ quản lý
then((success) => {
  // nếu lời hứa (promise) thành công (resolve) thì sẽ code sẽ được chạy vào then
})
  .catch((error) => {
    // nếu lời hứa (promise) thất bại (reject) thì sẽ code sẽ được chạy vào catch
  })
  .finally(() => {
    // cho dù lời hứa thành công hay thất bại thì finally cũng sẽ được thực hiện
  });

//
Promise.all([]); // đợi tất cả các promise chạy  xong thì mới trả ra 1 mảng ... promise.all trả về resolve khi TẤT CẢ ĐỀ là resolve, trả về reject khi tất cả promise đó CÓ 1 reject
Promise.race([]); // trả ra promise nào chạy xong đầu tiên, bất kể đó là resolve hay reject
Promise.allSettled([]); // trả về 1 mảng gồm cả resolve và reject

// try{} catch{}
try {
  // nếu khối code đó không lỗi thì thực hiện các câu lệnh trong try
} catch (error) {
  // dùng để bắt lỗi, nếu khối code đó bị lỗi thì sẽ chạy vào catch
} finally {
  // dù lỗi hay không thì finally vẫy được chạy
}

// async await
// async đứng trước function
// await đứng trong 1 function async và chờ 1 promise chạy xong mới thực hiện việc tiếp theo

// function sủa dụng async;
async function fn() {}
const fn = async () => {};
const asyncAwait = {
  abc: async function () {},
  bcd: async () => {},
  async fgh() {},
};

// <----------------------------------------------------------------API----------------------------------------------------------------------->
// cours
same - origin; // https: manhquan.com manhquan.com/posts
not - same - origin; // https: manhquan.com facebook.com

// Status
200 - Success; // (Mỗi lần get thì trả về, hoặc trả về khi thành công 1 cái gì đó)
201 - Create; //(Tạo dữ liệu thành công)

// Hàng 3 redirect
301 - Moved - Permanently;
307 - Temporary - redirect;

// hàng 4 là lỗi
400 - Bad - Request;
401 - Unauthorized;
403 - Forbidden;
404 - Not - Found;
408 - Request - Timeout;

// Hàng 5
502 - bad - Găeway;
504 - Gateway - Timeout;

// methosd fetch
await fetch("http/api...", {
  method: "POST",
});
await fetch("http/api.../id", {
  method: "DELETE",
});
await fetch("http/api.../id", {
  method: "PUT",
});
await fetch("http/api.../id", {
  method: "PATCH",
});

// methods axios

// <----------------------------------------------------------------Modules----------------------------------------------------------------------->
//import
//export
