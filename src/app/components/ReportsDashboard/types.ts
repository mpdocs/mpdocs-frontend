export interface Report {
  id: number;
  user: User;
  template: Template;
  is_reviewed: boolean;
  created_at: string;
  updated_at: string;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
}

interface Template {
  id: number;
  name: string;
}

export const MockData: Report[] = [
  {
    id: 0,
    user: {
      id: 0,
      first_name: "Bob",
      last_name: "Dylon",
      username: "huesos",
    },
    template: {
      id: 0,
      name: "template",
    },
    is_reviewed: true,
    created_at: "2024-06-19T20:43:34.640Z",
    updated_at: "2024-06-19T20:43:34.640Z",
  },
  {
    id: 1,
    user: {
      id: 1,
      first_name: "Alice",
      last_name: "Smith",
      username: "alice_smith",
    },
    template: {
      id: 1,
      name: "another template",
    },
    is_reviewed: false,
    created_at: "2024-06-20T10:15:00.000Z",
    updated_at: "2024-06-20T10:15:00.000Z",
  },
  {
    id: 2,
    user: {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      username: "john_doe",
    },
    template: {
      id: 2,
      name: "third template",
    },
    is_reviewed: true,
    created_at: "2024-06-21T08:30:00.000Z",
    updated_at: "2024-06-21T08:30:00.000Z",
  },
  {
    id: 3,
    user: {
      id: 3,
      first_name: "Emma",
      last_name: "Johnson",
      username: "emma_johnson",
    },
    template: {
      id: 3,
      name: "fourth template",
    },
    is_reviewed: false,
    created_at: "2024-06-22T14:45:00.000Z",
    updated_at: "2024-06-22T14:45:00.000Z",
  },
  {
    id: 4,
    user: {
      id: 4,
      first_name: "Michael",
      last_name: "Brown",
      username: "michael_brown",
    },
    template: {
      id: 4,
      name: "fifth template",
    },
    is_reviewed: true,
    created_at: "2024-06-23T12:00:00.000Z",
    updated_at: "2024-06-23T12:00:00.000Z",
  },
  {
    id: 5,
    user: {
      id: 5,
      first_name: "Sophia",
      last_name: "Garcia",
      username: "sophia_garcia",
    },
    template: {
      id: 5,
      name: "sixth template",
    },
    is_reviewed: false,
    created_at: "2024-06-24T09:30:00.000Z",
    updated_at: "2024-06-24T09:30:00.000Z",
  },
  {
    id: 6,
    user: {
      id: 6,
      first_name: "James",
      last_name: "Martinez",
      username: "james_martinez",
    },
    template: {
      id: 6,
      name: "seventh template",
    },
    is_reviewed: true,
    created_at: "2024-06-25T16:00:00.000Z",
    updated_at: "2024-06-25T16:00:00.000Z",
  },
  {
    id: 7,
    user: {
      id: 7,
      first_name: "Olivia",
      last_name: "Wilson",
      username: "olivia_wilson",
    },
    template: {
      id: 7,
      name: "eighth template",
    },
    is_reviewed: false,
    created_at: "2024-06-26T13:45:00.000Z",
    updated_at: "2024-06-26T13:45:00.000Z",
  },
  {
    id: 8,
    user: {
      id: 8,
      first_name: "William",
      last_name: "Lopez",
      username: "william_lopez",
    },
    template: {
      id: 8,
      name: "ninth template",
    },
    is_reviewed: true,
    created_at: "2024-06-27T11:15:00.000Z",
    updated_at: "2024-06-27T11:15:00.000Z",
  },
  {
    id: 9,
    user: {
      id: 9,
      first_name: "Ava",
      last_name: "Davis",
      username: "ava_davis",
    },
    template: {
      id: 9,
      name: "tenth template",
    },
    is_reviewed: false,
    created_at: "2024-06-28T10:00:00.000Z",
    updated_at: "2024-06-28T10:00:00.000Z",
  },
];
