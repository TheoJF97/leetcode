// ===========================================

const tennisPoints = (points) => {
  const pointsSplit = points.split("-");
  const pointsArray = pointsSplit.map((point, i) => {
    if (point === "love") {
      return "0";
    }

    if (point === "all" && i === 0) {
      let points = pointsSplit[i + 1];
    }
  });
};

// ====================================
