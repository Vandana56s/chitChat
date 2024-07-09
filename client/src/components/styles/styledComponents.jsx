import { styled } from '@mui/material/styles';
import { Link as LinkComponent } from 'react-router-dom';
import { grayColor, orange } from '../../constants/color';

export const VisuallyHiddenInput = styled('input')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const InputBox = styled("input")`
  width: 100%;
  height:100%;
  border:none;
  outline:none;
  padding: 0.3rem;
  border_radius:1.5rem;
  background-color:${grayColor};
`;


export const sampleChats = [
  {
    avatar: ["https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"],
    name: "sakshi",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_1280.png"],
    name: "vandana",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
  {
    avatar: ["https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"],
    name: "aakansha",
    _id: "3",
    groupChat: false,
    members: ["3", "4"],
  }
];

export const sampleUsers = [
  {
    avatar: ["https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"],
    name: "sakshi",
    _id: "1",
  },
  {
    avatar: ["https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_1280.png"],
    name: "vandana",
    _id: "2",
  },
  {
    avatar: ["https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"],
    name: "aakansha",
    _id: "3",
  }
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"],
      name: "sakshi",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_1280.png"],
      name: "vandana",
    },
    _id: "2",
  },
  {
    sender: {
      avatar: ["https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"],
      name: "aakansha",
    },
    _id: "3",
  }
];
export const sampleMessage = [
  {
    attachments: [
     // {
      //  public_id: "ashdjd",
       // url: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png",
     // }
    ],
    content: "hi sakshi! abe ush din wali pic send krna .",
    _id: "dfddjdndbdbdbd",
    sender: {
      _id: "user.id",
      name: "vandana",
    },
    chat: "chatId",
    createdAt: "2024-03-12T10:41:30.630Z" // Corrected createdAt key
  },
  {
    attachments: [
      {
        public_id: "ashdjd",
        url: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png",
      }
    ],
    content: "",
    _id: "dfddjdndbdbdbd",
    sender: {
      _id: "dfdfdfd",
      name: "chaman 2",
    },
    chat: "chatId",
    createdAt: "2024-03-12T10:41:30.630Z" // Corrected createdAt key
  }
];

