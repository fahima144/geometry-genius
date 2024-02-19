function calculatePentagonArea() {
    // get Pentagon Perimeter value
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const perimeter = parseFloat(pentagonPerimeterText);
    console.log(perimeter);
    
    // get Pentagon base value
    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);
    console.log(base);

    // calculate Pentagon area
    const area = 0.5 * perimeter * base;
    console.log('area of the pentagon is:', area);

    // display Pentagon area
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}