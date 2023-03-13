

// Create newImage function. newImage function have three parameters (image, left, bottom)
function newImage (image, left, bottom) {
    //newElement is assign to document.createElement. document.createElement function creates elements.
    let newElement = document.createElement('img')
    //image is attribute. Pathway link goes here.
    newElement.src = image
    //style of image
    newElement.style.position = 'fixed'
    newElement.style.left = `${left}px`
    newElement.style.bottom = `${bottom}px`
    //adds image to page
    document.body.append(newElement)
    //
    return newElement
}

// created new function for newItems with three Parameters.
function newItem(image, left, bottom){
    //
    let newElement = newImage (image, left, bottom)
    //Removes image when users click from dom
    newElement.addEventListener('dblclick', () => {
        newElement.remove() 
 
    })
}

// new images with three arguements listed 
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/sword.png', 500, 405)



