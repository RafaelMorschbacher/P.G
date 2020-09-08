function gerar(){
    var inicio= document.getElementById('inicio')
    var numterm= document.getElementById('termo')
    var raz= document.getElementById('razao')
    var res= document.getElementById('res')

    a1= Number(inicio.value)
    n= Number(numterm.value)
    q= Number(raz.value)

    res.innerHTML=('')

    if (a1==0 || n==1 || n==0){
        window.alert('Preencha corretamente!')
    }else{
       
        for(c=2 ; c<=n ; c+=1){
            var pg= a1*(q)**(c-1)
            res.innerHTML+=(`a${c} = ${pg}<br>`)
        }
    }
}