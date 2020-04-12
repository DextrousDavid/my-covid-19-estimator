const info = {
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
const covid19ImpactEstimator = () => {
  const dataCalc = () => {
    if (info.periodType === 'days') {
      return (Math.trunc((info.timeToElapse / 3)));
    }
    if (info.periodType === 'weeks') {
      return (Math.trunc((info.timeToElapse / 3) * 7));
    }
    if (info.periodType === 'months') {
      return (Math.trunc((info.timeToElapse / 3) * 30));
    }
    return 0;
  };

  const impact = {
    currentlyInfected: info.reportedCases * 10,
    infectionByRequestedTime: (info.reportedCases * 10) * (2 ** (dataCalc()))
  };
  //  SevereImpact
  const severeImpact = {
    currentlyInfected: info.reportedCases * 50,
    infectionByRequestedTime: (info.reportedCases * 50) * (2 ** (dataCalc()))
  };
  const impactEstimator = impact;
  const severeImpactEstimator = severeImpact;
  return {
    data: info,
    impact: impactEstimator,
    severeImpact: severeImpactEstimator
  };
};

//  console.log(covid19ImpactEstimator());
//  module.exports = covid19ImpactEstimator;
export default covid19ImpactEstimator();
