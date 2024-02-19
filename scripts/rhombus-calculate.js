function calculateRhombusArea() {
    // get base of the Rhombus
    const d1Input = document.getElementById('rhombus-base');
    const d1Text = d1Input.value;
    const d1 = parseFloat(d1Text);
    console.log(d1);

    // get height of the Rhombus
    const d2Input = document.getElementById('rhombus-height');
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text);
    console.log(d2);

    // calculate Rhombus area
    const area = 0.5 * d1 * d2;
    console.log('area of the rhombus is:', area);

    // display Rhombus are 
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}