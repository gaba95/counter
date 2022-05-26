//initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            console.log(count);
        }else if(styles.contains('increase')){
            count++;
            console.log(count);
        }else if(styles.contains('reset')){
            count = 0;
        }

        value.textContent = count;
    });
});