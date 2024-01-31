export default function range (inputClass, labelClass, wrapperClass) {
    const rangeElement = document.querySelector(`.${inputClass}`);
    const wrapper = document.querySelector(`.${wrapperClass}`);
    const rangeLabel = document.querySelector(`.${labelClass}`);
    const maxRange = +rangeElement.getAttribute('max');
    const minRange = +rangeElement.getAttribute('min');
    let curentValue = +rangeElement.value;
    const maxWidth = +getComputedStyle(rangeElement).width.slice(0, -2);

    let startPosition = calculatePosition(curentValue);
    setLabelPosition(startPosition);

    rangeElement.addEventListener('input', e => {
        setLabelPosition(calculatePosition(+rangeElement.value));
    });

    function calculatePosition(value) {
        return ((value - minRange) * (maxWidth / (maxRange - minRange))) - ((value - minRange) * (maxWidth / (maxRange - minRange)) * 0.05);
    }

    function setLabelPosition(position) {
        let test = position.toString() + 'px';
        rangeLabel.style.left = position.toString() + 'px';
        rangeLabel.textContent = rangeElement.value + ' м²';
    }
}