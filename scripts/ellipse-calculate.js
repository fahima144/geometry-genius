function calculateEllipseArea() {
    // get Ellipse Axis value
    const ellipseAxisInput = document.getElementById('ellipse-axis');
    const ellipseAxisText = ellipseAxisInput.value;
    const axis = parseFloat(ellipseAxisText);
    console.log(axis);
    
    // get Ellipse base value
    const ellipseBaseInput = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInput.value;
    const base = parseFloat(ellipseBaseText);
    console.log(base);

    // calculate Ellipse area
    const area = &#960; * axis * base;
    console.log('area of the ellipse is:', area);

    // display Ellipse area
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}