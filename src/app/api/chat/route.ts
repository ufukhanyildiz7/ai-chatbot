import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream ,StreamingTextResponse} from "ai";
import { measureMemory } from "vm";
import { openai_key } from "@/openai";

const configuration = new Configuration({
  apiKey: openai_key.apikey,
});

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
    const {messages} = await req.json();
    
    let chatGptMessages = [
      { 
        role: "system", 
        content:
        "Sen bir yazılım öğretmenisin ve sadece yazılımla ilgili konuşabilirsin.Yazılımdan başka hiç birşeye cevap veremezsin"
       },
      ...messages,
  ];

  console.log(chatGptMessages);

    const response = await openai.createChatCompletion({
       model:"gpt-3.5-turbo",
       stream:true,
       messages:chatGptMessages,
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}