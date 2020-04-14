/* const data = {
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
}; */

const covid19ImpactEstimator = (data) => {
  const output = {
    data: { ...data },
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime:
        data.reportedCases * 10 * 2 ** Math.floor(data.timeToElapse / 3),
      severeCasesByRequestedTime: Math.floor(
        (0.15 / data.reportedCases) *
          10 *
          2 ** Math.floor(data.timeToElapse / 3)
      ),
      hospitalBedsByRequestedTime:
        data.totalHospitalBeds -
        Math.floor(
          (35 / 100) *
            data.totalHospitalBeds *
            Math.floor(
              (0.15 / data.reportedCases) *
                10 *
                2 ** Math.floor(data.timeToElapse / 3)
            )
        ),
      casesForICUByRequestedTime: Math.floor(
        0.05 * data.reportedCases * 10 * 2 ** Math.floor(data.timeToElapse / 3)
      ),
      casesForVentilatorsByRequestedTime: Math.floor(
        0.02 * data.reportedCases * 10 * 2 ** Math.floor(data.timeToElapse / 3)
      )
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime:
        data.reportedCases * 50 * 2 ** Math.floor(data.timeToElapse / 3),
      severeCasesByRequestedTime: Math.floor(
        (0.15 / data.reportedCases) *
          50 *
          2 ** Math.floor(data.timeToElapse / 3)
      ),
      severeCasesByRequestedTime: Math.floor(
        (0.15 / data.reportedCases) *
          50 *
          2 ** Math.floor(data.timeToElapse / 3)
      ),
      hospitalBedsByRequestedTime:
        data.totalHospitalBeds -
        Math.floor(
          (35 / 100) *
            data.totalHospitalBeds *
            Math.floor(
              (0.15 / data.reportedCases) *
                50 *
                2 ** Math.floor(data.timeToElapse / 3)
            )
        ),
      casesForICUByRequestedTime: Math.floor(
        0.05 * data.reportedCases * 50 * 2 ** Math.floor(data.timeToElapse / 3)
      ),
      casesForVentilatorsByRequestedTime: Math.floor(
        0.02 * data.reportedCases * 50 * 2 ** Math.floor(data.timeToElapse / 3)
      )
    }
  };

  return output;
};

export default covid19ImpactEstimator;