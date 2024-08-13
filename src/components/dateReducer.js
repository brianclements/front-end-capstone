const dateReducer = (state, lookup) => {
  let date = new Date();
  let currentDay= String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  let currentYear = date.getFullYear();
  let today = `${currentYear}-${currentMonth}-${currentDay}`;

  switch (lookup.date) {
    case today: {
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
    };
    default: {
      return [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
    };
  };
};

export default dateReducer;
