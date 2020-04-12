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

  return {
    impact: {
      currentlyInfected: () => (data.reportedCases * 10),
      infectionByRequestedTime: () => (data.reportedCases * 10) * (2 ** (dataCalc()))
    },
    severeImpact: {
      reportedCases: 674,
      currentlyInfected: () => (data.reportedCases * 50),
      infectionByRequestedTime: () => (data.reportedCases * 50) * (2 ** (dataCalc()))
    }
  };
};

export default covid19ImpactEstimator;
