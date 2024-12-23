let i=0;
let imagens=[]
imagens[0]='./img/pexels-abhinavcoca-291528.jpg'
imagens[1]='./img/pexels-isaw-company-66472-1005406.jpg'
imagens[2]='./img/pexels-fotios-photos-1129510.jpg'
imagens[3]='./img/pexels-jessbaileydesign-913136.jpg'
imagens[4]='./img/pexels-moose-photos-170195-1036621.jpg'



function slideShow(){
    document.entrada.src=imagens[i]

    if(i<imagens.length-1){
        i++
    }else{
        i=0
    }
    setTimeout(slideShow, 6000)
}
window.onload=slideShow