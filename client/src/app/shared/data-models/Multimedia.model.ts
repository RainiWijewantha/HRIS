export interface MultimediaModel {
  id?:any,
  userId:any,
  channelId?:any,
  chatId?:any,
  file?:any,
  title:any,
  status?:any,
  likes?:any,
  comments?:any,
  shares?:any,
  timestamp:any,
  contentType:any,
  sharedUserId?:any, // this line added for implement shares
  sharedUserCaption?:any, // this line added for implement shares
  sharedUserTimestamp?:any // this line added for implement shares
}
