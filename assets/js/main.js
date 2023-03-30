const img = document.getElementById('img');
img.addEventListener('click', function() {
if (this.style.border === '2px solid red') {
    this.style.border = 'none';
} else {
    this.style.border = '2px solid red';
}    
})

const countSticker = (frmSticker) => {
    let stk1 = (frmSticker.sticker1.value);
    let stk2 = (frmSticker.sticker2.value);
    let stk3 = (frmSticker.sticker3.value);
    
    if (stk1 === '' || stk2 === '' || stk3 === '') {
        alert('completar todos los campos');
        return false;
    }

    stk1 = parseInt(stk1);
    stk2 = parseInt(stk2);
    stk3 = parseInt(stk3);
    
    let total = stk1 + stk2 + stk3;
     if (total > 10) {
        mensaje= "Llevas demasiados stickers, no puedes comprar mas de 10 stickers";
        document.querySelector('#mensaje').innerHTML = mensaje;
        return false;
    }  
     if (total < 10) {
        mensaje= "compraste "  + total + " stickers";
        document.querySelector('#mensaje').innerHTML = mensaje;
        return false;
    }
        
    }
    const validPass = (frmPassword) => {
        let dig1 = frmPassword.dig1.value;
        let dig2 = frmPassword.dig2.value;
        let dig3 = frmPassword.dig3.value;
        
        let pass = dig1 + dig2 + dig3;
        
    
    if (pass === "911") {
        mensaje= "password 1 correcto";
        document.querySelector('#res').innerHTML = mensaje
        return false;
		
	} else if (pass === "714") {
		
        mensaje= "password 2 correcto";
        document.querySelector('#res').innerHTML = mensaje
        return false;
	} else {
		mensaje= "password incorrecto";
        document.querySelector('#res').innerHTML = mensaje
        return false;
        
	}
}