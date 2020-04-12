const covid19ImpactEstimator = (data) => {
  const input = data;
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
  return {
    data: input,
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionByRequestedTime: (data.reportedCases * 10) * (2 ** (dataCalc()))
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionByRequestedTime: (data.reportedCases * 50) * (2 ** (dataCalc()))
    }
  };
};

export default covid19ImpactEstimator;
