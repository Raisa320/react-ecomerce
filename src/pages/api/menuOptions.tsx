interface Option {
  name: string;
  icon: string;
  link: string;
  type?: string;
  subOptions?: Option[];
}

const options: Option[] = [
  {
    name: "Dashboard",
    icon: "dashboard",
    link: "/dashboard",
  },
  {
    name: "Catalog",
    link: "#",
    icon: "catalog",
    type: "moreOptions",
    subOptions: [
      {
        name: "Products",
        icon: "box",
        link: "/products",
      },
      {
        name: "Categories",
        icon: "box",
        link: "/categories",
      },
    ],
  },
];

export default options;

// const [
//   {
//     "name": "Dashboard",
//     "icon": "dashboard",
//     "link": "/dashboard"
//   },
//   {
//     "name": "Catalog",
//     "link": "#",
//     "icon": "catalog",
//     "subOptions": [
//       {
//         "name": "Products",
//         "icon": "box",
//         "link": "/products"
//       },
//       {
//         "name": "Categories",
//         "icon": "box",
//         "link": "/categories"
//       }
//     ]
//   }
// ]
