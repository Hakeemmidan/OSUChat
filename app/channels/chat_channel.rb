class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.create(body: data['message']['body'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def load(data)
    if data['firstLoadedMsgId'].is_a? Integer
      messages = Message.where("id < #{data['firstLoadedMsgId']}").order('id asc').limit(25)
    else
      messages = Message.last(25)
    end
    
    first_loaded_msg_id = messages[0].id
    socket = { messages: messages, firstLoadedMsgId: first_loaded_msg_id, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  
  def unsubscribed; end
end
