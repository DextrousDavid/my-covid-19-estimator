const covid19ImpactEstimator = (data) => {
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
    impact: impactEstimator,
    severeImpact: severeImpactEstimator
  };
};

console.log(covid19ImpactEstimator());
//  module.exports = covid19ImpactEstimator;
// export default covid19ImpactEstimator();
