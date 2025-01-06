async function fetchCSV(url){
    const res = await fetch(url);
    const data = await res.text();
    const rows = data.split('\n');
    
    const header = rows[0].trim().split(",");

    let dataArr = [];
    
    for(let i = 1; i < rows.length - 1; i++){
        let obj = {};
        const temp = rows[i].trim().split(",");

        for(let y = 0; y < header.length; y++){
            obj[header[y]] = temp[y];
        }
        dataArr.push(obj);
    }

    return dataArr;
}


async function htmlGenerator(data){
    let htmlString = `
        <div class="card">
            <img class="card-img-top" src="https://placehold.co/200x100" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${data.Description}</h4>
                <p class="card-text">${data.SKU}</p>
                <p class="card-text">${data.QOH}</p>
                <p class="card-text">${data.Retail}</p>
                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>
    `
    const mainEl = document.querySelector("#main div");
    mainEl.innerHTML = mainEl.innerHTML + htmlString;
}

