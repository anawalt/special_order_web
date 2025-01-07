async function fetchCSV(url){
    const res = await fetch(url,{
        cache: 'no-store' 
      });

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


function cardGenerator(data){
    const newDiv = document.createElement('div');
    newDiv.classList.add('col', 'mb-5');
    newDiv.innerHTML = `
        <div class="card h-100">
            <img loading="lazy" class="card-img-top" src="https://placehold.co/200x200" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">${data.Description}</h4>
		<div class="row">
		    <div class="col">
 		    	<p class="card-text">SKU: ${data.SKU}</p>
		    </div>
	            <div class="col">
 		    	<p class="card-text">Quantity: ${data.QOH}</p>
		    </div>		
		</div>
                <p class="card-subtitle">Price : $${data.Retail}</p>
            </div>
        </div>
    `
    return newDiv
    
}

