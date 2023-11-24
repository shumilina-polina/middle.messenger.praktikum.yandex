export type RegisterData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type LoginData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};

export type ChangeData = {
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  email: string;
};

export type ChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export type CreateChatData = {
  title: string;
};

export type AddUserToChatData = {
  users: number[];
  chatId: number;
};

export type Chat = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
};

export type Message = {
  content: string;
  type?: string;
};

export type OldMessage = {
  chat_id: number;
  time: string | Date;
  type: string;
  user_id: string;
  content: string;
  isAdmin?: boolean;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};
