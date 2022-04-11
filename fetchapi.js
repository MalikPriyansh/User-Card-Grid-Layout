let done=0;
document.getElementById("button").addEventListener("click" , function(){
    url =  "https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        if(done==0)
        {
            let div = document.createElement("div");
            div.className = "container";
            let div2 = document.createElement("div");
            div2.className = "row";
            for(let i=0;i<data.data.length;i++)
            {
                let div3 = document.createElement("div");
                div3.className = "col-4 decorate";
                let ele = document.createElement("img");
                let src = data.data[i].avatar;
                ele.src = src;
                ele.className = "img";
                let text  = document.createElement("h2");
                text.innerText = data.data[i].first_name+" "+data.data[i].last_name;
                let para = document.createElement("p");
                para.innerText = "email : "+data.data[i].email;
                para.className = "para";
                text.setAttribute("style","text-align : center");
                div3.appendChild(ele);
                div3.appendChild(text);
                div3.appendChild(para);
                div2.appendChild(div3);
            }
            div.appendChild(div2);
            let master = document.getElementById("body");
            master.appendChild(div);
            master.setAttribute("style","margin-bottom : 30px");
            done=1;
        }
    })
})

