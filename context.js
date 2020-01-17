const showForPages = ["https://codeforces.com/problemset/problem/*", "https://codeforces.com/contest/*/*","https://codeforces.com/gym/*/*"];

chrome.contextMenus.create({
    "title": "Understood",
    "documentUrlPatterns": showForPages
});

chrome.contextMenus.create({
    "title": "Understood and Implemented",
    "documentUrlPatterns": showForPages
});