const spiral = document.getElementById('spiral');
const centerX = 200;
const centerY = 250;
let currentAngle = 0;
const totalTurns = 3;
const totalPoints = 200;

for (let i = 0; i < totalPoints; i++) {
    const angleIncrement = (2 * Math.PI * totalTurns) / totalPoints;
    const x = centerX + i * Math.cos(currentAngle);
    const y = centerY + i * Math.sin(currentAngle);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 2);
    spiral.appendChild(circle);

    currentAngle += angleIncrement;
}
