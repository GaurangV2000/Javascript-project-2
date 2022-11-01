const api_url = "https://dummy.restapiexample.com/api/v1/employees";
async function getapi(url)
{
    const response = await fetch(url);

    var data = await response.json(url);
    console.log(data.data);
    if(response)
    {
        hideloader();
    }
    show(data);
}

getapi(api_url);

function hideloader()
{
    document.getElementById('loading').style.display='none';
}

const linkid=(id)=>{
    const data = api_url/id
    return(
        data
    )
}
function show(data)
{
    let tab = 
        // `<tr>
        //     <th>id</th>
        //     <th>fullName</th>
        //     <th>isUser</th>
        //     <th>rating</th>
           
        // </tr>`;
        data.data.map((item)=>(
            `<tr>
                <td><a href="https://dummy.restapiexample.com/api/v1/employee/${item.id}">${item.id}</a></td>
                <td>${item.employee_name}</td>
                <td>${item.employee_age}</td>
                <td>${item.employee_salary}</td>
            </tr>`
        ))
    document.getElementById("employee").innerHTML = tab;
}
