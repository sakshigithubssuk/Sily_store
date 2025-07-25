export const color=[
  "white",
  "Black",
  "Red",
  "marun",
  "Begie",
  "Pink",
  "Green",
  "Yellow",
];
export const filters =[
  {
    
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'blue', label: 'Blue' },
        { value: 'black', label: 'Black' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
      ],
    },
    {
      id:"price",
      name:"Price",
      options:[
        {value:"159-399",label:"$159 To $399"},
        {value:"399-999",label:"$399 To $999"},
        {value:"999-1999",label:"$999 To $1999"},
        {value:"1999-2999",label:"$1999 To $2999"},
        {value:"2999-3999",label:"$2999 To $3999"},
        {value:"3999-3999",label:"$3999 To $4999"},
      ]
    },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S'},
      { value: 'M', label: 'M'},
      { value: 'L', label: 'L'},
    ], 
  },
  {
    id:"discount",
    name:"Discount Range",
    options:[
      {value:"10",label:"10% and Above"},
      {value:"20",label:"20% and Above"},
      {value:"30",label:"30% and Above"},
      {value:"40",label:"40% and Above"},
      {value:"50",label:"50% and Above"},
      {value:"60",label:"60% and Above"},
      {value:"70",label:"70% and Above"},
      {value:"80",label:"80% and Above"},

    ]
  },
  {
    id:"stock",
    name:"Availability",
    options:[
      {value:"in_stock",label:"In Stock"},
      {value:"out_of_stock",label:"Out Of Stock"},
    ]
  }
];
export const singleFilters=[
  {
    
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id:"price",
    name:"Price",
    options:[
      {value:"159-399",label:"$159 To $399"},
      {value:"399-999",label:"$399 To $999"},
      {value:"999-1999",label:"$999 To $1999"},
      {value:"1999-2999",label:"$1999 To $2999"},
      {value:"2999-3999",label:"$2999 To $3999"},
      {value:"3999-3999",label:"$3999 To $4999"},
    ]
  },
{
  id: 'size',
  name: 'Size',
  options: [
    { value: 'S', label: 'S'},
    { value: 'M', label: 'M'},
    { value: 'L', label: 'L'},
  ], 
},
{
  id:"discount",
  name:"Discount Range",
  options:[
    {value:"10",label:"10% and Above"},
    {value:"20",label:"20% and Above"},
    {value:"30",label:"30% and Above"},
    {value:"40",label:"40% and Above"},
    {value:"50",label:"50% and Above"},
    {value:"60",label:"60% and Above"},
    {value:"70",label:"70% and Above"},
    {value:"80",label:"80% and Above"},

  ]
},
{
  id:"stock",
  name:"Availability",
  options:[
    {value:"in_stock",label:"In Stock"},
    {value:"out_of_stock",label:"Out Of Stock"},
  ]
}
]