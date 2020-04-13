/* eslint-disable max-len */
const dataCalc = (periodType, timeToElapse) => {
  if (periodType === 'days') {
    return Math.trunc(timeToElapse / 3);
  }
  if (periodType === 'weeks') {
    return Math.trunc((timeToElapse / 3) * 7);
  }
  if (periodType === 'months') {
    return Math.trunc((timeToElapse / 3) * 30);
  }
  return 0;
};

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
const covid19ImpactEstimator = () => ({


  data,
  impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime:
      (data.reportedCases * 10) * (2 ** dataCalc(data.periodType, data.timeToElapse)),
    severeCasesByRequestedTime:
  Math.trunc(data.reportedCases * 10) * (2 ** dataCalc(data.periodType, data.timeToElapse) * 0.15),
    hospitalBedsByRequestedTime:
    Math.trunc((data.reportedCases * 10)
    * (2 ** dataCalc(data.periodType, data.timeToElapse)) * (0.35 * data.totalHospitalBeds))
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime:
      (data.reportedCases * 50) * (2 ** dataCalc(data.periodType, data.timeToElapse)),
    severeCasesByRequestedTime:
    Math.trunc(((data.reportedCases * 50) * (2 ** dataCalc(data.periodType, data.timeToElapse))) * 0.15),
    hospitalBedsByRequestedTime:
    Math.trunc((data.reportedCases * 50)
    * (2 ** dataCalc(data.periodType, data.timeToElapse)) * (0.35 * data.totalHospitalBeds))
  }
});

console.log(covid19ImpactEstimator());
// module.exports = covid19ImpactEstimator;
// export default covid19ImpactEstimator;
