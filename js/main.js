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

function hienThi() {
    var content = "";

    content += '<tr>';
    content += '<td>Km đầu tiên</td>';
    content += '<td>1</td>';
    content += '<td>8000</td>';
    content += '<td>8000</td>';
    content += '</tr>';

    document.getElementById("tbodyHoaDon").innerHTML = content;
}

document.getElementById("btnInHoaDon").onclick = function () {
    var loaiXe = layLoaiXe();
    var soKm = document.getElementById("inputSoKm").value;
    var tgCho = document.getElementById("inputTgCho").value;

    // Đơn Giá
    var DonGia1 = document.getElementById("txtDonGia1").value;
    var DonGia2 = document.getElementById("txtDonGia2").value;
    var DonGia3 = document.getElementById("txtDonGia3").value;
    var DonGia4 = document.getElementById("txtDonGia4").value;

    // Sử dụng
    var suDung1 = document.getElementById("txtsuDung1").value;
    var suDung2 = document.getElementById("txtsuDung2").value;
    var suDung3 = document.getElementById("txtsuDung3").value;



    // Đơn giá cho từng loại xe
    switch (loaiXe) {
        case "grabX":
            DonGia1 = 8000;
            DonGia2 = 7500;
            DonGia3 = 7000;
            DonGia4 = 2000;
            break;

        case "grabSUV":
            DonGia1 = 9000;
            DonGia2 = 8500;
            DonGia3 = 8000;
            DonGia4 = 3000;
            break;

        case "grabBlack":
            DonGia1 = 10000;
            DonGia2 = 9500;
            DonGia3 = 9000;
            DonGia4 = 3500;
            break;

        default:
            break;
    }
    if (0 < soKm && soKm < 1) {
        suDung1 = soKm;
        suDung2 = 0;
        suDung3 = 0;

    } else if (1 < soKm && soKm < 19) {
        suDung1 = 1;
        suDung2 = soKm - 1;
        suDung3 = 0;

    } else if (soKm > 19) {
        suDung1 = 1;
        suDung2 = 19 - 1;
        suDung3 = soKm - 19;
    }
    //Tính Thành Tiền
    var thanhTien1 = 0;
    var thanhTien2 = 0;
    var thanhTien3 = 0;
    thanhTien1 = suDung1 * DonGia1;
    thanhTien2 = suDung2 * DonGia2;
    thanhTien3 = suDung3 * DonGia3;




    // In ra Đơn Giá
    document.getElementById("txtDonGia1").innerHTML = DonGia1;
    document.getElementById("txtDonGia2").innerHTML = DonGia2;
    document.getElementById("txtDonGia3").innerHTML = DonGia3;
    document.getElementById("txtDonGia4").innerHTML = DonGia4;
    //In ra Sử Dụng
    document.getElementById("txtsuDung1").innerHTML = suDung1;
    document.getElementById("txtsuDung2").innerHTML = suDung2;
    document.getElementById("txtsuDung3").innerHTML = suDung3;

    //In ra Thành Tiền
    document.getElementById("txtThanhTien1").innerHTML = thanhTien1;
    document.getElementById("txtThanhTien2").innerHTML = thanhTien2;
    document.getElementById("txtThanhTien3").innerHTML = thanhTien3;
    document.getElementById("txtThanhTien4").innerHTML = tienCho;

    document.getElementById("tdTgCho").innerHTML = tgCho;
    document.getElementById("inTongTien").innerHTML = tongTien;
};