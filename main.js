var name_array=[];
function submit(){
    var student_array=[];

    for(var i=1; i<=4; i++){
        var name=document.getElementById("name_of_the_student_"+i).value;
        name_array.push(name);
    }
    var length_array=name_array.length;
    console.log(length_array);

    for(var k=0; k<length_array; k++){
        student_array.push("<h4>NAME - "+name_array[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=student_array;

    var remove_comma=student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    var student_sorting=[];

    var length_array=name_array.length;
    console.log(length_array);

    for(var k=0; k<length_array; k++){
        student_sorting.push("<h4>NAME - "+name_array[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=student_sorting;

    var remove_comma=student_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

}
function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_array + "</h1>";
}