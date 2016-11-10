import ChatService from '../chatService/chatService';
import ResultService from '../resultService/resultService';
import RoomService from '../roomService/roomService';

class Mapper {
    ChatService = new ChatService();
    ResultService = new ResultService();
    RoomService = new RoomService();
}
export default new Mapper();