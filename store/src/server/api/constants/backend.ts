export const BaseUrl = `http://${process.env.NEXT_PUBLIC_APP_DEV_HOST ? process.env.NEXT_PUBLIC_APP_DEV_HOST : ""}:${process.env.NEXT_PUBLIC_APP_DEV_PORT ? process.env.NEXT_PUBLIC_APP_DEV_PORT : ""}`
export const AppUrl = BaseUrl +"/api/"

export const TELEGRAM_API_KEY = "6642036057:AAGBfvYfqH21kjR9jAuhfm-9aEQMlOu7cq0"