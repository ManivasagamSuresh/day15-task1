let data = new XMLHttpRequest;
data.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
data.send();
data.responseType= "json";
data.onload = function peopledata(){
    var people = data.response;
    console.log(people);
    console.log(people[3].email);
    return people;
    first(people);
    }
    var res = fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    res.then((data)=> data.json()).then((value)=>{
    
    let arr = value;
    console.log(value);
    main(value);
    });
 


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


// row functions 
let r1=rows("tr","id","row1");
let r2=rows("tr","id","row2");
let r3=rows("tr","id","row3");
let r4=rows("tr","id","row4");
let r5=rows("tr","id","row5");
let r6=rows("tr","id","row6");
let r7=rows("tr","id","row7");
let r8=rows("tr","id","row8");
let r9=rows("tr","id","row9");
let r10=rows("tr","id","row10");

function rows(tagname,attrname,attrvalue){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
    }

    table.append(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10);



function main(value){
    var b = 10;
    let i = 0;
    
    let row1 = document.getElementById("row1")
        row1.innerHTML=`<td>${value[i].id}</td><td>${value[i].name}</td><td>${value[i].email}</td>`
        let row2 = document.getElementById("row2")
        row2.innerHTML=`<td>${value[i+1].id}</td><td>${value[i+1].name}</td><td>${value[i+1].email}</td>`
        let row3 = document.getElementById("row3")
        row3.innerHTML=`<td>${value[i+2].id}</td><td>${value[i+2].name}</td><td>${value[i+2].email}</td>`
        let row4 = document.getElementById("row4")
        row4.innerHTML=`<td>${value[i+3].id}</td><td>${value[i+3].name}</td><td>${value[i+3].email}</td>`
        let row5 = document.getElementById("row5")
        row5.innerHTML=`<td>${value[i+4].id}</td><td>${value[i+4].name}</td><td>${value[i+4].email}</td>`
        let row6 = document.getElementById("row6")
        row6.innerHTML=`<td>${value[i+5].id}</td><td>${value[i+5].name}</td><td>${value[i+5].email}</td>`
        let row7 = document.getElementById("row7")
        row7.innerHTML=`<td>${value[i+6].id}</td><td>${value[i+6].name}</td><td>${value[i+6].email}</td>`
        let row8 = document.getElementById("row8")
        row8.innerHTML=`<td>${value[i+7].id}</td><td>${value[i+7].name}</td><td>${value[i+7].email}</td>`
        let row9 = document.getElementById("row9")
        row9.innerHTML=`<td>${value[i+8].id}</td><td>${value[i+8].name}</td><td>${value[i+8].email}</td>`
        let row10 = document.getElementById("row10")
        row10.innerHTML=`<td>${value[i+9].id}</td><td>${value[i+9].name}</td><td>${value[i+9].email}</td>`        
}
    
    






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



      
// console.log(`${data.response[1]}`)


    

    // var b = 10;
    // for( i=(x-1)*b ; i<(x*b) ; i++ )
    // {
    //     let row = document.createElement("tr");
    //     let table_data1=document.createElement("td");
    //     table_data1.innerHTML=data.response[i].id;
    //     let table_data2=document.createElement("td");
    //     table_data2.innerHTML=data.response[i].name;
    //     let table_data3=document.createElement("td");
    //     table_data3.innerHTML=data.response[i].email;
    //     row.append(table_data1,table_data2,table_data3);
    //     table.append(row);
    // }

    function view(x){

    var b = 10;
    let i =(x-1)*b;
    {
    let row1 = document.getElementById("row1")
        row1.innerHTML=`<td>${data.response[i].id}</td><td>${data.response[i].name}</td><td>${data.response[i].email}</td>`
        let row2 = document.getElementById("row2")
        row2.innerHTML=`<td>${data.response[i+1].id}</td><td>${data.response[i+1].name}</td><td>${data.response[i+1].email}</td>`
        let row3 = document.getElementById("row3")
        row3.innerHTML=`<td>${data.response[i+2].id}</td><td>${data.response[i+2].name}</td><td>${data.response[i+2].email}</td>`
        let row4 = document.getElementById("row4")
        row4.innerHTML=`<td>${data.response[i+3].id}</td><td>${data.response[i+3].name}</td><td>${data.response[i+3].email}</td>`
        let row5 = document.getElementById("row5")
        row5.innerHTML=`<td>${data.response[i+4].id}</td><td>${data.response[i+4].name}</td><td>${data.response[i+4].email}</td>`
        let row6 = document.getElementById("row6")
        row6.innerHTML=`<td>${data.response[i+5].id}</td><td>${data.response[i+5].name}</td><td>${data.response[i+5].email}</td>`
        let row7 = document.getElementById("row7")
        row7.innerHTML=`<td>${data.response[i+6].id}</td><td>${data.response[i+6].name}</td><td>${data.response[i+6].email}</td>`
        let row8 = document.getElementById("row8")
        row8.innerHTML=`<td>${data.response[i+7].id}</td><td>${data.response[i+7].name}</td><td>${data.response[i+7].email}</td>`
        let row9 = document.getElementById("row9")
        row9.innerHTML=`<td>${data.response[i+8].id}</td><td>${data.response[i+8].name}</td><td>${data.response[i+8].email}</td>`
        let row10 = document.getElementById("row10")
        row10.innerHTML=`<td>${data.response[i+9].id}</td><td>${data.response[i+9].name}</td><td>${data.response[i+9].email}</td>`        
    
    
    
    }
    
    
    
}
