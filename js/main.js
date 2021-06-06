/**
 * Đầu vào
 *  - loaiXe
 *  - soKm
 *  - tgCho
 *
 * Xử lý
 *  - function layLoaiXe()
 *      + Dom tới 3 thẻ input của loại xe: radioGrabX, radioGrabSuv, radioGrabBlack
 *      + if(radioGrabX.checked){return "grabX"}
 *      + else if(radioGrabSuv.checked){return "grabSuv"}
 *      + else{return "grabBlack"}
 *  - function tinhTien()
 *      + Dom tới lấy soKm, tgCho từ 2 thẻ input
 *      + Gọi lại hàm layLoaiXe => nhận giá trị loại xe gì?
 *      + switch
 *          case "grabX":
 *
 *          case "grabSuv":
 *
 *          case "grabBlack":
 *
 *  - function tinhKmDau(soKm, giaKmDau):
 *      + return soKm * giaKmDau
 *  - function tinhKmTren1(soKm, giaKmTren1):
 *      + return (soKm - 1) * giaKmTren1;
 *  - function tinhKmTren19(soKm, giaKmTren19);
 *      + return (soKm - 19) * giaKmTren19
 *  - function tinhGiaCho(tgCho, giaCho):
 *      if(tgCgo >= 3) return Math.floor(tgCho / 3) * giaCho
 */

//GRABCAR
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

//GRABSUV
const GRABSUV_1 = 9000;
const GRABSUV_2 = 8500;
const GRABSUV_3 = 8000;
const GRABSUV_WAIT = 3000;

//GRABBLACK
const GRABBLACK_1 = 10000;
const GRABBLACK_2 = 9500;
const GRABBLACK_3 = 9000;
const GRABBLACK_WAIT = 3500;

var tienCho = 0;
var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;

document.getElementById("btnTinhTien").onclick = function () {
    var soKm = document.getElementById("inputSoKm").value;
    var tgCho = document.getElementById("inputTgCho").value;

    var loaiXe = layLoaiXe();

    if (!loaiXe) {
        alert("Vui lòng chọn loại xe");
        return;
    }

    switch (loaiXe) {
        case "grabX":
            tinhChiTiet(soKm, tgCho, GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3);
            break;

        case "grabSUV":
            tinhChiTiet(
                soKm,
                tgCho,
                GRABSUV_WAIT,
                GRABSUV_1,
                GRABSUV_2,
                GRABSUV_3
            );
            break;

        case "grabBlack":
            tinhChiTiet(
                soKm,
                tgCho,
                GRABBLACK_WAIT,
                GRABBLACK_1,
                GRABBLACK_2,
                GRABBLACK_3
            );
            break;

        default:
            break;
    }

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tongTienFormat = currentFormat.format(tongTien);

    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTienFormat;
};

function layLoaiXe() {
    var radioGrabX = document.getElementById("grabX");
    var radioGrabSuv = document.getElementById("grabSUV");
    var radioGrabBlack = document.getElementById("grabBlack");

    if (radioGrabX.checked) {
        return "grabX";
    }

    if (radioGrabSuv.checked) {
        return "grabSUV";
    }

    if (radioGrabBlack.checked) {
        return "grabBlack";
    }

    return null;
}

function tinhGiaCho(tgCho, giaCho) {
    var kq = 0;
    if (tgCho >= 3) {
        kq = Math.floor(tgCho / 3) * giaCho;
    }
    return kq;
}

function tinhKm_1(soKm, giaKm_1) {
    var kq = soKm * giaKm_1;
    return kq;
}

function tinhKmTren1(soKm, giaKmTren1) {
    var kq = (soKm - 1) * giaKmTren1;
    return kq;
}

function tinhKmTren19(soKm, giaKmTren19) {
    var kq = (soKm - 19) * giaKmTren19;
    return kq;
}

function tinhChiTiet(soKm, tgCho, giaCho, giaKm_1, giaKmTren1, giaKmTren19) {
    if (0 < soKm && soKm <= 1) {
        tienCho = tinhGiaCho(tgCho, giaCho);
        tienKm_1 = tinhKm_1(soKm, giaKm_1);

        tongTien = tienKm_1 + tienCho;
    } else if (1 < soKm && soKm <= 19) {
        tienCho = tinhGiaCho(tgCho, giaCho);
        tienKm_1 = tinhKm_1(1, giaKm_1);
        tienKm_2 = tinhKmTren1(soKm, giaKmTren1);

        tongTien = tienKm_1 + tienKm_2 + tienCho;
    } else if (19 < soKm) {
        tienCho = tinhGiaCho(tgCho, giaCho);
        tienKm_1 = tinhKm_1(1, giaKm_1);
        tienKm_2 = tinhKmTren1(19, giaKmTren1);
        tienKm_3 = tinhKmTren19(soKm, giaKmTren19);

        tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
    } else {
        alert("Vui lòng nhập vào số hợp lệ!");
    }
}

document.getElementById("btnInHoaDon").onclick = function () {
    var loaiXe = layLoaiXe();
    var soKm = document.getElementById("inputSoKm").value;
    var tgCho = document.getElementById("inputTgCho").value;

    switch (loaiXe) {
        case "grabX":
            tinhChiTiet(soKm, tgCho, GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3);
            break;

        case "grabSUV":
            tinhChiTiet(
                soKm,
                tgCho,
                GRABSUV_WAIT,
                GRABSUV_1,
                GRABSUV_2,
                GRABSUV_3
            );
            break;

        case "grabBlack":
            tinhChiTiet(
                soKm,
                tgCho,
                GRABBLACK_WAIT,
                GRABBLACK_1,
                GRABBLACK_2,
                GRABBLACK_3
            );
            break;

        default:
            break;
    }
    
    var taoTR_tbody = document.createElement("tr");

    //tạo 3 cột
    var taoTD_soKm = document.createElement("td");
    taoTD_soKm.innerHTML = soKm;
    var taoTD_thoiGianCho = document.createElement("td");
    taoTD_thoiGianCho.innerHTML = tgCho;
    var taoTD_loaiXe = document.createElement("td");
    taoTD_loaiXe.innerHTML = loaiXe;
    var taoTD_thanhTien = document.createElement("td");
    taoTD_thanhTien.innerHTML = tongTien + "&nbsp; VND";

    taoTR_tbody.appendChild(taoTD_soKm);
    taoTR_tbody.appendChild(taoTD_thoiGianCho);
    taoTR_tbody.appendChild(taoTD_loaiXe);
    taoTR_tbody.appendChild(taoTD_thanhTien);

    document.getElementById("tbodyHoaDon").appendChild(taoTR_tbody);
    
}

