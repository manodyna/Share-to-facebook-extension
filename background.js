function myGenericClick(info, tab){
    console.log(info, tab);
}

function myImageClick(info, tab){
    console.log(info,tab);
    chrome.windows.create({
        "url" : "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type" : "popup"
    })
}


function myQuoteClick(info, tab){
    console.log("Clicked an image", info, tab);

    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" 
          + info.selectionText,
        "type": "popup"
    })
   
}


chrome.contextMenus.create({
    "title" : "Share quote",
    "contexts" : ["selection"],
    "onclick" : myQuoteClick
});

chrome.contextMenus.create({
    "title" : "Share image",
    "contexts" : ["image"],
    "onclick" : myImageClick
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg)
    sendResponse({"text": "Received the links"});
})