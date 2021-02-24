// creating a popup window on activation of extension by the share image menu option
function myImageClick(info, tab){
    console.log(info,tab);
    chrome.windows.create({
        "url" : "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type" : "popup"
    })
}

// creating a popup window on activation of extension by the share quote menu option
function myQuoteClick(info, tab){
    console.log("Clicked an image", info, tab);

    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" 
          + info.selectionText,
        "type": "popup"
    })
   
}


// createing a share quote menu option
chrome.contextMenus.create({
    "title" : "Share quote",
    "contexts" : ["selection"],
    "onclick" : myQuoteClick
});

// creating a share image menu option
chrome.contextMenus.create({
    "title" : "Share image",
    "contexts" : ["image"],
    "onclick" : myImageClick
});

// adding evant listeners and sharing messages
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg)
    sendResponse({"text": "Received the links"});
})
