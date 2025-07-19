"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { askChatbot } from '@/ai/flows/chatbot-flow';
import { useToast } from '@/hooks/use-toast';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I'm an AI assistant. Ask me about John Doe's portfolio.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => `${m.sender}: ${m.text}`).join('\n');
      const botResponse = await askChatbot({ question: input, history });
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get a response from the chatbot.",
      });
      setMessages((prev) => [...prev, { text: "Sorry, I ran into an error. Please try again.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-[28rem] flex flex-col shadow-2xl animate-in fade-in zoom-in-95">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6" />
              <CardTitle className="text-lg">AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8 hover:bg-primary/80">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow p-0">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-end gap-2 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot size={20}/></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                     {message.sender === 'user' && (
                      <Avatar className="h-8 w-8">
                         <AvatarFallback><User size={20}/></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-end gap-2 justify-start">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot size={20}/></AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-secondary text-secondary-foreground">
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-0"></span>
                          <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-150"></span>
                          <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-300"></span>
                        </div>
                      </div>
                    </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <div className="p-4 border-t flex items-center gap-2">
            <Input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              className="flex-grow text-sm"
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ) : (
        <Button
          onClick={toggleOpen}
          className="rounded-full w-16 h-16 shadow-lg transform hover:scale-110 transition-transform duration-200 bg-primary hover:bg-primary/90"
          aria-label="Open chat"
        >
          <Bot className="w-8 h-8 text-primary-foreground" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
