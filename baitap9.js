//bài tập tim cung hoang dao
// let date = +prompt("mời nhập ngày sinh:");
// let month = +prompt("mời nhập tháng sinh:");

// switch (month) {
//   case 1:
//     if (date >= 1 && date <= 19) {
//       alert("Cung ma kết");
//     } else {
//       alert("Cung bảo bình");
//     }
//     break;
//   case 2:
//     if (date >= 1 && date <= 18) {
//       alert("Cung bảo bình");
//     } else {
//       alert("Cung song ngư");
//     }
//     break;
//   case 3:
//     if (date >= 1 && date <= 20) {
//       alert("Cung song ngư");
//     } else {
//       alert("Cung bạch dương");
//     }
//     break;
//   case 4:
//     if (date >= 1 && date <= 19) {
//       alert("Cung bạch dương");
//     } else {
//       alert("Cung kim ngưu");
//     }
//     break;
//   case 5:
//     if (date >= 1 && date <= 20) {
//       alert("Cung kim ngư");
//     } else {
//       alert("Cung song tử");
//     }
//     break;
//   case 6:
//     if (date >= 1 && date <= 21) {
//       alert("Cung song tử");
//     } else {
//       alert("Cung cự giải");
//     }
//     break;
//   case 7:
//     if (date >= 1 && date <= 22) {
//       alert("Cung cự giải");
//     } else {
//       alert("Cung sư tử");
//     }
//     break;
//   case 8:
//     if (date >= 1 && date <= 22) {
//       alert("Cung sư tử");
//     } else {
//       alert("Cung xử nữ");
//     }
//     break;
//   case 9:
//     if (date >= 1 && date <= 22) {
//       alert("Cung xử nữ");
//     } else {
//       alert("Cung thiên bình");
//     }
//     break;
//   case 10:
//     if (date >= 1 && date <= 23) {
//       alert("Cung thiên bình");
//     } else {
//       alert("Cung hổ cáp");
//     }
//     break;
//   case 11:
//     if (date >= 1 && date <= 21) {
//       alert("Cung hổ cáp");
//     } else {
//       alert("Cung nhân mã");
//     }
//     break;
//   case 12:
//     if (date >= 1 && date <= 21) {
//       alert("Cung nhân mã");
//     } else {
//       alert("Cung ma kết");
//     }
//     break;
//   default:
//     alert(undefined);
//     break;
// }

////bai tập Decision Making

//bai 1:
// let age = +prompt("moi nhap tuoi");

// if (age >= 18) {
//   alert("Tren 18 tuoi");
// } else {
//   alert("Chua du 18 tuoi");
// }
//bai 2:

// let time = +prompt("nhap thoi gian");
// if (time < 18 && time >= 0) {
//   console.log("Good day");
// } else if (time >= 18 && time <= 24) {
//   console.log("Good evening");
// } else console.log(undefined);

//bai 3:

// let time = +prompt("nhap thoi gian");
// if (time < 10 && time >= 0) {
//   console.log("Good morning");
// } else if (time >= 10 && time < 20) {
//   console.log("Good day");
// } else if (time >= 20 && time <= 24) {
//   console.log("good evening");
// } else {
//   console.log(undefined);
// }

//bai 4:nhap so chan hay le

// let a = +prompt("moi nhap so");
// if (a % 2 === 0) {
//   alert("Day la so chan");
// } else if (a % 2 != 0) {
//   alert("day la so le");
// } else {
//   alert("Ko xac dinh");
// }

// bài 5
// let a = +prompt("mời nhap so");
// let b = a % 2
// switch (b) {
//   case 0:
//      alert("so chan")
//     break;
//     default:
//         break;
// }

///bai 6: Hiển thị màu:

// let color = prompt("color");
// switch (color) {
//   case "blue":
//     alert("blue");
//     break;
//   case "red":
//     alert("red");
//     break;
//   case "yellow":
//     alert("yellow");
//     break;

//   default:
//     alert("mau ko hop le");
//     break;
// }

//Bài 7: in ra số X
// let x = +prompt("moi nhap so x");
// if (x > 0) {
//   alert("x la so nguyen am");
// } else if (x < 0) {
//   alert("x la so nguyen am");
// } else {
//   alert("x bang 0");
// }

//bai tap 9

// let a = +prompt("diem toan");
// let b = +prompt("diem ly");
// let c = +prompt("diem hoa");
// let d = +prompt("diem van");
// let e = +prompt("diem su");
// let f = +prompt("diem dia");
// let dtb = (a + b + c + d + e + f) / 6;
// if (dtb > 8 && dtb <= 10) {
//   alert("loai gioi");
// } else if (dtb > 6.5 && dtb <= 7.9) {
//   alert("loai kha");
// } else if (dtb >= 5 && dtb <= 6.4) {
//   alert("loai trung binh");
// } else if (dtb < 5) {
//   alert("loai yeu");
// } else {
//   alert(undefined);
// }

//bai 10
// let month = +prompt("moi nhap thang");
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 9:
//     alert("Thang nay co 31 ngay");
//     break;
//   case 4:
//   case 6:
//   case 8:
//   case 10:
//   case 12:
//     alert("thang nay co 30 ngay");
//     break;
//   case 2:
//     alert("thang nay co 28 ngay");
//     break;
//   default:
//     alert(undefined);
//     break;
// }
