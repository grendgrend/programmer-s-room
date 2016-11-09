import ChatService from '../chatService/chatService';
import ResultService from '../resultService/resultService';

class Mapper {
    ChatService = new ChatService();
    ResultService = new ResultService();
}
export default new Mapper();