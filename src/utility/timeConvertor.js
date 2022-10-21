function timeConverter() {
  const UNIXdate = new Date();
  console.log(UNIXdate);
  const month = UNIXdate.getMonth() + 1;
  console.log(month);
  const year = UNIXdate.getFullYear();
  return { month, year };
}
export default timeConverter;
