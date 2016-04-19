// ==UserScript==
// @name        Palace CopBot
// @namespace   Palace CopBot
// @description CopBot for Palace
// @include     http://shop.palaceskateboards.com/*
// @version     1
// @grant       none
// @author kasterb
// ==/UserScript==
//

function delete_duplicates(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}


//INPUT KEYWORDS OF ITEM TO COP BELOW//
//KEYWORDS MUST BE IN ITEM LINK AND IDENTIFY ONLY ONE ITEM//
var item_to_cop1 = 'fatigue';
var item_to_cop2 = 'trousers';
var item_to_cop3 = 'navy';
var item_to_cop4 = '';

console.log("Palace CopBot activated");
console.log("Keywords are:"+item_to_cop1+","+item_to_cop2+","+item_to_cop3+","+item_to_cop4);


//Changes "All" in menu to check if the CopBot is present.
var copbot_check = document.getElementsByClassName('menu-link');
copbot_check[0].innerHTML = 'CopBot Activated';

//Now we get all item links in page, we put them in an array
var array_items_raw = [];
var links = document.getElementsByClassName("product-link");
for(var i=0; i<links.length; i++) {
    array_items_raw.push(links[i].href);
}
array_items = [];
array_items = delete_duplicates(array_items_raw);



//Step 1 search

function search1(array_items)
{
var array_items_s1 = [];
console.log(array_items.length+" items found");
console.log("Step 1 search");
    for (var j=0; j<array_items.length; j++) {
        
        var current_link = array_items[j];
        var n = current_link.search(item_to_cop1);
        
        if (n != -1)
        {
            console.log(current_link)
            array_items_s1.push(current_link);
            
        }
    }
console.log(array_items_s1.length+" items found with first keyword");
//Step 1 search check
if (array_items_s1.length == 0)
    {
        console.log("Warning, first keyword was not found. Going on with step 2...");
        array_items_s1 = array_items;
    }
else if (array_items_s1.length == 1)
    {
        console.log("1 item found with first keyword, this item is going to be copped");
        
    }
 return array_items_s1;
}


//Step 2 search

var array_items_s1 = [];
array_items_s1 = search1(array_items);

alert('test3');

function search2(array_items_s1)
{
  array_items_s2 = [];
console.log("Step 2 search");

    for (var j=0; j<array_items_s1.length; j++) {
        
        var current_link = array_items_s1[j];
        var n = current_link.search(item_to_cop2);
        
        if (n != -1)
        {
            console.log(current_link)
            array_items_s2.push(current_link);
            
        }
    }
console.log(array_items_s2.length+" items found with second keyword");
//Step 2 search check
if (array_items_s2.length == 0)
    {
        console.log("Warning, first keyword was not found. Going on with step 3...");
        array_items_s2 = array_items_s1;
    }
else if (array_items_s2.length == 1)
    {
        console.log("1 item found with first keyword, this item is going to be copped");
      
    }

return array_items_s2;
  
}

var array_items_s2 = [];
array_items_s2 = search2(array_items_s1);

alert('STEP 2');


//Step 3 search
function search3(array_items_s2)
{
  array_items_s3 = [];
console.log("Step 3 search");

    for (var j=0; j<array_items_s2.length; j++) {
        
        var current_link = array_items_s2[j];
        var n = current_link.search(item_to_cop3);
        
        if (n != -1)
        {
            console.log(current_link)
            array_items_s3.push(current_link);
            
        }
    }
console.log(array_items_s3.length+" items found with second keyword");
//Step 3 search check
if (array_items_s2.length == 0)
    {
        console.log("Warning, third keyword was not found. Going on with step 4...");
        array_items_s3 = array_items_s1;
    }
else if (array_items_s3.length == 1)
    {
        console.log("1 item found with third keyword, this item is going to be copped");
      
    }

return array_items_s3;
  
}

var array_items_s3 = [];
array_items_s3 = search3(array_items_s2);


    
//Step 4 search
function search4(array_items_s3)
{
   
console.log("Step 4 search");
var array_items_s4 = [];
    for (var j=0; j<array_items_s3.length; j++) {
        
        var current_link = array_items_s3[j];
        var n = current_link.search(item_to_cop4);
        
        if (n != -1)
        {
            console.log(current_link)
            array_items_s3.push(current_link);
            
        }
    }

//Step 4 search check
if (array_items_s1.length == 0)
    {
        console.log("Warning, fourth keyword was not found.");
        console.log("The item was not found, nothing is going to be copped");
        array_items_s1 = array_items;
    }
else if (array_items_s1.length == 1)
    {
        console.log("1 item found with fourth keyword, this item is going to be copped");
        
    }
    return array_items_s4;
    
}

var array_items_s4 = [];
array_items_s4 = search4(array_items_s3);















