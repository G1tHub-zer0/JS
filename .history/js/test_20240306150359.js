function run(name, year_of_birth) {
  var d = new Date();
  var current_year = d.getFullYear();
  let obj = {};
  obj.name = name;
  obj.year_of_birth = year_of_birth;
  obj.address = "Ha Noi";

  let birthday = current_year - year_of_birth;

  console.log(obj); // print object
  console.log(
    obj.name + " is " + birthday + " years old"
  );
}
run("khang", 2018);
