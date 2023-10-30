function valor() {
    let select = document.querySelector('#valor');
    let valor = select.options[select.selectedIndex].value;
    return valor;
};

function rolar() {
    resultado = Math.floor ((Math.random() * valor() ) + 1);
    return resultado;
};

function carregaAtributos(){
    document.getElementById("dado").value = resultado;
}

function repete() {
    let select = document.querySelector('#repeticao');
    let valor = select.options[select.selectedIndex].value;
    return valor;
};

function valor_background() {
    let select = document.querySelector('#valor');
    let valor = select.options[select.selectedIndex].text;
    return valor;
}

function  foto_background() {
    let select = document.querySelector('#background');
    let valor = select.options[select.selectedIndex].value;
    return valor;
}

function background(){
    console.log(`O dado que seria utilizado seria ${valor_background()}-${foto_background()}`);
    let local = valor_background() + " " + foto_background();
    console.log(local)
}


function addimagem(){
    let imagem = document.createElement("img");
    imagem.src = "../imagens/" + local + ".png";
    document.getElementById('teste_imagem').appendChild(img);
    console.log(imagem.src);
}

function addvalor(){
    let p = document.createElement("p");
    p.value = valor();
    document.getElementById('teste_imagem').appendChild(p);
    console.log (p);
}



   /*let numero = []
    let habilidade =[]

    function terstatus(tipo_dado) {  //switch case com entrada tipo_dado//

        switch (tipo_dado)
        {
            case "4d6 pegando os tres maiores":
                for (u=0;u<6;u++){
                    for (i=0; i<4;i++) {
                        possibilidade = Math.floor ((Math.random() * 6 ) + 1);
                        numero.push(possibilidade);
                    }                    
                    var sum = numero.reduce(function(accumulator,value){
                        return accumulator + value
                      },-numero[0]);
                      habilidade.push(sum);
                    };
                    break;
            case "d20":
                for (r=0;r<6;r++){
                    resultado_d20 = Math.floor ((Math.random() * 15 ) + 6);
                    habilidade.push(resultado_d20);
                };
                break;
            case "opção dada pelo livro":
                habilidade = [8,10,12,13,14,15];
                break;
            default: 
            alert ('favor indicar um metodo de stautus!!!!!');
        };*/
        
        /*for (u=0;u<6;u++){
            for (i=0; i<4;i++) {
                possibilidade = Math.floor ((Math.random() * 6 ) + 1);
                numero.push(possibilidade);
            }           
            numero.sort()           
            var sum = numero.reduce(function(accumulator,value){
                return accumulator + value
              },-numero[0]);
              numero=[];
              habilidade.push(sum);
        }
        habilidade.sort();
        console.log(habilidade);

        for (r=0;r<6;r++){
            resultado_d20 = Math.floor ((Math.random() * 15 ) + 6);
            habilidade2.push(resultado_d20);
        }
        habilidade2.sort();
        console.log(habilidade2);

        console.log(habilidade3);

};*/



/*function processo(tipo_dado){
    let array = terstatus(tipo_dado);
    array.forEach((teste)=> {
        option = new Option(teste)
        novo_select.options[novo_select.options.length] = option;
        });
    }*/
