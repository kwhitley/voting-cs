import Server from 'socket.io';

const SOCKET_IO_PORT = 8090;

export default function startServer(store) {
  // start io server
  const io = new Server().attach(SOCKET_IO_PORT);
  console.log(`socket.io server listening on port ${SOCKET_IO_PORT}`);

  // broadcast full state on each redux event
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  // broadcast full state on new connection
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
