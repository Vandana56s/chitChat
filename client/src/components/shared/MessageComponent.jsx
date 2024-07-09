import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { Attachment } from '@mui/icons-material';
import { fileFormat } from '../../lib/features';
import RenderAttachment from './RenderAttachment';

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start", // Adjust alignment based on sender
        backgroundColor: sameSender ? "#DCF8C6" : "white",
        color: sameSender ? "black" : "black",
        borderRadius: "5px",
        padding: "0.1rem",
        maxWidth: "60%", // Limit the max width of the message
        margin: "0.5rem",
        display: 'flex',
        flexDirection: 'column',
        alignItems: sameSender ? 'flex-end' : 'flex-start',
      }}
    >
      {!sameSender && (
        <Typography color={"#6082B6"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length>0 &&
      attachments.map((attachment,index)=>{
        const url=attachment.url;
        const file=fileFormat(url);
        return (
            <Box key={index}>
                <a
                href={url}
                target="_blank"
                download
                style={{
                    color:"black",
                }}
                >
                    
                    {RenderAttachment(file,url)}
                </a>
            </Box>
        )
      })
      }
      <Typography variant="caption" color="textSecondary">{timeAgo}</Typography>
    </div>
  );
};

export default memo(MessageComponent);
