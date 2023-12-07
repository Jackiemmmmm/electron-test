document.addEventListener("click", function (event) {
  const titleElement = document.getElementsByClassName(
    "l7jjieqr cw3vfol9 _11JPr selectable-text copyable-text"
  );

  for (let i = 0; i < titleElement.length; i += 1) {
    titleElement[i].innerHTML = "***";
  }

  const descElement = document.getElementsByClassName(
    "enbbiyaj e1gr2w1z hp667wtd"
  );
  for (let i = 0; i < descElement.length; i += 1) {
    descElement[i].innerHTML = "***";
  }

  const chatListElement = document.getElementsByClassName("WJuYU");
  for (let i = 0; i < chatListElement.length; i += 1) {
    chatListElement[i].innerHTML = "***";
  }

  const blockElemnts = document.getElementsByClassName(
    "mvxzr2tb e1gr2w1z _4ZTmp"
  );

  for (let i = 0; i < blockElemnts.length; i += 1) {
    if (blockElemnts[i].children[0]) {
      blockElemnts[i].children[0].innerHTML = "***";
    }
  }

  const getUserListElemnt = document.getElementsByClassName(
    "lhggkp7q ln8gz9je rx9719la"
  );

  for (let i = 0; i < getUserListElemnt.length; i += 1) {
    if (
      getUserListElemnt[i].role === "listitem" &&
      getUserListElemnt[i].getElementsByClassName("Dvjym")
    ) {
      const dvjymElement = getUserListElemnt[i].getElementsByClassName("Dvjym");
      for (let j = 0; j < dvjymElement.length; j += 1) {
        if (dvjymElement[j].getElementsByClassName("_11JPr").length > 0) {
          dvjymElement[j].getElementsByClassName("_11JPr")[0].innerHTML = "***";
        }
      }
    }
  }

  const getGroupDescElement = document.getElementsByClassName(
    "p357zi0d r15c9g6i g4oj0cdv ovllcyds l0vqccxk pm5hny62"
  );
  if (getGroupDescElement[0]) {
    getGroupDescElement[0].remove();
  }
});

const getSameGroupElement = document.getElementsByClassName(
  "gsqs0kct oauresqk efgp0a3n h3bz2vby g0rxnol2 tvf2evcx oq44ahr5 lb5m6g5c brac1wpa lkjmyc96 i4pc7asj bcymb0na przvwfww e8k79tju"
);

const getSameGroupElement1 = document.getElementsByClassName(
  "gsqs0kct oauresqk efgp0a3n tio0brup g0rxnol2 tvf2evcx oq44ahr5 lb5m6g5c brac1wpa lkjmyc96 i4pc7asj bcymb0na przvwfww e8k79tju"
);

setInterval(() => {
  if (getSameGroupElement[0]) {
    getSameGroupElement[0].remove();
  }
  if (getSameGroupElement1[0]) {
    getSameGroupElement1[0].remove();
  }
}, 1000);
