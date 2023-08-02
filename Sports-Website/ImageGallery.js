const colorTheme=(color,font)=>{
    document.getElementById('body').className=color+'-background '+font+"-font";
}

const fontSize = (font,color)=>{
    document.getElementById('body').className = font+"-font "+color+"-background"
}