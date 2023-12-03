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


export async function sendMessage(text : string) {
    bot.sendMessage(ChatId,text)
}

const formatOrderDate = (date : Date) => {
    const formattedDateTime: string = `${date.toLocaleDateString('fr-FR')} ${date.toLocaleTimeString('fr-FR')}`;
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
