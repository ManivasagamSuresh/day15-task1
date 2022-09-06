let data = new XMLHttpRequest;
data.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
data.send();
data.responseType= "json";
data.onload = function peopledata(){
    var people = data.response;
    console.log(people);
    console.log(people[3].email);
    return people;

}





let container = document.createElement("div");
container.setAttribute("class","container");

let buttons = document.createElement("div");
buttons.setAttribute("class","buttons")

let button1=button("button","id","button1","type","button","1","click",one);
let button2=button("button","id","button2","type","button","2","click",two);
let button3=button("button","id","button3","type","button","3","click",three);
let button4=button("button","id","button4","type","button","4","click",four);
let button5=button("button","id","button5","type","button","5","click",five);
let button6=button("button","id","button6","type","button","6","click",six);
let button7=button("button","id","button7","type","button","7","click",seven);
let button8=button("button","id","button8","type","button","8","click",eight);
let button9=button("button","id","button9","type","button","9","click",nine);
let button10=button("button","id","button10","type","button","10","click",ten);


buttons.append(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10);
container.append(buttons);
document.body.append(container);

function button(tagname,attrname,attrvalue,attrname1,attrvalue1,value,event,fun)
{
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.addEventListener(event,fun)
    ele.innerHTML=`${value}`;
    return ele;
}

let table = document.createElement("table");
table.setAttribute("class","table");
// table.setAttribute("cellspacing","100px")

let table_h_row= document.createElement("tr")
table_h_row.setAttribute("class","headingrow");

let th1= heading("th","ID");
let th2= heading("th","NAME");
let th3= heading("th","E-MAIL");
function heading(tagname,content)
{
let ele=document.createElement(tagname);
ele.innerHTML= content;
return ele;
}
table_h_row.append(th1,th2,th3);
table.append(table_h_row);
container.append(table);






function one(){
    var x = document.getElementById("button1").innerHTML;
    console.log(x);
   
    view(x);
}
function two(){
    var x = document.getElementById("button2").innerHTML;
    console.log(x);
   
    view(x);
}
function three(){
    var x = document.getElementById("button3").innerHTML;
    console.log(x);
   
    view(x);
}
function four(){
    var x = document.getElementById("button4").innerHTML;
    console.log(x);
   
    view(x);
}
function five(){
    var x = document.getElementById("button5").innerHTML;
    console.log(x);
   
    view(x);
}
function six(){
    var x = document.getElementById("button6").innerHTML;
    console.log(x);
   
    view(x);
}
function seven(){
    var x = document.getElementById("button7").innerHTML;
    console.log(x);
   
    view(x);
}
function eight(){
    var x = document.getElementById("button8").innerHTML;
    console.log(x);
   
    view(x);
}
function nine(){
    var x = document.getElementById("button9").innerHTML;
    console.log(x);
   
    view(x);
}
function ten(){
    var x = document.getElementById("button10").innerHTML;
    console.log(x);
   
    view(x);
}



function view(x){
    
    var b = 10;
    for( i=(x-1)*b ; i<(x*b) ; i++ )
    {
        let row = document.createElement("tr");
        let table_data1=document.createElement("td");
        table_data1.innerHTML=data.response[i].id;
        let table_data2=document.createElement("td");
        table_data2.innerHTML=data.response[i].name;
        let table_data3=document.createElement("td");
        table_data3.innerHTML=data.response[i].email;
        row.append(table_data1,table_data2,table_data3);
        table.append(row);
    }
}


