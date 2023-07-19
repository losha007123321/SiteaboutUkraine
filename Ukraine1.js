function checkout(mert){
    var name = document.getElementById("name").value;
    var pass = mert.pass.value;
    var repass = mert.repass.value;
    var state = mert.state.value;
    console.log(name + "-" + pass + "-" + repass + "-" + state + "-");

    var error = "";
    if (name =="" || pass == "" || state == "")
    error = "Заповніть усі комірки!";
    else if(name.length <1 || name.length > 20)
    error = "Введіть нормальне ім'я!";
    else if(pass.length < 6)
    error = "Пароль повинен мати більше 5 символів!";
    else if(pass != repass)
    error = "Паролі не співпадають!";
    else if(pass == repass && pass.length >= 6 )
    {error = "Все правильно!"
        setTimeout(alrt, 1)
    function alrt(){
      alert("Все правильно!");
    }}

    if(error != "")
    document.getElementById("mistake").innerHTML = error;

    // else {
        // 
    // }
        return false;
    }
        
    setTimeout(function(){
        alert("Вiтаю Вас на сайтi про Україну!");
        console.log("Вiтаю Вас на сайтi про Україну!")
        alert("Нажмiть 'ОК', щоб продовжити.");
    }, 1000);
    
    function accept(){
            var nop = setInterval(tox, 1000);
                var ser = 6;
                function tox() {
                    ser--;
                    document.getElementById("otil").innerHTML=ser
                    if(ser ==-1){
                    clearInterval(nop);
                    alert ("Нажмiть 'ОК',щоб перейти до сайту.");
                window.location="Ukraine2.html"}
            }
           
    }