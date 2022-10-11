import { Priority } from '../../../constants/enums/priorities';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  name: string;
  train: number;
  valid: number;
  address: string;
  tags?: Tag[];
}

export interface Pagination {
  current?: number;
  ptrainSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'Client-1',
            train: 1777,
            valid: 186,
            address: 'New York No. 1 Lake Park',
            tags: [
              // { value: 'Architect', priority: Priority.LOW },
              // { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 2,
            name: 'Client-2',
            train: 1574,
            valid: 128,
            address: 'London No. 1 Lake Park',
            tags: [{ value: 'Doctor', priority: Priority.HIGH }],
          },
          {
            key: 3,
            name: 'Client-3',
            train: 1541,
            valid: 131,
            address: 'Sidney No. 1 Lake Park',
            tags: [
              { value: 'Professor', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          // {
          //   key: 4,
          //   name: 'Pavel Green',
          //   train: 30,
          //   address: 'New York No. 1 Lake Park',
          //   tags: [
          //     { value: 'Engineer', priority: Priority.MEDIUM },
          //     { value: 'Architect', priority: Priority.LOW },
          //   ],
          // },
          // {
          //   key: 5,
          //   name: 'Alex Brown',
          //   train: 26,
          //   address: 'Minsk',
          //   tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          // },
          // {
          //   key: 6,
          //   name: 'Josh Black',
          //   train: 21,
          //   address: 'New York No. 1 Lake Park',
          //   tags: [
          //     { value: 'Teacher', priority: Priority.INFO },
          //     { value: 'Architect', priority: Priority.LOW },
          //   ],
          // },
          // {
          //   key: 7,
          //   name: 'Cris Green',
          //   train: 22,
          //   address: 'Sidney No. 1 Lake Park',
          //   tags: [{ value: 'Architect', priority: Priority.LOW }],
          // },
          // {
          //   key: 8,
          //   name: 'Jaime Black',
          //   train: 23,
          //   address: 'New York No. 1 Lake Park',
          //   tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          // },
          // {
          //   key: 9,
          //   name: 'Alina Brown',
          //   train: 19,
          //   address: 'Minsk',
          //   tags: [
          //     { value: 'Professor', priority: Priority.LOW },
          //     { value: 'Teacher', priority: Priority.INFO },
          //   ],
          // },
          // {
          //   key: 10,
          //   name: 'Cris Brown',
          //   train: 25,
          //   address: 'London',
          //   tags: [
          //     { value: 'Engineer', priority: Priority.MEDIUM },
          //     { value: 'Teacher', priority: Priority.INFO },
          //   ],
          // },
          // {
          //   key: 11,
          //   name: 'Alina Fens',
          //   train: 19,
          //   address: 'Minsk',
          //   tags: [
          //     { value: 'Professor', priority: Priority.LOW },
          //     { value: 'Teacher', priority: Priority.INFO },
          //   ],
          // },
          // {
          //   key: 12,
          //   name: 'Alex Snak',
          //   train: 28,
          //   address: 'Brest',
          //   tags: [
          //     { value: 'Professor', priority: Priority.LOW },
          //     { value: 'Doctor', priority: Priority.HIGH },
          //   ],
          // },
          // {
          //   key: 13,
          //   name: 'Pavel Dubrouski',
          //   train: 26,
          //   address: 'Minsk',
          //   tags: [
          //     { value: 'Professor', priority: Priority.LOW },
          //     { value: 'Doctor', priority: Priority.HIGH },
          //     { value: 'Teacher', priority: Priority.INFO },
          //     { value: 'Engineer', priority: Priority.MEDIUM },
          //   ],
          // },
          // {
          //   key: 14,
          //   name: 'Jack Donald',
          //   train: 24,
          //   address: 'New York',
          //   tags: [{ value: 'Professor', priority: Priority.LOW }],
          // },
          // {
          //   key: 15,
          //   name: 'Nik Nest',
          //   train: 34,
          //   address: 'London',
          //   tags: [
          //     { value: 'Doctor', priority: Priority.HIGH },
          //     { value: 'Engineer', priority: Priority.MEDIUM },
          //   ],
          // },
          // {
          //   key: 16,
          //   name: 'Zak Nikls',
          //   train: 32,
          //   address: 'Minsk',
          //   tags: [
          //     { value: 'Doctor', priority: Priority.HIGH },
          //     { value: 'Teacher', priority: Priority.INFO },
          //   ],
          // },
          // {
          //   key: 17,
          //   name: 'Petr Dan',
          //   train: 29,
          //   address: 'Gomel',
          //   tags: [
          //     { value: 'Engineer', priority: Priority.MEDIUM },
          //     { value: 'Teacher', priority: Priority.INFO },
          //   ],
          // },
          // {
          //   key: 18,
          //   name: 'Alexa Pirs',
          //   train: 19,
          //   address: 'Moscow',
          //   tags: [
          //     { value: 'Professor', priority: Priority.LOW },
          //     { value: 'Doctor', priority: Priority.HIGH },
          //   ],
          // },
          // {
          //   key: 19,
          //   name: 'Mark Brown',
          //   train: 25,
          //   address: 'London',
          //   tags: [
          //     { value: 'Teacher', priority: Priority.INFO },
          //     { value: 'Doctor', priority: Priority.HIGH },
          //   ],
          // },
          // {
          //   key: 20,
          //   name: 'Alex Brons',
          //   train: 45,
          //   address: 'Bronx',
          //   tags: [{ value: 'Professor', priority: Priority.LOW }],
          // },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

// export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({
//         data: [
//           {
//             key: 1,
//             name: 'John Brown sr.',
//             train: 60,
//             address: 'New York No. 1 Lake Park',
//             children: [
//               {
//                 key: 11,
//                 name: 'John Brown',
//                 train: 42,
//                 valid: 32,
//                 address: 'New York No. 2 Lake Park',
//               },
//               {
//                 key: 12,
//                 name: 'John Brown jr.',
//                 train: 30,
//                 valid: 32,
//                 address: 'New York No. 3 Lake Park',
//                 children: [
//                   {
//                     key: 121,
//                     name: 'Jimmy Brown',
//                     train: 16,
//                     valid: 32,
//                     address: 'New York No. 3 Lake Park',
//                   },
//                 ],
//               },
//               {
//                 key: 13,
//                 name: 'Jim Green sr.',
//                 train: 72,
//                 valid: 32,
//                 address: 'London No. 1 Lake Park',
//                 children: [
//                   {
//                     key: 131,
//                     name: 'Jim Green',
//                     train: 42,
//                     address: 'London No. 2 Lake Park',
//                     children: [
//                       {
//                         key: 1311,
//                         name: 'Jim Green jr.',
//                         train: 25,
//                         valid: 32,
//                         address: 'London No. 3 Lake Park',
//                       },
//                       {
//                         key: 1312,
//                         name: 'Jimmy Green sr.',
//                         train: 18,
//                         valid: 32,
//                         address: 'London No. 4 Lake Park',
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 200,
//             name: 'Joe Black',
//             train: 32,
//             valid: 32,
//             address: 'Sidney No. 1 Lake Park',
//             children: [
//               {
//                 key: 201,
//                 name: 'Joe Green',
//                 train: 42,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 202,
//                     name: 'Joe Green jr.',
//                     train: 25,
//                     valid: 32,
//                     address: 'London No. 3 Lake Park',
//                   },
//                   {
//                     key: 203,
//                     name: 'Joe Green sr.',
//                     train: 18,
//                     valid: 32,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 300,
//             name: 'Jaime Black',
//             train: 22,
//             valid: 32,
//             address: 'Sidney No. 1 Lake Park',
//             children: [
//               {
//                 key: 301,
//                 name: 'Jaime Green',
//                 train: 52,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 302,
//                     name: 'Jaime Green jr.',
//                     train: 21,
//                     valid: 32,
//                     address: 'London No. 3 Lake Park',
//                   },
//                   {
//                     key: 303,
//                     name: 'Jaime Green sr.',
//                     train: 18,
//                     valid: 32,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 400,
//             name: 'Pavel Brown',
//             train: 26,
//             valid: 32,
//             address: 'London No. 2 Lake Park',
//             children: [
//               {
//                 key: 401,
//                 name: 'Pavel Brown',
//                 train: 22,
//                 valid: 32,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 402,
//                     name: 'Pavel Brown jr.',
//                     train: 24,
//                     valid: 32,
//                     address: 'London No. 1 Lake Park',
//                   },
//                   {
//                     key: 403,
//                     name: 'Pavel Brown sr.',
//                     train: 19,
//                     valid: 32,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 500,
//             name: 'Alex Nickls',
//             train: 45,
//             address: 'London No. 2 Lake Park',
//             children: [
//               {
//                 key: 501,
//                 name: 'Marta Nickls',
//                 train: 25,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 502,
//                     name: 'Pavel Nickls jr.',
//                     train: 12,
//                     valid: 32,
//                     address: 'London No. 1 Lake Park',
//                   },
//                   {
//                     key: 503,
//                     name: 'Alina Nickls sr.',
//                     train: 19,
//                     valid: 32,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 600,
//             name: 'Nick Donald',
//             train: 45,
//             address: 'London No. 2 Lake Park',
//             children: [
//               {
//                 key: 601,
//                 name: 'Alexsa Donald',
//                 train: 34,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 602,
//                     name: 'Marta Donald jr.',
//                     train: 24,
//                     address: 'London No. 1 Lake Park',
//                   },
//                   {
//                     key: 603,
//                     name: 'Alex Donald sr.',
//                     train: 19,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 700,
//             name: 'Jo Snider',
//             train: 26,
//             address: 'London No. 2 Lake Park',
//             children: [
//               {
//                 key: 701,
//                 name: 'Jo Snider',
//                 train: 22,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 702,
//                     name: 'Jaems Snider jr.',
//                     train: 24,
//                     address: 'London No. 1 Lake Park',
//                   },
//                   {
//                     key: 703,
//                     name: 'Jin Snider sr.',
//                     train: 19,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 800,
//             name: 'Jon Brown',
//             train: 26,
//             address: 'London No. 2 Lake Park',
//             children: [
//               {
//                 key: 801,
//                 name: 'Kitana Brown',
//                 train: 22,
//                 address: 'London No. 2 Lake Park',
//                 children: [
//                   {
//                     key: 802,
//                     name: 'Cris Brown jr.',
//                     train: 24,
//                     address: 'London No. 1 Lake Park',
//                   },
//                   {
//                     key: 803,
//                     name: 'Jon Brown sr.',
//                     train: 19,
//                     address: 'London No. 4 Lake Park',
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//         pagination: { ...pagination, total: 8 },
//       });
//     }, 1000);
//   });
// };

// export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({
//         data: [
//           {
//             key: 1,
//             name: `Edward`,
//             train: 32,
//             address: `London Park no.1`,
//           },
//           {
//             key: 2,
//             name: `Alex`,
//             train: 45,
//             address: `London Park no.2`,
//           },
//           {
//             key: 3,
//             name: `Niko`,
//             train: 21,
//             address: `London Park no.3`,
//           },
//           {
//             key: 4,
//             name: `Josh`,
//             train: 18,
//             address: `London Park no.4`,
//           },
//           {
//             key: 5,
//             name: `Jo`,
//             train: 15,
//             address: `Minsk Park no.1`,
//           },
//           {
//             key: 6,
//             name: `Jaimi`,
//             train: 18,
//             address: `London Park no.2`,
//           },
//           {
//             key: 7,
//             name: `Alexa`,
//             train: 24,
//             address: `London Park no.6`,
//           },
//           {
//             key: 8,
//             name: `Donald`,
//             train: 27,
//             address: `London Park no.7`,
//           },
//           {
//             key: 9,
//             name: `Pavel`,
//             train: 17,
//             address: `London Park no.9`,
//           },
//           {
//             key: 10,
//             name: `Nick`,
//             train: 18,
//             address: `London Park no.1`,
//           },
//           {
//             key: 11,
//             name: `Dasha`,
//             train: 25,
//             address: `London Park no.2`,
//           },
//           {
//             key: 12,
//             name: `Alex`,
//             train: 27,
//             address: `London Park no.3`,
//           },
//           {
//             key: 13,
//             name: `Vic`,
//             train: 29,
//             address: `London Park no.2`,
//           },
//           {
//             key: 14,
//             name: `Natalia`,
//             train: 25,
//             address: `London Park no.4`,
//           },
//           {
//             key: 15,
//             name: `Zack`,
//             train: 27,
//             address: `London Park no.1`,
//           },
//           {
//             key: 16,
//             name: `Jack`,
//             train: 31,
//             address: `London Park no.4`,
//           },
//         ],
//         pagination: { ...pagination, total: 16 },
//       });
//     }, 1000);
//   });
// };
