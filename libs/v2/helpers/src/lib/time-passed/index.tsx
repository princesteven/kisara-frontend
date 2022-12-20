import React from "react";
import moment from "moment";

/**
 * @function
 * @name calculateTimePassed
 * @description Calculate the amount of time passed from today or from a given date
 * @param date {String}
 * @param referenceDate {string}
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
export const calculateTimePassed = (date: string, referenceDate:string | null = null): string => {
  const dateMoment = moment(date)
  const referenceDateMoment = referenceDate ? moment(referenceDate) : moment().startOf('day')
  const isDateValid = dateMoment.isValid()
  const isReferenceDateValid = referenceDateMoment.isValid()

  if (!isDateValid || !isReferenceDateValid)
    return 'Invalid Date';

  const diff = referenceDateMoment.diff(dateMoment);
  const diffInDays = moment.duration(diff).asDays();
  const diffInWeeks = moment.duration(diff).asWeeks();
  const diffInMonths = moment.duration(diff).asMonths();
  const diffInYears = moment.duration(diff).asYears();

  if (diffInDays > 6 && diffInWeeks < 4)
    return `${Math.round(diffInWeeks)} Weeks`;

  if (diffInWeeks > 4 && diffInMonths < 12)
    return `${Math.round(diffInMonths)} Months`;

  if (diffInMonths > 12)
    return `${Math.round(diffInYears)} Years`;

  return `${Math.round(diffInDays)} Days`;
};
