'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    var io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        origin: "http://128.189.80.12:19000",
      }
    });
  
    io.on('connection', socket => {
        console.log(socket.id);
        socket.on("create-pin", (longitude, latitude) => {
          console.log("HELLO WORLD!!!")
          socket.broadcast.emit("receive-pin", longitude, latitude)
        })
    });
  },
};
