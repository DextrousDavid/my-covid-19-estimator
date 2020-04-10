const express = require('express');
const path = require('path');

//Initialize Express
const app = express();
app.get('/', (req, res) => res.send('Hello Andela!'));

//

const covid19ImpactEstimator = (data) => data;
const data = {
    region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
},

//Impact Estimator
impact = function() {
        let reportedCases = 674;
        let currentlyInfected = reportedCases * 10;
        let infectionsByRequestedTime = currentlyInfected * Math.pow(2, 9);
        let severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
        let hospitalBedsByRequestedTime = severeCasesByRequestedTime * 0.35;
        let casesForICUByRequestedTime = infectionsByRequestedTime * 0.05;
        let casesForVentilatorsByRequestedTime = infectionsByRequestedTime * 0.02;
        let dollarsInFlight = (infectionsByRequestedTime * 0.65 * 1.5) / 30;
        return  `IMPACT ESTIMATOR\ncurrentlyInfected: ${currentlyInfected} \ninfectionByRequestedTime: ${infectionsByRequestedTime} \nsevereCasesByRequestedTime: ${severeCasesByRequestedTime}\nhospitalBedsRequestedTime: ${Math.round(hospitalBedsByRequestedTime)} \ncasesForICUByRequestedtime: ${casesForICUByRequestedTime} \ncasesForVentilatorsByRequestedTime: ${Math.round(casesForVentilatorsByRequestedTime)} \ndollarsInFlight: $${Math.round(dollarsInFlight)}`
}

//severeImpact Estimator
severeImpact = function() {
    let reportedCases = 674;
    let currentlyInfected = reportedCases * 50;
    let infectionsByRequestedTime = currentlyInfected * Math.pow(2, 9);
    let severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
    let hospitalBedsByRequestedTime = severeCasesByRequestedTime * 0.35;
    let casesForICUByRequestedTime = infectionsByRequestedTime * 0.05;
    let casesForVentilatorsByRequestedTime = infectionsByRequestedTime * 0.02;
    let dollarsInFlight = (infectionsByRequestedTime * 0.65 * 1.5) /30;
    return  `\nSEVERE IMPACT ESTIMATOR\ncurrentlyInfected: ${currentlyInfected} \ninfectionByRequestedTime: ${infectionsByRequestedTime} \nsevereCasesByRequestedTime: ${severeCasesByRequestedTime}\nhospitalBedsRequestedTime: ${hospitalBedsByRequestedTime} \ncasesForICUByRequestedtime: ${casesForICUByRequestedTime} \ncasesForVentilatorsByRequestedTime: ${casesForVentilatorsByRequestedTime} \ndollarsInFlight: $${dollarsInFlight}`
 
}
console.log(covid19ImpactEstimator(data));

console.log(covid19ImpactEstimator(impact()));
console.log(covid19ImpactEstimator(severeImpact()));

//Can also be run with...
//console.log(impact());
//console.log(severeImpact());
//console.log(covid19ImpactEstimator(impact.currentlyInfected()));



 //export default covid19ImpactEstimator;
 //let k; export default k = 12;

//Listen to port 8000;
 const port = 8000;
 //app.listen(port, () => console.log(`Listnening to port ${port}....`))