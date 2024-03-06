function run(str) {
  var regex1 = /a/gi;
  var regex2 = /e/gi;
  var regex3 = /i/gi;
  var regex4 = /o/gi;
  var regex5 = /s/gi;
  // Chữ g trong 'gi' là notation để biết là global tức là tìm hết trong chuỗi,
  // Chữ i là insensitive tức là không phân biệt hoa thường
  str = str.replace(regex1, "4");
  str = str.replace(regex2, "3");
  str = str.replace(regex3, "1");
  str = str.replace(regex4, "0");
  str = str.replace(regex5, "5");
  str = str.trim();
  console.log(str);
}
