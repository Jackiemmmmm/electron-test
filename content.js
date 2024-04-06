const titleElement = document.getElementsByClassName(
  "x1rg5ohu x13faqbe _ao3e selectable-text copyable-text"
);

document.addEventListener("click", function (event) {
  for (let i = 0; i < titleElement.length; i += 1) {
    titleElement[i].innerHTML = "***";
  }

  const descElement = document.getElementsByClassName(
    "x1jchvi3 x1fcty0u x40yjcy"
  );
  for (let i = 0; i < descElement.length; i += 1) {
    descElement[i].innerHTML = "***";
  }

  const chatListElement = document.getElementsByClassName("_ahx_");
  for (let i = 0; i < chatListElement.length; i += 1) {
    chatListElement[i].innerHTML = "***";
  }

  // const blockElemnts = document.getElementsByClassName(
  //   "mvxzr2tb e1gr2w1z _4ZTmp"
  // );

  // for (let i = 0; i < blockElemnts.length; i += 1) {
  //   if (blockElemnts[i].children[0]) {
  //     blockElemnts[i].children[0].innerHTML = "***";
  //   }
  // }

  // const getUserListElemnt = document.getElementsByClassName(
  //   "x10l6tqk xh8yej3 x1g42fcv"
  // );

  // for (let i = 0; i < getUserListElemnt.length; i += 1) {
  //   if (
  //     getUserListElemnt[i].role === "listitem" &&
  //     getUserListElemnt[i].getElementsByClassName("x1n2onr6")
  //   ) {
  //     const dvjymElement =
  //       getUserListElemnt[i].getElementsByClassName("x1n2onr6");
  //     for (let j = 0; j < dvjymElement.length; j += 1) {
  //       const getChildName = dvjymElement[j].getElementsByClassName(
  //         "x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu _ao3e"
  //       );
  //       if (getChildName.length > 0) {
  //         getChildName[0].desc = getChildName[0].innerHTML;
  //         getChildName[0].innerHTML = "***";
  //       }
  //     }
  //   }
  // }

  const getGroupDescElement = document.getElementsByClassName(
    "x78zum5 x1cy8zhl xisnujt x1nxh6w3 xcgms0a x16cd2qt"
  );
  if (getGroupDescElement[0]) {
    // getGroupDescElement[0].remove();
    getGroupDescElement[0].style.display = "none";
  }
});

const getSameGroupElement = document.getElementsByClassName(
  "x1hnkqds x1q3qbx4 x1wg5k15 xajqne3 x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x13x2ugz xat24cr xexx8yu x4uap5 x18d9i69 xkhd6sd"
);

const getSameGroupElement1 = document.getElementsByClassName(
  "x1hnkqds x1q3qbx4 x1wg5k15 xajqne3 x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x13x2ugz x1i80of2 x6x52a7 xxpdul3 x18d9i69"
);

setInterval(() => {
  if (getSameGroupElement[0]) {
    getSameGroupElement[0].remove();
  }
  if (getSameGroupElement1[0]) {
    getSameGroupElement1[0].remove();
  }
  if (titleElement[0]) {
    titleElement[0].innerHTML = "***";
  }
}, 1000);

const getLeftSliderList = document.getElementsByClassName(
  // "x10l6tqk xh8yej3 x1g42fcv"
  "x1y332i5 x1n2onr6 x6ikm8r x10wlt62"
);

getLeftSliderList[0].addEventListener("click", function (event) {
  setTimeout(() => {
    // const xhr = new XMLHttpRequest();
    // const url = "https://www.naims.top/transfer/send/data";
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    const groupName = event.target.title;
    const accountDesc = document.getElementsByClassName(
      "x1iyjqo2 x6ikm8r x10wlt62 xlyipyv xuxw1ft _ao3e selectable-text copyable-text"
    )[0];
    if (accountDesc.title && groupName) {
      const params = `account=${accountDesc.title}&groupName=${groupName}`;
      window.api.sendToMain(params);

      // xhr.send(params);
    }
  }, 5000);
});
