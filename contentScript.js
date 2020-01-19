chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var probName = document.querySelector(".title").textContent.substr(2).trim();
    var tags = "";
    for (var i = 0; i < document.querySelectorAll(".tag-box").length; i++) {
        tags += document.querySelectorAll(".tag-box")[i].textContent.trim() + ",";
    }
    tags = tags.substr(0,tags.length - 1);
    if (request.message == "notUnderstood"){
        chrome.storage.sync.remove([probName]);
    } else if (request.message == "understood"){
        chrome.storage.sync.set({ [probName]: [document.documentURI,tags] }, function () {
            console.log(probName + " | " + document.documentURI + " | " + tags);
        });
    } 
}); 

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".problems") != null) {
        chrome.storage.sync.get(null, function (items) {
            var problems = document.querySelector(".problems").getElementsByTagName("tr");
            for (var i = 1; i < problems.length; i++) {
                if (items.hasOwnProperty(problems[i].getElementsByTagName("td")[1].getElementsByTagName("a")[0].textContent.toString().trim())) {
                    for (var j = 0; j < problems[i].getElementsByTagName("td").length; j++) {
                        problems[i].getElementsByTagName("td")[j].style.backgroundColor = "rgba(255, 212, 82,0.5)";
                    }
                }
            }
            for (var i = 1; i < problems.length; i++) {
                if (problems[i].getAttribute("class") == "accepted-problem") {
                    for (var j = 0; j < problems[i].getElementsByTagName("td").length; j++) {
                        problems[i].getElementsByTagName("td")[j].style.backgroundColor = "#D4EDC9";
                    }
                } else if (!items.hasOwnProperty(problems[i].getElementsByTagName("td")[1].getElementsByTagName("a")[0].textContent.toString().trim()) && problems[i].getAttribute("class") == "rejected-problem"){
                    for (var j = 0; j < problems[i].getElementsByTagName("td").length; j++) {
                        problems[i].getElementsByTagName("td")[j].style.backgroundColor = "#FFE3E3";
                    }
                }
            }
        });
    }
});


