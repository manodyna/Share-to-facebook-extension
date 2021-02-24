console.log("my extension");

// getting all links on the page by tag name
var links = document.getElementsByTagName("a")
var formattedLinks = [];

// addding links to formatted links array
for(let i=0; i<links.length; i++){
    let title = links[i].text;
    let href = links[i].href; 
   
    if(title!=="" && href!==""){
        formattedLinks.push({title : title, href: href});
    }
}

chrome.runtime.sendMessage({
    "action": "print_messages",
     "data": "formattedLinks"
    }, res=> {
        console.log(res);
    })
