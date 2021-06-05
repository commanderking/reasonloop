const csv = require("csvtojson");
const _ = require("lodash");

const validYears = [
  "2013-2014",
  "2015-2016",
  "2016-2017",
  "2017-2018",
  "2018-2019",
  "2019-2020",
] as const;

type AcademicYear = typeof validYears[number];

const yearsWithIndex = validYears.map((year, index) => {
  return {
    academicYear: year,
    index,
  };
});

const yearsMap = _.keyBy(yearsWithIndex, "academicYear");

type GraduationGroup =
  | "All Students"
  | "Ethnicity"
  | "IEP"
  | "Economically Disadvantaged"
  | "ELL"
  | "Gender"
  | "IEP"
  | "Ethnicity"
  | "Gender"
  | "ELL"
  | "Economically Disadvantaged";

type GraduationSubgroup = "All Students" | "Asian";
type GraduationRateType = "4-Year Graduation Rate" | "5-Year Graduation Rate";
type Sector = "District" | "Alternative" | "<NULL>";

type SchoolGraduationRate = {
  cohort: AcademicYear;
  group: GraduationGroup;
  num: string | "s"; // string form of number
  denom: string; // string form of number, always at least 1
  rate_type: GraduationRateType;
  schoolid_ulcs: string;
  schoolname: string;
  score: string | "s";
  sector: Sector;
  srcschoolid: string;
  subgroup: GraduationSubgroup;
};

const getCount = (count: string) => {
  if (count === "s" || !Boolean(count)) {
    return null;
  }

  return parseInt(count);
};

const formatGraduationRates = (gradRate: SchoolGraduationRate) => {
  return {
    schoolId: gradRate.schoolid_ulcs,
    academicYear: gradRate.cohort,
    group: gradRate.group,
    subgroup: gradRate.subgroup,
    gradRateType: gradRate.rate_type,
    countGrads: getCount(gradRate.num),
    countPossibleGrads: getCount(gradRate.denom),
  };
};

export const getSchoolGraduationRates = async (csvFile) => {
  const schoolGraduationRates = await csv().fromFile(csvFile);

  return schoolGraduationRates
    .filter(
      (school) =>
        school.group === "All Students" &&
        school.rate_type === "4-Year Graduation Rate"
    )
    .map(formatGraduationRates);
};

export const getSchools = async (csvFile) => {
  const schools = await csv().fromFile(csvFile);
};
