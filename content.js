const { ipcRenderer } = require("electron/renderer");

const code = ['+1','+86','+244','+93','+355','+213','+376','+1264','+1268','+54','+374','+247','+61','+43','+994','+1242','+973','+880','+1246','+375','+32','+501','+229','+1441','+591','+267','+55','+673','+359','+226','+95','+257','+237','+1','+1345','+236','+235','+56','+57','+242','+682','+506','+53','+357','+420','+45','+253','+1890','+593','+20','+503','+372','+251','+679','+358','+33','+594','+241','+220','+995','+49','+233','+350','+30','+1809','+1671','+502','+224','+592','+509','+504','+36','+354','+91','+62','+98','+964','+353','+972','+39','+225','+1876','+81','+962','+855','+327','+254','+82','+965','+331','+856','+371','+961','+266','+231','+218','+423','+370','+352','+853','+261','+265','+60','+960','+223','+356','+1670','+596','+230','+52','+373','+377','+976','+1664','+212','+258','+264','+674','+977','+599','+31','+64','+505','+227','+234','+850','+47','+968','+92','+507','+675','+595','+51','+63','+48','+689','+351','+1787','+974','+262','+40','+7','+250','+1758','+1784','+684','+685','+378','+239','+966','+221','+248','+232','+65','+421','+386','+677','+252','+27','+34','+94','+1758','+1784','+249','+597','+268','+46','+41','+963','+886','+992','+255','+66','+228','+676','+1809','+216','+90','+993','+256','+380','+971','+44','+1','+598','+233','+58','+84','+967','+381','+263','+243','+260'];

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
  "x13mwh8y x1q3qbx4 x1wg5k15 xajqne3 x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x13x2ugz xat24cr xexx8yu x4uap5 x18d9i69 xkhd6sd"
);

const getSameGroupElement1 = document.getElementsByClassName(
  "x13mwh8y x1q3qbx4 x1wg5k15 xajqne3 x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x13x2ugz x1i80of2 x6x52a7 xxpdul3 x18d9i69"
);

const getSameGroupElement2 = document.getElementsByClassName(
  "x13mwh8y x1q3qbx4 x1wg5k15 x1bnvlk4 x1n2onr6 x1c4vz4f x2lah0s xdl72j9 xyorhqc x13x2ugz x1i80of2 x6x52a7 xxpdul3 x18d9i69"
);

const getUserName = document.getElementsByClassName(
  "x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu _ao3e"
);


const textInputQueUser = document.getElementsByClassName("_ajzo");

setInterval(() => {
  if (getSameGroupElement[0]) {
    getSameGroupElement[0].remove();
  }
  if (getSameGroupElement1[0]) {
    getSameGroupElement1[0].remove();
  }
  if (getSameGroupElement2[0]) {
    getSameGroupElement2[0].remove();
  }
  if (titleElement[0]) {
    titleElement[0].innerHTML = "***";
  }
  if (textInputQueUser[0]) {
    for (let i = 0; i < textInputQueUser.length; i += 1) {
      if (textInputQueUser[i].innerHTML !== '***') {
        textInputQueUser[i].innerHTML = "***";
      }
    }
  }
  if (getUserName[0]) {
    for (let i = 0; i < getUserName.length; i += 1) {
      const getUserInnerHTML = getUserName[i]?.innerHTML;
      if (code.some((prefix) => getUserInnerHTML.includes(prefix)) && getUserInnerHTML !== "***") {
        getUserName[i].innerHTML = "***";
      }
    }
  }
}, 1000);

function checkAndAttachEventListener() {
  const getLeftSliderList = document.getElementsByClassName(
    "x1y332i5 x1n2onr6 x6ikm8r x10wlt62"
  );
  if (getLeftSliderList[0]) {
    clearInterval(intervalId);
    getLeftSliderList[0].addEventListener("click", function (event) {
      setTimeout(function () {
        const groupName = event.target.title;
        const accountDesc = document.getElementsByClassName(
          "x1iyjqo2 x6ikm8r x10wlt62 xlyipyv xuxw1ft _ao3e selectable-text copyable-text"
        )[0];
        if (accountDesc.title && groupName) {
          const params = `account=${accountDesc.title}&groupName=${groupName}`;
          ipcRenderer.send("get-params", params);
        }
      }, 5000);
    });
  }
}

const intervalId = setInterval(checkAndAttachEventListener, 1000);
