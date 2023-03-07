

function newImage (image, left, bottom) {
 
    let newElement = document.createElement('img')
    newElement.src = image
    newElement.style.position = 'fixed'
    newElement.style.left = `${left}px`
    newElement.style.bottom = `${bottom}px`
    document.body.append(newElement)  
}

    newElement.addEventListener('click', function(){
        newElement.remove()  
   
})

}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/sword.png', 500, 405)



