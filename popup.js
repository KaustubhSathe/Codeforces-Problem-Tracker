const table = document.querySelector("body > div > table > tbody");
chrome.storage.sync.get(null,function(items){
    for(var x in items){
        var newEntry = document.createElement("tr");
        newEntry.innerHTML = `
        <tr>
            <td>
                <a href=${items[x][0]} target="_blank">${x}</a>
            </td>
            <td>
                ${items[x][1]}
            </td>
        </tr>
        `;

        table.appendChild(newEntry);
    }
});

