var showForPages = ["https://codeforces.com/problemset/problem/*", "https://codeforces.com/gym/*/problem/*","https://codeforces.com/contest/*/problem/*"];

chrome.contextMenus.create({
    "id": "notUnderstood",
    "title": "Mark as not understood",
    "contexts": ["all"],
    "documentUrlPatterns": showForPages
});
chrome.contextMenus.create({
    "id": "understood",
    "title": "Mark as understood",
    "contexts": ["all"],
    "documentUrlPatterns": showForPages
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "notUnderstood") {
        chrome.tabs.sendMessage(tab.id, {message : "notUnderstood"});
    }else if(info.menuItemId == "understood"){  
        chrome.tabs.sendMessage(tab.id, { message: "understood" });
    }
});


