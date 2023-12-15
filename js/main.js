

var qoutList=[];

        var qoute1={
            text:"“Be yourself; everyone else is already taken.”",
            name:"― Oscar Wilde"
        }
        
        var qoute2={
            text:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            name:"― Albert Einstein"
        }
        var qoute3={
            text:"“So many books, so little time.”",
            name:"― Frank Zappa"
        }
        var qoute4={
            text:"“A room without books is like a body without a soul.”",
            name:"― Marcus Tullius Cicero"
        }
        var qoute5={
            text:"“Be the change that you wish to see in the world.”",
            name:"― Mahatma Gandhi"
        }

        qoutList.push(qoute1);
        qoutList.push(qoute2);
        qoutList.push(qoute3);
        qoutList.push(qoute4);
        qoutList.push(qoute5);


    function display() {

        var cartoona="";
        qoutindex=Math.floor(Math.random() * qoutList.length);

        cartoona=`
        <p class="text-center mt-3">${qoutList[qoutindex].text}</p>
        <p class="text-center">${qoutList[qoutindex].name}</p>
        `

        document.getElementById("qoute").innerHTML=cartoona;

           
    }





















        
        
            
 
    



 
 