//Input values: we could easily imagine asking a user for these values.
// const name = "Leeloo";
// const rainPercentage = 0.2;
// const temperatureInC = 26;

// `Hello, ${name}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
// `${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;
const name = "Leeloo";
const probabilityOfRain = 0.2;
const temperatureInC = 26;

const likelyToRain = probabilityOfRain > 0.3;
const sunIsDangerous = temperatureInC >= 26;

const rainPercentage = probabilityOfRain * 100;
const rainAdvice = likelyToRain ? "take an umbrella" : "enjoy this rain-free day";
const sunAdvice = sunIsDangerous ? "watch out for heatstroke" : "bask in this fine weather";

`Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ${rainAdvice} and ${sunAdvice}.`;