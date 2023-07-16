function sosanh() {
    let anh =+document.getElementById("a").value
    let bien =+document.getElementById("b").value
    if (anh > bien)
        {alert(anh+ " lớn hơn "+ bien);}
    if (anh === bien)
        {alert(anh+ " bằng "+ bien);}
    if (anh < bien)
        {alert(bien+ " lớn hơn "+ anh);}
}