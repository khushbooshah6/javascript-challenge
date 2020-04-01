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


var datetimel = [];
var cityl = [];
var statel = [];
var countryl = [];
var shapel = [];
var commentsl = [];
datetimel.push("Available Dates");
cityl.push("Available Cities");
statel.push("Available States");
countryl.push("Available Countries");
shapel.push("Available Shapes");
commentsl.push("Available Comments");

data.forEach( (item) => {
  Object.entries(item).forEach(function ([key, value]) {
    if  (key == 'datetime')
    {
      datetimel.push(value);
    }
    if  (key == 'city')
    {
      cityl.push(value);
    }
    if  (key == 'state')
    {
      statel.push(value);
    }
    if  (key == 'country')
    {
      countryl.push(value);
    }
    if  (key == 'shape')
    {
      shapel.push(value);
    }
    if  (key == 'comments')
    {
      commentsl.push(value);
    }
  });
});

var datetimel = d3.map(datetime, function(d){return d;}).keys();
var cityl = d3.map(city, function(d){return d;}).keys();
var statel = d3.map(state, function(d){return d;}).keys();
var countryl = d3.map(country, function(d){return d;}).keys();
var shapel = d3.map(shape, function(d){return d;}).keys();

var date_select = d3.select("#datedd")
date_select.on('change',onchange);
var city_select = d3.select("#citydd").on('change',onchange);
var state_select = d3.select("#statedd").on('change',onchange);
var country_select = d3.select("#countrydd").on('change',onchange);
var shape_select = d3.select("#shapedd").on('change',onchange);
var comment_select = d3.select("#commentdd").on('change',onchange);

var datechoices = date_select.selectAll('option').data(datetimel).enter().append('option').attr("value",d=>{return d}).text(function (d) { return d; });
var citychoices = city_select.selectAll('option').data(cityl).enter().append('option').attr("value",d=>{return d}).text(function (d) { return d; });
var statechoices = state_select.selectAll('option').data(statel).enter().append('option').attr("value",d=>{return d}).text(function (d) { return d; });
var countrychoices = country_select.selectAll('option').data(countryl).enter().append('option').attr("value",d=>{return d}).text(function (d) { return d; });
var shapechoices = shape_select.selectAll('option').data(shapel).enter().append('option').attr("value",d=>{return d}).text(function (d) { return d; });
var commentschoices = comment_select.selectAll('option').data(commentsl).enter().append('option').attr("value",d=>{return d}).text(function (d) { return d; });

chosenItems = {};
var newtable=[];

function GEureka(newdata,findkey,findvalue) {
  newdata.forEach( (item) => {
    Object.entries(item).forEach(function ([key, value]) {
      if  (key == findkey)
      {
      if (value == findvalue){
        newtable.push(item);
      }}
    });
  });
};
var chosenItems=[];


function onchange() {
  chosenDate = d3.select('#datedd').property('value');
  chosenCity = d3.select('#citydd').property('value');
  chosenState = d3.select('#statedd').property('value');
  chosenCountry = d3.select('#countrydd').property('value');
  chosenShape = d3.select('#shapedd').property('value');
  chosenComment = d3.select('#commentdd').property('value');
  chosenItems =[]

  chosenItems.push("datetime" + ":" + chosenDate)
  chosenItems.push("city" + ":" + chosenCity)
  chosenItems.push("state" + ":" + chosenState)
  chosenItems.push("country" + ":" + chosenCountry)
  chosenItems.push("shape" + ":" + chosenShape)
  chosenItems.push("comment" + ":" + chosenComment)

  d3.select("tbody").remove();
  newtable = data;
  for(i=0;i<chosenItems.length;i++){
    findkey = chosenItems[i].split(":")[0];
    findvalue = chosenItems[i].split(":")[1];
    if (!/^Available/.test(findvalue)){
      getTable=newtable;
      newtable=[]
      GEureka(getTable,findkey,findvalue);
      }
  }
  var table = d3.select("table");
  tbody=table.append("tbody");
  for (i=0;i<newtable.length;i++){
    row = tbody.append("tr")
    Object.values(newtable[i]).forEach((value) => {
      var td = row.append("td");
      td.text(value);
  });}
};
