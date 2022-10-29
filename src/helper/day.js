import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";
// import { DATE_TEMPLATE, DATE_TEMPLATE_FULL } from "../constants";

dayjs.locale(localeVi);
dayjs.extend(relativeTime);

export const formatRelativeDate = (date) => {
  const createdDateObj = dayjs(date);
  const dateFormatted = createdDateObj.format("DD/MM/YYYY");
  const dateRelative = createdDateObj.fromNow();

  return { dateRelative, dateFormatted };
};
