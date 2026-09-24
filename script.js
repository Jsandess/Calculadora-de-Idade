function calcularIdade() 
{ 
 let diaTexto = document.getElementById("dia").value.trim(); 
 let mesTexto = document.getElementById("mes").value.trim(); 
 let anoTexto = document.getElementById("ano").value.trim(); 
 // Verifica se os campos estão vazios 
 if (!diaTexto || !mesTexto || !anoTexto) { 
    document.getElementById("resultado").innerHTML = 
    "Informe datas válidas"; return; }  
    if ( 
        !/^\d+$/.test(diaTexto) || 
        !/^\d+$/.test(mesTexto) || 
        !/^\d+$/.test(anoTexto) ) 
        { 
            document.getElementById("resultado").innerHTML = 
            "Informe datas válidas"; return; } 
            
            let dia = Number(diaTexto); 
            let mes = Number(mesTexto); 
            let ano = Number(anoTexto); 
             
            if ( 
                dia < 1 || dia > 31 || 
                mes < 1 || mes > 12 ) 
                { 
                    document.getElementById("resultado").innerHTML = 
                    "Informe datas válidas"; return; 
                } 
                    let hoje = new Date(); 
                    let idade = hoje.getFullYear() - ano; 
                    
                    if ( 
                        hoje.getMonth() + 1 < mes || 
                        (hoje.getMonth() + 1 === mes && hoje.getDate() < dia) 
                    ) { 
                        idade--; 
                    } 
                    if (idade < 0) {
                         document.getElementById("resultado").innerHTML = 
                        "Você ainda não nasceu :)"; 
                    } 
                        else { 
                            document.getElementById("resultado").innerHTML = 
                            "Você tem " + idade + " anos."; } 
}