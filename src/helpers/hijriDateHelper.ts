function intPart(floatNum) {
  if (floatNum < -0.0000001) {
    return Math.ceil(floatNum - 0.0000001);
  }
  return Math.floor(floatNum + 0.0000001);
}

function gregmonth(wdn) {
  if (wdn == 0) {
    return 'يناير';
  }
  if (wdn == 1) {
    return 'فبراير';
  }
  if (wdn == 2) {
    return 'مارس';
  }
  if (wdn == 3) {
    return 'أبريل';
  }
  if (wdn == 4) {
    return 'ماي';
  }
  if (wdn == 5) {
    return 'يونيو';
  }
  if (wdn == 6) {
    return 'يوليو';
  }
  if (wdn == 7) {
    return 'أغسطس';
  }
  if (wdn == 8) {
    return 'سبتمبر';
  }
  if (wdn == 9) {
    return 'أكتوبر';
  }
  if (wdn == 10) {
    return 'نوفمبر';
  }
  if (wdn == 11) {
    return 'ديسمبر';
  }
  return '';
}

function islamicmonth(wdn) {
  if (wdn == 0) {
    return 'محرم';
  }
  if (wdn == 1) {
    return 'صفر';
  }
  if (wdn == 2) {
    return 'ربيع الأول';
  }
  if (wdn == 3) {
    return 'ربيع الثاني';
  }
  if (wdn == 4) {
    return 'جمادى الأول';
  }
  if (wdn == 5) {
    return 'جمادى الآخر';
  }
  if (wdn == 6) {
    return 'رجب';
  }
  if (wdn == 7) {
    return 'شعبان';
  }
  if (wdn == 8) {
    return 'رمضان';
  }
  if (wdn == 9) {
    return 'شوال';
  }
  if (wdn == 10) {
    return 'ذو القعدة';
  }
  if (wdn == 11) {
    return 'ذو الحجة';
  }
  return '';
}

function GregToIsl(arg) {
  var d = parseInt(arg.CDay.value);
  var m = parseInt(arg.CMonth.value);
  var y = parseInt(arg.CYear.value);
  var delta = 0; //change here
  var jd;
  if (y > 1582 || (y == 1582 && m > 10) || (y == 1582 && m == 10 && d > 14)) {
    //added +delta=1 on jd to comply isna rulling 2007
    jd =
      intPart((1461 * (y + 4800 + intPart((m - 14) / 12))) / 4) +
      intPart((367 * (m - 2 - 12 * intPart((m - 14) / 12))) / 12) -
      intPart((3 * intPart((y + 4900 + intPart((m - 14) / 12)) / 100)) / 4) +
      d -
      32075 +
      delta;
  } else {
    //added +1 on jd to comply isna rulling
    jd =
      367 * y -
      intPart((7 * (y + 5001 + intPart((m - 9) / 7))) / 4) +
      intPart((275 * m) / 9) +
      d +
      1729777 +
      delta;
  }
  // arg.JD.value = jd;
  //added -1 on jd1 to comply isna rulling
  var jd1 = jd - delta;
  var l = jd - 1948440 + 10632;
  var n = intPart((l - 1) / 10631);
  l = l - 10631 * n + 354;
  var j =
    intPart((10985 - l) / 5316) * intPart((50 * l) / 17719) +
    intPart(l / 5670) * intPart((43 * l) / 15238);
  l =
    l -
    intPart((30 - j) / 15) * intPart((17719 * j) / 50) -
    intPart(j / 16) * intPart((15238 * j) / 43) +
    29;
  m = intPart((24 * l) / 709);
  d = l - intPart((709 * m) / 24);
  y = 30 * n + j - 30;

  // arg.HDay.value = d;
  // arg.HMonth.value = m;
  // arg.HYear.value = y;
  // arg.hijriday.value = d;
  // arg.hijrimonth.value = islamicmonth(m - 1);
  // arg.hijriyear.value = y;

  return {
    hijriDay: d,
    hijriMonth: islamicmonth(m - 1),
    hijriYear: y,
  };
}

export default {
  isnumeric(num) {
    var strlen = num.length;
    var i;
    for (i = 0; i < strlen; ++i) {
      if (
        !(
          (num.charAt(i) >= '0' && num.charAt(i) <= '9') ||
          num.charAt(i) == '.' ||
          num.charAt(i) == '-'
        )
      ) {
        return false;
      }
    }
  },

  getHijriDate(day, month, year) {
    const arg = {
      CDay: { value: day },
      CMonth: { value: month },
      CYear: { value: year },
    };

    const result = GregToIsl(arg);

    return `${result.hijriDay} ${result.hijriMonth} ${result.hijriYear}`;
  },

  getGregorianDate(day, month, year) {
    return `${day} ${gregmonth(month)} ${year}`;
  },
};
