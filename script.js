let balence=0;
let log=""
function add()
{
    let val=Number(document.querySelector("input").value)
    console.log(val)
    balence=balence+val;
    if(balence>0)
    {
        document.querySelector(".balence").style.color='green';
    }
    let content=`<div class="history">
                <p>Change:${val}</p>
                <p class="prev">Previous:${balence-val}</p>
                <p class="new">New:${balence}</p>
            </div>`
    
    
    log=log+content;
   
    document.querySelector(".balence").innerHTML=`\$ ${balence}`;
    console.log(document.querySelector(".log").innerHTML)
    document.querySelector(".log").innerHTML=log;

}

function sub()
{
    let val=Number(document.querySelector("input").value)
    console.log(val)
    balence=balence-val;
    if(balence<0)
    {
        document.querySelector(".balence").style.color='red';
    }
    document.querySelector(".balence").innerHTML=`\$ ${balence}`;
}

console.log(document.querySelector(".log").innerHTML)