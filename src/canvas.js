import { fabric } from "fabric";

export function setupCanvas(canvasEl) {
  // global state variables
let bgColor = '#000'
let strokeColor = 'transparent'
let size = 24
let fontFamily = "arial"

//colors
const blackColor = document.querySelector('.black-color')
const grayColor = document.querySelector('.gray-color')
const whiteColor = document.querySelector('.white-color')
const redColor = document.querySelector('.red-color')
const orangeColor = document.querySelector('.orange-color')
const yellowColor = document.querySelector('.yellow-color')
const greenColor = document.querySelector('.green-color')
const blueColor = document.querySelector('.blue-color')
const purpleColor = document.querySelector('.purple-color')
const cyanColor = document.querySelector('.cyan-color')

// update color state
blackColor.addEventListener('click', () => {
    bgColor = '#000'
})

grayColor.addEventListener('click', () => {
    bgColor = '#757575'
})

whiteColor.addEventListener('click', () => {
    bgColor = '#fff'
})

redColor.addEventListener('click', () => {
    bgColor = 'red'
})

orangeColor.addEventListener('click', () => {
    bgColor = '#f79621'
})

yellowColor.addEventListener('click', () => {
    bgColor = '#f2c426'
})

greenColor.addEventListener('click', () => {
    bgColor = '#198f52'
})

blueColor.addEventListener('click', () => {
    bgColor = '#0b8ce8'
})

purpleColor.addEventListener('click', () => {
    bgColor = '#8a38f6'
})

cyanColor.addEventListener('click', () => {
    bgColor = '#a9d7f9'
})

// strokes
const blackStroke = document.querySelector('.black')
const grayStroke = document.querySelector('.gray')
const whiteStroke = document.querySelector('.white')
const redStroke = document.querySelector('.red')
const orangeStroke = document.querySelector('.orange')
const yellowStroke = document.querySelector('.yellow')
const greenStroke = document.querySelector('.green')
const blueStroke = document.querySelector('.blue')
const purpleStroke = document.querySelector('.purple')
const cyanStroke = document.querySelector('.cyan')

// update stroke state
blackStroke.addEventListener('click', () => {
    strokeColor = '#000'
})

grayStroke.addEventListener('click', () => {
    strokeColor = '#757575'
})

whiteStroke.addEventListener('click', () => {
    strokeColor = '#fff'
})

redStroke.addEventListener('click', () => {
    strokeColor = 'red'
})

orangeStroke.addEventListener('click', () => {
    strokeColor = '#f79621'
})

yellowStroke.addEventListener('click', () => {
    strokeColor = '#f2c426'
})

greenStroke.addEventListener('click', () => {
    strokeColor = '#198f52'
})

blueStroke.addEventListener('click', () => {
    strokeColor = '#0b8ce8'
})

purpleStroke.addEventListener('click', () => {
    strokeColor = '#8a38f6'
})

cyanStroke.addEventListener('click', () => {
    strokeColor = '#a9d7f9'
})


  const canvas = new fabric.Canvas(canvasEl);
  canvas.setBackgroundColor("#d9d9d9");
  canvas.setWidth(window.innerWidth - 300);
  canvas.setHeight(window.innerHeight - 40);

  const rectBtn = document.querySelector('.rect')

  rectBtn.addEventListener('click', () => {
    const rect = new fabric.Rect({
      top: 200,
      left: window.innerWidth / 2 - 100,
      width: 140,
      height: 140,
      fill: bgColor,
      strokeWidth: strokeColor ? 3 : 0,
      stroke: strokeColor ? strokeColor : 'transparent',
    });

    canvas.add(rect);
  })

  const circleBtn = document.querySelector('.circ')

  circleBtn.addEventListener('click', () => {
    const circle = new fabric.Circle({
      radius: 80, 
      fill: bgColor, 
      top: 200,
      left: window.innerWidth / 2 - 100,
      strokeWidth: strokeColor ? 3 : 0,
      stroke: strokeColor ? strokeColor : 'transparent',
    });

    canvas.add(circle);
  })

  const triangleBtn = document.querySelector('.tria')

  triangleBtn.addEventListener('click', () => {
    const tria = new fabric.Triangle({
      width: 140, 
      height: 140, 
      fill: bgColor, 
      top: 200,
      left: window.innerWidth / 2 - 100,
      strokeWidth: strokeColor ? 3 : 0,
      stroke: strokeColor ? strokeColor : 'transparent',
    });

    canvas.add(tria);
  })

  const lineBtn = document.querySelector('.line')

  lineBtn.addEventListener('click', () => {
    const line = new fabric.Line([50, 100, 200, 200], {
      left: window.innerWidth / 2 - 100,
      top: 200,
      stroke: bgColor,
    })

    canvas.add(line);
  })

  const textBtn = document.querySelector('.text')

  const modelWindow = document.querySelector('.text-modal')

  textBtn.addEventListener('click', () => {
    modelWindow.style.display = "grid"
  })

  const inputText = document.querySelector("#text-input")
  const inputBtn = document.querySelector("#text-btn")

  let textValue

  inputBtn.addEventListener('click', () => {
    size = Number(document.querySelector('.size').value) ? Number(document.querySelector('.size').value) : size

    fontFamily = document.querySelector('.font-family').selectedOptions[0].value ? document.querySelector('.font-family').selectedOptions[0].value : fontFamily
    
    console.log(fontFamily)

    textValue = inputText.value

    const text = new fabric.Text(textValue, {
      left: 100,
      top: 100,
      fontFamily: fontFamily,
      fontSize: size,
      fill: bgColor,
    });

    canvas.add(text);

    modelWindow.style.display = "none"
  })

  var imgElement = document.getElementById('my-image');

  const imgBtn = document.querySelector('.image')

  const imageText = document.querySelector("#image-input")
  const imageBtn = document.querySelector("#image-btn")

  const imageModelWindow = document.querySelector(".image-modal")

  imgBtn.addEventListener('click', () => {
    imageModelWindow.style.display = "grid"
  })

  imageBtn.addEventListener('click', () => {
    const src = imageText.value

    let image = document.createElement("img");
    let imageParent = document.querySelector(".main-content");
    image.id = "my-image";
    image.src = src;
    imageParent.appendChild(image);

    imgElement.src = src

    const imgInstance = new fabric.Image(imgElement, {
      left: 200,
      top: 200,
      angle: 30,
    });

    canvas.add(imgInstance);

    imageModelWindow.style.display = "none"
  })
  
  // canvas.add(heart)
}
