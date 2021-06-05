const csv = require("csvtojson");
import { getSchoolGraduationRates } from "utils/data/schools";

// const getSchoolAttendance = async () => {
//   const schoolAttendance = await csv().fromFile(
//     "./data/phillySchools/school_average_daily_attendance_2014_2020.csv"
//   );

//   return schoolAttendance.filter();
// };

export default async (req, res) => {
  const graduationRates = await getSchoolGraduationRates(
    "./data/schools/philadelphia/school_graduation_rates_cohort_2011_2017.csv"
  );

  console.log("graduationRates", graduationRates);

  res.status(200).json(graduationRates);
};
