// from data.js
var tableData = data;
var newtable=[];
// YOUR CODE HERE!
var table =d3.select('table')

buildmytable(tableData);

function buildmytable(data){
d3.select('tbody').remove();

var tbody=table.append('tbody');
data.forEach(element=>{
  var tr = tbody.append("tr");
  Object.values(element).forEach((value)=>{
    var td = tr.append("td").text(value);
  });

});
}

d3.select("#filter-btn").on('click',function(){

HandleClick();

});

function HandleClick(){
  var finddate=d3.select("#datetime").property('value');
  newtable = [];
  tablefilter(tableData,"datetime",finddate);
  buildmytable(newtable);
}

function tablefilter(data,fkey,fvalue){

  data.forEach(element=>{

    Object.entries(element).forEach(([key,value])=>{
      if (key == fkey){
          if (value == fvalue)
          {
            newtable.push(element)
          }
      }
    });

  });

}
