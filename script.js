



    const btnAddTask = document.querySelector("#btnAddTask")

    btnAddTask.addEventListener("click", (evt)=>{

        const task = document.querySelector("#inputValues").value
        const ul = document.querySelector("#list")
        
        
        if(task !== ""){
            
        const li = document.createElement("li")
        const btnOk = document.createElement("button")
        const btnDel = document.createElement("button")
        const divv = document.createElement("div")
        const divvbtn = document.createElement("div")
        const divhour = document.createElement("div")
        const p = document.createElement("p")


        divv.classList.add("E_li")
        btnOk.classList.add("btns");
        btnDel.classList.add("btns");
        divhour.classList.add("hour_minute")

        btnOk.innerHTML = '<i class="fa-solid fa-check"></i>';
        btnDel.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

     const currentDate = new Date();
     const data = currentDate.toLocaleDateString(); // Obter a data no formato desejado


        ul.appendChild(divv)
        divv.appendChild(li)
        divv.appendChild(p)

        li.innerHTML = task
        p.innerHTML = data;

        li.appendChild(divvbtn)
        divvbtn.appendChild(btnOk)
        divvbtn.appendChild(btnDel)

       
    btnOk.addEventListener("click", (evt) => {
            li.style.textDecoration = "line-through";
            li.style.color = "white"
            li.style.background = "#D4AFB9"

            p.style.textDecoration = "line-through";
            p.style.color = "white"
            p.style.background = "#D4AFB9"
        });

        btnDel.addEventListener("click", (evt)=>{
            divv.removeChild(li)
            divv.removeChild(p)
        })

        }else{
            window.alert("Please, add one task for continue ")
        }
        

    })