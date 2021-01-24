let apikey="2c5f61ac-b1c8-4ba4-92b8-1bc1b5ee672f";

const xhr=new XMLHttpRequest();
xhr.open(`GET`,`https://content.guardianapis.com/search?api-key=${apikey}`,true);
xhr.setRequestHeader("Content-Type","application/json");

xhr.onload=()=>{
    if(xhr.status === 200){
        let jsondata=JSON.parse(xhr.responseText);
        // console.log(jsondata);
        let results=jsondata.response.results;
        // console.log(results);
        let newscontainer=document.getElementById('newscontainer');
        let articles=``;
        results.forEach(element => {
            let news=`<div class="article">
                <div class="title">${element.webTitle}</div>
                <div class="content" style="display: none;"><a href="${element.webUrl}" target="_blank">click here</a></div>
            </div>`;

            articles+=news;
        });
        newscontainer.innerHTML=articles;
        let titles=document.getElementsByClassName('title');
        let content=document.getElementsByClassName('content');
        for(let i=0;i<10;i++){
            titles[i].addEventListener('click',()=>{
                if(content[i].style.display=="none"){
                    content[i].style.display="block";
                }
                else{
                    content[i].style.display="none";
                }
            });
        }
    }
    else{
        console.log("Problem occured");
    }
        
 
}

xhr.send();

