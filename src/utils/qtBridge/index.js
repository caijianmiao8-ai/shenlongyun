import QWebChannel from './qwebchannel';

export const sendMsgToQt = (data) => {
  new QWebChannel(window.qt.webChannelTransport, function (channel) {
    let qtui = channel.objects.jsBridgeObj;
    qtui.request(data);
    qtui.sendMsg(data);
  });
};
