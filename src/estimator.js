const covid19ImpactEstimator = () => {
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
  const dataCalc = () => {
    if (data.periodType === 'days') {
      return (Math.trunc((data.timeToElapse * 1) / 3));
    }
    /*  if (data.periodType === 'weeks') {
      return (Math.trunc((data.timeToElapse * 7) / 3));
    }
    if (data.periodType === 'months') {
      return (Math.trunc((data.timeToElapse * 7) / 3));
    }
    */
    return 0;
  };
  //  Impact
  const impact = {
    currentlyInfected: data.reportedCases * 10,
    infectionByRequestedTime: (data.reportedCases * 10) * (2 ** (dataCalc(data)))
  };
  //  SevereImpact
  const severeImpact = {
    currentlyInfected: data.reportedCases * 50,
    infectionByRequestedTime: (data.reportedCases * 50) * (2 ** (dataCalc(data)))
  };
  const input = data;
  const impactEstimator = impact;
  const severeImpactEstimator = severeImpact;
  return {
    data: input,
    impact: impactEstimator,
    severeImpact: severeImpactEstimator
  };
};
console.log(covid19ImpactEstimator());

// module.exports = covid19ImpactEstimator;
export default covid19ImpactEstimator;
