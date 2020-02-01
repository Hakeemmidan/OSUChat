class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def load(start_id)
    if start_id.is_a? Integer
      messages = Message.where("id < #{start_id}").order('id desc').limit(10)
    else
      messages = Message.last(10)
    end

    last_msg_id = messages[-1].id
    socket = { messages: messages, lastMsgId: last_msg_id, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  
  def unsubscribed; end
end
