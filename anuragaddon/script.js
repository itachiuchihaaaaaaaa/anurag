var hd = document.getElementById("head1");
hd.style.color ="blue" ;
//hd.innerText="text changed";
hd.innerHTML='<p>changed into p tag</p>'
// using class name
var user = document.getElementsByClassName("user");
for(let i=0;i<user.length;i++)
        {
            user[i].style.color="red"
        }

        //using tag name 
        var tag1 =document.getElementsByTagName("li");
        tag1[2].style.backgroundColor="yellow"

        //using query selecter tag name
        var inp = document.querySelector('input');
        inp.placeholder ="pinggg"
        //query  selecter using classname
        var qclss =document.querySelector(".qclass");
        qclss.style.backgroundColor="green"
        var btn = document.querySelector("#qid");
        btn.textContent="changed"
