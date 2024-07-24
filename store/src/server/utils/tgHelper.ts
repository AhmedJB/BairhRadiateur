import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_API_KEY } from "../api/constants/backend";

interface InputOrderData {
    order: {
        address: string;
        name: string;
        tel: string;
        total: number;
    };
    orderDetails: {
        name: string;
        price: number;
        product_id: string;
        quantity: number;
    }[];
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TELEGRAM_API_KEY);


const ChatId  = "-4039182700"


export async function sendMessage(text : string,phone:string) {
    phone = formatNumber(phone)
    const reply_markup = {
        inline_keyboard: [
          [
            {
              text: "Whatsapp",
              url: `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
            },
          ],
        ],
      };
    await bot.sendMessage(ChatId,text,{reply_markup})
}

const formatOrderDate = (date : Date) => {
    const formattedDateTime = `${date.toLocaleDateString('fr-FR')} ${date.toLocaleTimeString('fr-FR')}`;
    return formattedDateTime;
}

export const formatOrder = (data : InputOrderData,OrderId : string,date : Date ) => {
    let message = `############ ${formatOrderDate(date)} ################
Order ID : #${OrderId}
Nom : ${data.order.name}
Tel : ${data.order.tel}
Address : ${data.order.address}
############ Produits #############\n`
    for (const prod of data.orderDetails){
        message += `Produit : ${prod.name}
ID : ${prod.product_id}
Prix : ${prod.price} MAD
Quantite : ${prod.quantity}
Total : ${prod.price * prod.quantity}
-------------------------------------\n`
    }
    message += `####### Total Final : ${data.order.total} MAD ###############`
    return message
}


export const formatNumber = (phone:string) => {
    if (phone.startsWith("06") || phone.startsWith("07")){
        phone = phone.replace("0","+212")
    }
    return phone
}