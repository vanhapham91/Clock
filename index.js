function createClock() {
	for (let i = 0; i < 13; i++) {
		const currHourNeedle = document.getElementById(`hour-${i}`);
		const currHourNumber = document.querySelectorAll(`#hour-${i} span`)[0];

		const deg = 360 / 12 * i;

		currHourNeedle.style.transform = `rotate(${deg}deg)`;
		currHourNumber.style.transform = `rotate(-${deg}deg)`;
	}
}

function getPositionOfSmallNeedle (num) {
	return `translateX(-50%) translateY(25%) rotate(${num * 360 / 60}deg)`;
}

function getPositionOfHourNeedle (hour, minute) {
	return `translateX(-50%) translateY(150%) rotate(${hour * 360 / 12 + minute * 30 / 60}deg)`;
}


function startClock() {
	const secondsNeedle = document.getElementById('NeedleSeconds');
	const minutesNeedle = document.getElementById('NeedleMinutes');
	const hoursNeedle = document.getElementById('NeedleHours');

	setInterval(() => {
		let currentTime = new Date();
		let currentSecond = currentTime.getSeconds();
		let currentMinute = currentTime.getMinutes();
		let currentHour = currentTime.getHours();

		secondsNeedle.style.transform = getPositionOfSmallNeedle(currentSecond);
		minutesNeedle.style.transform = getPositionOfSmallNeedle(currentMinute);
		hoursNeedle.style.transform = getPositionOfHourNeedle(currentHour,currentMinute);

	}, 1000)

}

window.addEventListener('load', function () {
	createClock();
	startClock();
})
