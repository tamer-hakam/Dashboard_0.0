const product = {
  modPrime: true,
  id: "",
  currentColorId: "color_1", // defult
  type: "",
  numOfcolors: 0, // defult
  numOfphotos: 0, // defult
  mediaSrc: "/media_assets/idA1/", // defult
  carrentimgNum: 0, // defult

  colors: [],

  sizes: [],

  sizeTable: {
    head: ["مقاس", "الصدر", "الخصر", "الطول"],
    rows: [],
  },
};

const color = {
  name: "",
  value: [],
  id: "",
  isDisabled: false, // defult
  rank: 1, // defult
  tags: [""], // defult
  segments: 1,
  numOfphotos: 0,
  disabledSizes: [], // defult
  primeImage: 1, // defult
};

const size = {
  sizeOrder: 6,
  name: "",
  isDisabled: false,
  table: [],
};

const details = {
  imgsrc: "media_assetsB/idA1/color_1/1.jpg", // defult
  title: "",
  subTitle: "",
  paragraph: "",
  crossedPrice: 0,
  price: 0,
};

var colors = [];
var sizes = [];

var items = {};

var currenId = null;
var currentItem = null;
var currentDetails = null;

function getObjectCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function editColor(id, name, segments, numOfphotos, val) {
  const currentColor = getObjectCopy(color);
  currentColor.id = id;
  currentColor.name = name;
  currentColor.segments = Number(segments);
  currentColor.numOfphotos = numOfphotos;
  const valArr = JSON.parse(val);
  valArr.forEach((element) => {
    currentColor.value.push(element);
  });

  colors.push(currentColor);
}

function setId(id) {
  currenId = id;
}

function reset() {
  currentItem = getObjectCopy(product);
  colors = [];
  sizes = [];
  currentDetails = getObjectCopy(details);
  currenId = null;
}

function saveItem() {
  items[currenId] = currentItem;
  items[currenId].colors = colors;
  items[currenId].sizes = sizes;
  reset();
}

function editItem(id, type) {
  currentItem.id = id;
  currentItem.type = type;
  currentItem.mediaSrc = `/media_assets/${id}/`;
}

function editDetails(key, val) {
  if (key.startsWith("price") || key.startsWith("crossedPrice")) {
    currentDetails[key] = Number(val);
  } else {
    currentDetails[key] = val;
    currentDetails.imgsrc = `media_assetsB/${currenId}/color_1/1.jpg`;
  }
}

function editSizeRow(name, order, val1, val2, val3) {
  const currentSize = getObjectCopy(size);
  currentSize.table.push(name);
  currentSize.table.push(`${val1} CM`);
  currentSize.table.push(`${val2} CM`);
  currentSize.table.push(`${val3} CM`);
  currentSize.name = name;
  currentSize.sizeOrder = Number(order);
  sizes.push(currentSize);
}

function downloadJSON(filename = "items.json") {
  // Step 1: Stringify the JSON object
  const jsonString = JSON.stringify(items, null, 2); // Pretty format with 2-space indent

  // Step 2: Create a Blob with the JSON string
  const blob = new Blob([jsonString], { type: "application/json" });

  // Step 3: Create a temporary anchor element to trigger the download
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Step 4: Append the link to the body and trigger the download
  document.body.appendChild(link);
  link.click();

  // Step 5: Clean up by removing the link after the download is triggered
  document.body.removeChild(link);
}

const mod = {
  section1: {
    clo1: { type: "sizeTable" },
    clo2: {
      type: "text",
      details: {
        title: "1جامب سوت",
        subTitle: "جامب سوت جامب سوت",
        paragraph:
          "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      },
    },
  },
  section2: {
    clo1: {
      type: "img",
      details: {
        imgsrc: "media_assetsB/idA1/color_1/1.jpg",
      },
    },
    clo2: {
      type: "text",
      details: {
        title: "جامب سوت",
        subTitle: "جامب سوت جامب سوت",
        paragraph:
          "الخامة عشرة على عشرة و شوية كلام تمام بخصوص المنتج وكدة - مع عرض وبتاع و اى حوار فىسطرين والسلام واحنا جايين نعمل قلبان ونمشى وبلاش اندهاش علشان التقيل لسه مجاش اوى هرى وخلاص ",
      },
    },
  },
  section3: {
    clo1: {
      type: "img",
      details: {
        imgsrc: "media_assets/test/sub/1.png",
        isRound: true,
        figcaption: "أنيق gjhgjghjgوعملى",
      },
    },
    clo2: {
      type: "img",
      details: {
        imgsrc: "media_assets/test/sub/2.png",
        isRound: true,
        figcaption: "أنيق -- مريح -- وعملى",
      },
    },
    clo3: {
      type: "img",
      details: {
        imgsrc: "media_assets/test/sub/3.png",
        isRound: true,
        figcaption: "أنيق -- مريح -- وعملى",
      },
    },
  },
};

reset();
