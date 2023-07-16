function chuvi( a=+document.getElementById('chieudai').value, b= +document.getElementById('chieurong').value) {
        if (a>=b){
            let c = a*b;
            let d =+ 2*(a+b);
            alert( "diện tích hình chữ nhật là " + c+ " cm2" )
            alert(" chu vi hình chữ nhật là " + d + " cm" )
        }
        if (a<b){
            alert(" nhập lại chiều dài")
        }

}