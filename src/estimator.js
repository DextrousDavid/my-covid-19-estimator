const covid19ImpactEstimator = (data) => {
  // const data = {
  //   region: {
  //     name: 'Africa',
  //     avgAge: 19.7,
  //     avgDailyIncomeInUSD: 5,
  //     avgDailyIncomePopulation: 0.71
  //   },
  //   periodType: 'days',
  //   timeToElapse: 58,
  //   reportedCases: 674,
  //   population: 66622705,
  //   totalHospitalBeds: 1380614
  // };
  const dataCalc = () => {
    if (data.periodType === 'days') {
      return (Math.trunc((data.timeToElapse / 3)));
    }
    if (data.periodType === 'weeks') {
      return (Math.trunc((data.timeToElapse / 3) * 7));
    }
    if (data.periodType === 'months') {
      return (Math.trunc((data.timeToElapse / 3) * 30));
    }
    return 0;
  };
  //  Impact
  const impact = {
    currentlyInfected: data.reportedCases * 10,
    infectionByRequestedTime: (data.reportedCases * 10) * (2 ** (dataCalc()))
  };
  //  SevereImpact
  const severeImpact = {
    currentlyInfected: data.reportedCases * 50,
    infectionByRequestedTime: (data.reportedCases * 50) * (2 ** (dataCalc()))
  };
  const impactEstimator = impact;
  const severeImpactEstimator = severeImpact;
  return {
    data,
    impact: impactEstimator,
    severeImpact: severeImpactEstimator
  };
};


// module.exports = covid19ImpactEstimator;
export default covid19ImpactEstimator;
