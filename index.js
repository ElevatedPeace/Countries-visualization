let btn = document.getElementById("starting_word");
let button = document.getElementById("invoved_word");
let arrow = document.getElementById("arrow");
 
    
function search() {
    var input, filter, ul, li, a, i, txtValue;
         input = document.getElementById("input");
         filter = input.value.toUpperCase();
         ul = document.getElementById("grid");
        li = document.getElementsByTagName("li");

         for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
         }
        }

function find() {
    var input, filter, ul, li, a, i, txtValue;
         input = document.getElementById("input");
         filter = input.value.toUpperCase();
         ul = document.getElementById("grid");
        li = document.getElementsByTagName("li");

         for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) === 0) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
         }
        }

        
        function start() {
            let x = document.getElementById("input").value;
            document.getElementById("third_p").innerHTML = `Searching for ${x.toUpperCase()}`;
            
        
        }
        

        function sort() {
            let list, i, run, li,stop;
            list = document.getElementById("grid");
            run = true;

            while(run) {
                run = false;
                li = document.getElementsByTagName(li);

                for (i = 0; i <(li.length -1); i++) {
                    stop = false;
                    if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
                        stop = true;
                        break;
                    }
                }

                if (stop) {
                    li[i].parentNode.insertBefore(li[i + 1], li[i]);
                    run = true;
                }
            }
        }
        sort()
            