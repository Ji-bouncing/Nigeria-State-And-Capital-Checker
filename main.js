document.querySelector('#check').addEventListener('click', check)

function check(){
    const state = document.querySelector('#state').value.toLowerCase()
    
    if( state === "abia"){
        document.querySelector('#display').innerText="Umuahia"
    }else if( state === "adamawa"){
        document.querySelector('#display').innerText="Yola"
    }else if( state === "akwa ibom"){
        document.querySelector('#display').innerText="Uyo"
       }
       else if( state === "anambra"){
        document.querySelector('#display').innerText="Awka"
    }
   else if( state === "bauchi"){
       document.querySelector('#display').innerText= "Bauchi"
    }
    else if( state === "bayelsa"){
        document.querySelector('#display').innerText="Yenagoa"
    }
    else if( state === "benue"){
       document.querySelector('#display').innerText= "Makurdi"
    }
    else if( state === "borno"){
        document.querySelector('#display').innerText="Maiduguri"
    }
    else if( state === "cross river"){
      document.querySelector('#display').innerText= "Calabar" 
    }
    else if( state === "delta"){
       document.querySelector('#display').innerText= "Asaba"
    }
    else if( state === "ebonyi"){
        document.querySelector('#display').innerText="Abakaliki"
    }
    else if( state === "edo"){
      document.querySelector('#display').innerText= "Benin City" 
    }
   else if( state === "ekiti"){
        document.querySelector('#display').innerText="Ado Ekiti"
    }
   else if( state === "enugu"){
      document.querySelector('#display').innerText=  "Enugu"
    }
   else if( state === "gombe"){
       document.querySelector('#display').innerText= "Gombe"
    }
    else if( state === "imo"){
       document.querySelector('#display').innerText= "Owerri"
    }
   else if( state === "jigawa"){
        document.querySelector('#display').innerText="Dutse"
    }
    else if( state === "kaduna"){
       document.querySelector('#display').innerText= "Kaduna"
    }
   else if( state === "kano"){
       document.querySelector('#display').innerText= "Kano"
    }
        else if( state === "katsina"){
        document.querySelector('#display').innerText="Katsina"
    }
    else if( state === "kebbi"){
      document.querySelector('#display').innerText= "Birnin Kebbi" 
    }
      else if( state === "kogi"){
        document.querySelector('#display').innerText="Lokoja"
    }
    else if( state === "kwara"){
        document.querySelector('#display').innerText="Ilorin"
    }
   else if( state === "lagos"){
       document.querySelector('#display').innerText= "Ikeja"
    }
   else if( state === "nasarawa"){
       document.querySelector('#display').innerText= "Lafia"
    }
   else if( state === "niger"){
       document.querySelector('#display').innerText= "Minna"
    }
   else if( state === "ogun"){
       document.querySelector('#display').innerText= "Abeokua"
    }
   else if( state === "ondo"){
        document.querySelector('#display').innerText="Akure"
    }
   else if( state === "osun"){
        document.querySelector('#display').innerText="Osogbo"
    }
   else if( state === "oyo"){
        document.querySelector('#display').innerText="Ibadan"
    }
    else if( state === "plateau"){
       document.querySelector('#display').innerText= "Jos"
    }
    else if( state === "rivers"){
        document.querySelector('#display').innerText="Port Harcourt"
    }
   else if( state === "sokoto"){
        document.querySelector('#display').innerText="Sokoto"
    }
   else if( state === "taraba"){
        document.querySelector('#display').innerText="Jalingo"
    }
       else if( state === "yobe"){
        document.querySelector('#display').innerText="Damaturu"
    }
    else if( state === "zamfara"){
       document.querySelector('#display').innerText= "Gusau"
    }
   else if( state === "fct"){
       document.querySelector('#display').innerText= "Abuja"
    }else{
        document.querySelector('#display').innerText="Go and learn it now!!!"
    }        
    }